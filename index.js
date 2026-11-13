// ============================================================
// ⚡ THUNDER BOT XMD - index.js
// Main file: Bot + Dashboard + Pairing Code + Menu Numbers
// ============================================================
require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, Browsers, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const pino = require('pino');
const config = require('./config');
const { buildMenu, buildSubMenu, isMenuNumber } = require('./lib/menu');
const { getText, runtime, isOwner, loadDB, saveDB } = require('./lib/function');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let sock = null;
let connectionStatus = 'disconnected';
let lastPhone = '';
let startTime = Date.now();
let plugins = new Map();

// ---------- LOAD PLUGINS ----------
function loadPlugins() {
  plugins.clear();
  const pluginDir = path.join(__dirname, 'plugins');
  if (!fs.existsSync(pluginDir)) fs.mkdirSync(pluginDir, { recursive: true });
  const files = fs.readdirSync(pluginDir).filter(f => f.endsWith('.js'));
  for (const file of files) {
    try {
      const full = path.join(pluginDir, file);
      delete require.cache[require.resolve(full)];
      const cmd = require(full);
      if (cmd && cmd.name) {
        plugins.set(cmd.name.toLowerCase(), cmd);
        if (cmd.alias) cmd.alias.forEach(a => plugins.set(String(a).toLowerCase(), cmd));
      }
    } catch (e) { console.log('Plugin error', file, e.message); }
  }
  console.log(`✅ Loaded ${plugins.size} commands from plugins/`);
  // If no plugins yet, menu still works because lib/menu.js handles .menu
}
loadPlugins();

// ---------- BOT CONNECTION ----------
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');
  const { version } = await fetchLatestBaileysVersion().catch(() => ({ version: [2, 3000, 1015901307] }));

  sock = makeWASocket({
    version,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false,
    auth: state,
    browser: Browsers.macOS('Desktop'),
    syncFullHistory: false,
    markOnlineOnConnect: true,
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'open') {
      connectionStatus = 'connected';
      console.log('✅ Thunder Bot XMD Connected!');
      // Set bio
      try { await sock.updateProfileStatus(config.botBio); } catch {}
    }
    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = code !== DisconnectReason.loggedOut;
      connectionStatus = 'disconnected';
      console.log('Connection closed, reconnect:', shouldReconnect, 'code:', code);
      if (shouldReconnect) setTimeout(startBot, 3000);
      else {
        try { fs.rmSync('auth_info', { recursive: true, force: true }); } catch {}
        setTimeout(startBot, 2000);
      }
    }
    if (connection === 'connecting') connectionStatus = 'connecting';
  });

  // ---------- MESSAGE HANDLER ----------
  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const isGroup = from.endsWith('@g.us');
    const sender = isGroup ? (msg.key.participant || from) : from;
    const body = getText(msg);
    const text = body.trim();
    const pushName = msg.pushName || 'User';
    const prefix = config.prefix;

    // --- 1. MENU NUMBER REPLY: user sends "1" ... "11" ---
    // Works even without prefix. This is your new menu system.
    if (isMenuNumber(text)) {
      const sub = buildSubMenu(text, { prefix });
      if (sub) {
        await sock.sendMessage(from, { text: sub }, { quoted: msg }).catch(() => {});
        return;
      }
    }

    // --- 2. MENU WITH NUMBER: .menu 1 , .menu 7 ---
    if (text.startsWith(prefix)) {
      const args = text.slice(prefix.length).trim().split(/ +/);
      const cmdName = args.shift().toLowerCase();

      // .menu / .help with number
      if ((cmdName === 'menu' || cmdName === 'help') && args[0]) {
        const sub = buildSubMenu(args[0], { prefix });
        if (sub) {
          await sock.sendMessage(from, { text: sub }, { quoted: msg }).catch(() => {});
          return;
        }
      }
      // .menu alone -> main numbered menu
      if (cmdName === 'menu' || cmdName === 'help') {
        const main = buildMenu({ prefix, pushName });
        await sock.sendMessage(from, { image: { url: config.botPfp }, caption: main }, { quoted: msg }).catch(async () => {
          await sock.sendMessage(from, { text: main }, { quoted: msg });
        });
        return;
      }
      // .1 , .2 ... .11 as shortcut
      if (/^(1|2|3|4|5|6|7|8|9|10|11)$/.test(cmdName)) {
        const sub = buildSubMenu(cmdName, { prefix });
        if (sub) {
          await sock.sendMessage(from, { text: sub }, { quoted: msg }).catch(() => {});
          return;
        }
      }
      // .owner , .auto , .anti etc as shortcut to submenu
      const subByName = buildSubMenu(cmdName, { prefix });
      if (['owner','auto','anti','moderator','group','vv','downloader','tools','settings','sticker','fun'].includes(cmdName) && subByName) {
        await sock.sendMessage(from, { text: subByName }, { quoted: msg }).catch(() => {});
        return;
      }

      // --- 3. NORMAL PLUGIN COMMANDS ---
      const command = plugins.get(cmdName);
      if (!command) return;

      const context = {
        sock, msg, from, sender, isGroup, pushName, body: text, args, config,
        prefix, plugins, startTime,
        reply: (t, extra = {}) => sock.sendMessage(from, { text: t, ...extra }, { quoted: msg }),
        sendImage: (url, caption) => sock.sendMessage(from, { image: { url }, caption }, { quoted: msg }),
      };
      try {
        if (command.ownerOnly && !isOwner(sender, from)) {
          await context.reply(config.messages.ownerOnly);
          return;
        }
        await command.run(context);
      } catch (e) {
        console.log('Command error', cmdName, e);
        await context.reply('❌ Error: ' + e.message).catch(() => {});
      }
      return;
    }

    // --- 4. AUTO-REPLY for .autoread etc could be added here later ---
    // For now, ignore non-command messages
  });

  return sock;
}

// ---------- WEB API ----------
app.get('/api/status', (req, res) => {
  res.json({ status: connectionStatus, bot: config.botName, phone: lastPhone, uptime: Date.now() - startTime, totalCmds: 200, prefix: config.prefix });
});

app.post('/api/pair', async (req, res) => {
  try {
    let { phone } = req.body || {};
    if (!phone) return res.json({ success: false, message: 'Enter phone number' });
    phone = String(phone).replace(/[^0-9]/g, '');
    if (phone.length < 10) return res.json({ success: false, message: 'Invalid number. Use format 2348012345678' });
    if (!sock) return res.json({ success: false, message: 'Bot not started yet, wait 5 sec and retry' });
    if (sock.authState.creds.registered) {
      return res.json({ success: false, message: 'Already linked! If you want new number, delete auth_info and restart.' });
    }
    lastPhone = phone;
    connectionStatus = 'connecting';
    const code = await sock.requestPairingCode(phone);
    console.log(`Pairing code for ${phone}: ${code}`);
    res.json({ success: true, code, message: 'Enter this 8-digit code in WhatsApp > Linked Devices > Link with phone number' });
  } catch (e) {
    console.log('Pair error', e);
    res.json({ success: false, message: e.message || 'Failed to generate code. Try again.' });
  }
});

app.post('/api/restart', async (req, res) => {
  try { if (sock) sock.end(); } catch {}
  setTimeout(startBot, 1000);
  res.json({ success: true });
});

app.listen(config.port, () => {
  console.log(`🌩️ Thunder Bot XMD Dashboard: http://localhost:${config.port}`);
  console.log(`🌩️ Open site, enter number, click GENERATE CODE`);
});

startBot();
