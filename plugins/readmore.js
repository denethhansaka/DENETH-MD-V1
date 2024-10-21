const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
var cap = '*ᴘɪɴᴋ-ᴠᴇɴᴏᴍ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴅᴀɴᴜxᴢᴢ*'

//----------------readmore-------------------------------------------
cmd({
    pattern: "readmore",
    react: "🌠",
    alias: ["rm"],
    category: "main",
    use: '.readmore',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    let [l, r] = q.split`|`
    if (!l) l = ''
    if (!r) r = ''
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
await reply(l + readMore + r)
//return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
