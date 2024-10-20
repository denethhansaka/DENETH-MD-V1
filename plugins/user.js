const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const Jimp = require('jimp')
const fs = require('fs')

cmd({
    pattern: "getplugin",
    react: "🍟",
    alias: ["gp"],
    desc: "Change the Bot number Bio",
    category: "owner",
    use: '.getplugin',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
let sesi = await fs.readFileSync(`./plugins/${q}.js`)
await conn.sendMessage(from, { document: sesi, mimetype: 'application/javascript', fileName: `${q}.js` }, { quoted: mek })
//await conn.sendMessage(from , { text: "🚩 *New Bio Added Successfully*" }, { quoted: mek } )
} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "sesion",
    react: "🍟",
    alias: ["getses"],
    desc: "Change the Bot number Bio",
    category: "owner",
    use: '.getses',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
let sesi = await fs.readFileSync('./auth_info_baileys/creds.json')
await conn.sendMessage(from, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: mek })
//await conn.sendMessage(from , { text: "🚩 *New Bio Added Successfully*" }, { quoted: mek } )
} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "upbio",
    react: "🍟",
    alias: ["updatebio"],
    desc: "Change the Bot number Bio",
    category: "owner",
    use: '.upbio',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
if ( !q ) return reply('🚩 *Enter the New Bio*')
if (q.length > 139 ) return reply('🚩 *Sorry ! Characters limit Exceded*')
await conn.updateProfileStatus(q)
await conn.sendMessage(from , { text: "🚩 *New Bio Added Successfully*" }, { quoted: mek } )
} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "getprivacy",
    react: "🍟",
    alias: ["getprivacysettings","gpvc"],
    desc: "Get the bot Number Privacy Setting Updates",
    category: "owner",
    use: '.getprivacy',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
const duka = await conn.fetchPrivacySettings(true)
let puka = `Read Recipt - ${duka.readreceipts}
Profile Picture - ${duka.profile}
Status  - ${duka.status}
Online - ${duka.online}
Last Seen - ${duka.last}
Group Privacy - ${duka.groupadd}
Call Privacy - ${duka.calladd}

© *Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2*`
 await conn.sendMessage(from , { text: puka }, { quoted: mek } )

} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "removepp",
    react: "🍟",
    alias: ["rmpp"],
    desc: "Remove the botNumber PP",
    category: "owner",
    use: '.removepp',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
await conn.removeProfilePicture(botNumber2)
 await conn.sendMessage(from , { text: "🚩 *Profile Pic Successfully removed*" }, { quoted: mek } )

} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "setpp",
    react: "🍟",
    alias: ["setdp"],
    desc: "Update the botNumber PP",
    category: "owner",
    use: '.setpp',
    filename: __filename
},
  async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
    if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
    var nameJpg = getRandom('');
    let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    //return await reply("🚩 *Reply to a photo*");
    await conn.updateProfilePicture (botNumber2, buff)
    //await conn.updateProfilePicture(botNumber2, buff);
    return await reply("🚩 *Profile Picture Updated*");
   } else return reply("🚩 *Reply to a image*")
  }
)
//======================================================================
async function generateProfilePicture(media) {
  const jimp = await Jimp.read(media),
    min = jimp.getWidth(),
    max = jimp.getHeight(),
    cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
    preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG)
  };
}
//======================================================================
cmd({
    pattern: "setfullpp",
    react: "🍟",
    alias: ["setdpfull"],
    desc: "Update the botNumber PP",
    category: "owner",
    use: '.setfullpp',
    filename: __filename
},
  async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
    if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
    var nameJpg = getRandom('');
    let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    let { img } = await generateProfilePicture(buff)
    //return await reply("🚩 *Reply to a photo*");
    await conn.query({
        tag: "iq",
        attrs: {
          to: botNumber2,
          type: "set",
          xmlns: "w:profile:picture"
        },
        content: [{
          tag: "picture",
          attrs: {
            type: "image"
          },
          content: img
        }]
    })
    //await conn.updateProfilePicture(botNumber2, buff);
    return await reply("🚩 *Profile Picture Updated*");
   } else return reply("🚩 *Reply to a image*")
  }
)

