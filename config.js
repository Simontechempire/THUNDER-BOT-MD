// ⚡ THUNDER BOT XMD - CONFIG.JS

module.exports = {

  // BOT INFO
  botName: 'Thunder Bot XMD',
  botNameShort: 'Thunder XMD',
  botVersion: '1.0.0',
  botPfp: 'https://files.catbox.moe/e80owj.jpg',
  botBio: '⚡ Thunder Bot XMD | 200+ Commands',
  botFooter: '🐺 Thunder. X ᴍᴅ — 𝟸𝟶𝟸𝟼',

  // OWNER
  ownerName: 'Thunder',
  ownerNumber: process.env.OWNER_NUMBER || '2340000000000',
  owners: [],

  // PREFIX & MODE
  prefix: '.',
  mode: 'public',
  language: 'en',
  timezone: 'Africa/Lagos',

  // SERVER
  port: 3000,
  pairingTimeout: 60000,

  // MENU DESIGN - your exact design
  menuHeader: `◈┈▉ \`thunder xｍｄ\` ▉┄◈`,
  menuFooter: `◈┈▉ \`tｈundeｒx ｍｄ\` ▉┄◈ ...`,

  // AUTO FEATURES - all OFF by default
  settings: {
    autoread: false,
    autotyping: false,
    autoonline: false,
    autorecording: false,
    autoreact: false,
    autoreply: false,
    autosticker: false,
    autoview: false,
    autobio: false,
    autolikestatus: false,
    autoblock: false,
    autodownload: false,
    autowelcome: false,
    autogoodbye: false,
    autostatus: false,
    autorecord: false,
    autotranslate: false,
    autogreet: false,
    autorespond: false,
    autoshare: false,

    // ANTI
    antilink: false,
    antibot: false,
    antispam: false,
    antiflood: false,
    antitag: false,
    antidelete: false,
    antibadword: false,
    antisticker: false,
    antifake: false,
    antipromote: false,
    antidemote: false,
    antivirus: false,
    antiraid: false,
    antichannel: false,
    antimention: false,
    antinsfw: false,
    antiduplicate: false,
    antiedit: false,
    antigroupname: false,
    antigroupdesc: false,
  },

  // ANTI SETTINGS
  anti: {
    warnLimit: 3,
    floodLimit: 5,
    floodTime: 10000,
    badwords: ['fuck', 'shit', 'bitch', 'porn', 'xxx'],
    allowedLinks: ['youtube.com', 'youtu.be'],
  },

  // WELCOME
  welcome: {
    message: 'Welcome @user to @group! 🎉',
    goodbyeMessage: 'Goodbye @user 👋',
  },

  // LIMITS, MESSAGES, STICKER, DOWNLOADER...
    }
