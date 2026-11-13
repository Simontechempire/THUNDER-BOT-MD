// ⚡ THUNDER BOT XMD - lib/function.js

// TIME
runtime(), formatTime(), getGreeting()
// -> .runtime, .alive, .botinfo

// NUMBER / JID
getNumber(), jidToNumber(), numberToJid()
isOwner(), isMe()
// -> checks who is owner, who is admin

// GROUP
getGroupAdmins(), isAdmin(), isBotAdmin()
getGroupMetadata()
// -> .kick, .promote, .tagall, .antilink

// MESSAGE
getText(), getQuoted(), getQuotedText()
getQuotedSender(), parseMentions()
// -> reads text, reads replied message, @mentions

// DOWNLOAD
downloadMediaMessage(), downloadUrl()
// -> .vv, .sticker, .toimg, downloaders

// FILE
ensureDir(), saveTemp(), cleanTemp()

// DATABASE - JSON
loadDB(), saveDB()
isBanned(), addWarn(), getWarn(), resetWarn()
// -> .ban, .warn, .warnings, .antilink settings

// TEXT
capitalize(), toFancy(), randomPick(), sleep()

// ANTI / FILTER
containsLink(), containsBadWord(), isFakeNumber()
// -> .antilink, .antibadword, .antifake

// STICKER
imageToStickerBuffer()
// -> .sticker

// SEND
sendReply(), sendImage(), sendVideo()

// MENU
buildMenu()
// -> builds your exact ◈┈▉ menu design
