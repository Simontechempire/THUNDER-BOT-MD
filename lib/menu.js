// ============================================================
// ⚡ THUNDER BOT XMD - lib/menu.js
// Your EXACT menu design - Do not change style
// Used by .menu / .help / .alive
// ============================================================
const config = require('../config');

function buildMenu({ prefix = config.prefix, pushName = 'User', totalCmds = 200 } = {}) {
  const P = prefix;
  const owner = config.ownerName;
  const bot = config.botName;

  return `◈┈▉ \`thunder xｍｄ\` ▉┄◈
> ╭────↯
> │ ➠ *𝙾𝚆𝙽𝙴𝚁:* ${owner}
> │ ➠ *𝙿𝚁𝙴𝙵𝙸𝚇:* ${P}
> │ ➠ *𝚃𝙾𝚃𝙰𝙻 𝙲𝙼𝙳𝚂:* 𝟸𝟶𝟶
> ╰────↯

ᴏᴡɴᴇʀ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}menu
┆ ◈ ${P}help
┆ ◈ ${P}ping
┆ ◈ ${P}alive
┆ ◈ ${P}owner
┆ ◈ ${P}runtime
┆ ◈ ${P}botinfo
┆ ◈ ${P}restart
┆ ◈ ${P}shutdown
┆ ◈ ${P}broadcast
┆ ◈ ${P}setprefix
┆ ◈ ${P}setname
┆ ◈ ${P}setbio
┆ ◈ ${P}setpp
┆ ◈ ${P}join
┆ ◈ ${P}leave
┆ ◈ ${P}block
┆ ◈ ${P}unblock
┆ ◈ ${P}ban
┆ ◈ ${P}unban
┆ ◈ ${P}eval
┆ ◈ ${P}update
┆ ◈ ${P}getfile
┆ ◈ ${P}save
┆ ◈ ${P}clearcache
╰──────────◈

ᴀᴜᴛᴏ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}autoread
┆ ◈ ${P}autotyping
┆ ◈ ${P}autoonline
┆ ◈ ${P}autorecording
┆ ◈ ${P}autoreact
┆ ◈ ${P}autoreply
┆ ◈ ${P}autosticker
┆ ◈ ${P}autoview
┆ ◈ ${P}autobio
┆ ◈ ${P}autolikestatus
┆ ◈ ${P}autoblock
┆ ◈ ${P}autodownload
┆ ◈ ${P}autowelcome
┆ ◈ ${P}autogoodbye
┆ ◈ ${P}autostatus
┆ ◈ ${P}autorecord
┆ ◈ ${P}autotranslate
┆ ◈ ${P}autogreet
┆ ◈ ${P}autorespond
┆ ◈ ${P}autoshare
╰──────────◈

ᴀɴᴛɪ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}antilink
┆ ◈ ${P}antibot
┆ ◈ ${P}antispam
┆ ◈ ${P}antiflood
┆ ◈ ${P}antitag
┆ ◈ ${P}antidelete
┆ ◈ ${P}antibadword
┆ ◈ ${P}antisticker
┆ ◈ ${P}antifake
┆ ◈ ${P}antipromote
┆ ◈ ${P}antidemote
┆ ◈ ${P}antivirus
┆ ◈ ${P}antiraid
┆ ◈ ${P}antichannel
┆ ◈ ${P}antimention
┆ ◈ ${P}antinsfw
┆ ◈ ${P}antiduplicate
┆ ◈ ${P}antigroupname
┆ ◈ ${P}antigroupdesc
┆ ◈ ${P}antiedit
╰──────────◈

ᴍᴏᴅᴇʀᴀᴛᴏʀ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}kick
┆ ◈ ${P}add
┆ ◈ ${P}promote
┆ ◈ ${P}demote
┆ ◈ ${P}warn
┆ ◈ ${P}warnings
┆ ◈ ${P}resetwarn
┆ ◈ ${P}mute
┆ ◈ ${P}unmute
┆ ◈ ${P}delete
┆ ◈ ${P}purge
┆ ◈ ${P}kickall
┆ ◈ ${P}tagadmin
┆ ◈ ${P}hidetag
┆ ◈ ${P}getjid
┆ ◈ ${P}revoke
┆ ◈ ${P}approve
┆ ◈ ${P}disapprove
┆ ◈ ${P}lockmember
┆ ◈ ${P}unlockmember
╰──────────◈

ɢʀᴏᴜᴘ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}groupinfo
┆ ◈ ${P}grouplink
┆ ◈ ${P}setname
┆ ◈ ${P}setdesc
┆ ◈ ${P}open
┆ ◈ ${P}close
┆ ◈ ${P}tagall
┆ ◈ ${P}hidetag
┆ ◈ ${P}listmembers
┆ ◈ ${P}admins
┆ ◈ ${P}totag
┆ ◈ ${P}invite
┆ ◈ ${P}revoke
┆ ◈ ${P}getgroup
┆ ◈ ${P}groupstats
┆ ◈ ${P}setsubject
┆ ◈ ${P}setwelcome
┆ ◈ ${P}setgoodbye
┆ ◈ ${P}welcome
┆ ◈ ${P}goodbye
╰──────────◈

ᴠᴠ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}vv
┆ ◈ ${P}viewonce
┆ ◈ ${P}readviewonce
┆ ◈ ${P}saveviewonce
┆ ◈ ${P}vvimage
┆ ◈ ${P}vvvideo
┆ ◈ ${P}vvsticker
┆ ◈ ${P}vvstatus
┆ ◈ ${P}vvreply
┆ ◈ ${P}vvinfo
╰──────────◈

ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}play
┆ ◈ ${P}song
┆ ◈ ${P}video
┆ ◈ ${P}tiktok
┆ ◈ ${P}instagram
┆ ◈ ${P}facebook
┆ ◈ ${P}mediafire
┆ ◈ ${P}apk
┆ ◈ ${P}pinterest
┆ ◈ ${P}github
┆ ◈ ${P}twitter
┆ ◈ ${P}spotify
┆ ◈ ${P}ytmp3
┆ ◈ ${P}ytmp4
┆ ◈ ${P}gdrive
┆ ◈ ${P}threads
┆ ◈ ${P}capcut
┆ ◈ ${P}savestatus
┆ ◈ ${P}image
┆ ◈ ${P}wallpaper
╰──────────◈

ᴛᴏᴏʟꜱ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}weather
┆ ◈ ${P}translate
┆ ◈ ${P}calculate
┆ ◈ ${P}shorturl
┆ ◈ ${P}qr
┆ ◈ ${P}readqr
┆ ◈ ${P}tts
┆ ◈ ${P}stt
┆ ◈ ${P}define
┆ ◈ ${P}wikipedia
┆ ◈ ${P}google
┆ ◈ ${P}time
┆ ◈ ${P}date
┆ ◈ ${P}currency
┆ ◈ ${P}country
┆ ◈ ${P}ipinfo
┆ ◈ ${P}checkurl
┆ ◈ ${P}encode
┆ ◈ ${P}decode
┆ ◈ ${P}reverse
╰──────────◈

ꜱᴇᴛᴛɪɴɢꜱ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}prefix
┆ ◈ ${P}public
┆ ◈ ${P}private
┆ ◈ ${P}setmode
┆ ◈ ${P}language
┆ ◈ ${P}settimezone
┆ ◈ ${P}setowner
┆ ◈ ${P}setmenu
┆ ◈ ${P}setimage
┆ ◈ ${P}setreply
╰──────────◈

ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}sticker
┆ ◈ ${P}toimg
┆ ◈ ${P}take
┆ ◈ ${P}attp
┆ ◈ ${P}smeme
┆ ◈ ${P}emojimix
┆ ◈ ${P}steal
┆ ◈ ${P}ttp
┆ ◈ ${P}circle
┆ ◈ ${P}crop
╰──────────◈

ꜰᴜɴ ᴍᴇɴᴜ
╭──────────◈
┆ ◈ ${P}joke
┆ ◈ ${P}quote
┆ ◈ ${P}meme
┆ ◈ ${P}truth
┆ ◈ ${P}dare
┆ ◈ ${P}fact
┆ ◈ ${P}ship
┆ ◈ ${P}character
┆ ◈ ${P}compliment
┆ ◈ ${P}roast
╰──────────◈

◈┈▉ \`tｈundeｒx ｍｄ\` ▉┄◈
>
> 🐺 Thunder. X ᴍᴅ — 𝟸𝟶𝟸𝟼`;
}

function buildAlive({ prefix = config.prefix, uptime = '0s', pushName = 'User' } = {}) {
  return `◈┈▉ \`thunder xｍｄ\` ▉┄◈
> ╭────↯
> │ ➠ *𝙱𝙾𝚃:* Thunder Bot XMD
> │ ➠ *𝚂𝚃𝙰𝚃𝚄𝚂:* Online ✅
> │ ➠ *𝚁𝚄𝙽𝚃𝙸𝙼𝙴:* ${uptime}
> │ ➠ *𝙿𝚁𝙴𝙵𝙸𝚇:* ${prefix}
> │ ➠ *𝙾𝚆𝙽𝙴𝚁:* ${config.ownerName}
> ╰────↯

Hello ${pushName} 👋
I'm alive and ready! Type *${prefix}menu* to see all commands.

◈┈▉ \`tｈundeｒx ｍｄ\` ▉┄◈
>
> 🐺 Thunder. X ᴍᴅ — 𝟸𝟶𝟸𝟼`;
}

function buildBotInfo({ prefix = config.prefix, uptime = '0s', totalCmds = 200 } = {}) {
  return `◈┈▉ \`thunder xｍｄ\` ▉┄◈
> ╭────↯
> │ ➠ *𝙱𝙾𝚃:* Thunder Bot XMD
> │ ➠ *𝚅𝙴𝚁𝚂𝙸𝙾𝙽:* 1.0.0
> │ ➠ *𝙿𝚁𝙴𝙵𝙸𝚇:* ${prefix}
> │ ➠ *𝙼𝙾𝙳𝙴:* ${config.mode}
> │ ➠ *𝚃𝙾𝚃𝙰𝙻 𝙲𝙼𝙳𝚂:* ${totalCmds}
> │ ➠ *𝚁𝚄𝙽𝚃𝙸𝙼𝙴:* ${uptime}
> │ ➠ *𝙾𝚆𝙽𝙴𝚁:* ${config.ownerName}
> │ ➠ *𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼:* Linux}
> ╰────↯

◈┈▉ \`tｈundeｒx ｍｄ\` ▉┄◈
>
> 🐺 Thunder. X ᴍᴅ — 𝟸𝟶𝟸𝟼`;
}

module.exports = { buildMenu, buildAlive, buildBotInfo };
