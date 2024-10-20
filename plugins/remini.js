const { cmd, commands } = require('../command')
let { img2url } = require('@blackamda/telegram-image-url')
const { getRandom, fetchJson } = require('../lib/functions')
const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const config = require('../config')
let wm = `𝙳𝙴𝙽𝙴𝚃𝙷-𝙼𝙳 𝚅 ${require("../package.json").version} (Test)\n​> 🇵​​🇴​​🇼​​🇪​​🇷​​🇪​​🇩​ ​🇧​​🇾​ ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​-​🇲​​🇩​ ​🇼​​🇭​​🇦​​🇹​​🇸​​🇦​​🇵​​🇵​ ​🇧​​🇴​​🇹​®`
var desct = "It converts given low quality image to quality image.."
var imgmsg = "*Reply to a photo !*"
var cantf = "*Server is busy. Try again later.!*"

async function processing(imageBuffer, endpoint) {
  try {
    const FormData = require('form-data');
    return new Promise(async (resolve, reject) => {
      const form = new FormData();
      const scheme = `https://inferenceengine.vyro.ai/${endpoint}`;
      form.append('model_version', 1, {
        'Content-Transfer-Encoding': 'binary',
        contentType: 'multipart/form-data; charset=utf-8',
      });
      form.append('image', Buffer.from(imageBuffer), {
        filename: `${endpoint}.jpg`,
        contentType: 'image/jpeg',
      });
      form.submit(
        {
          url: scheme,
          host: 'inferenceengine.vyro.ai',
          path: `/${endpoint}`,
          protocol: 'https:',
          headers: {
            'User-Agent': 'okhttp/4.9.3',
            Connection: 'Keep-Alive',
            'Accept-Encoding': 'gzip',
          },
        },
        function (err, res) {
          if (err) {
            reject(err);
          }
          let chunks = [];
          res
            .on('data', function (chunk) {
              chunks.push(chunk);
            })
            .on('end', () => {
              resolve(Buffer.concat(chunks));
            })
            .on('error', error => {
              reject(error);
            });
        }
      );
    });
  } catch (error) {
    console.log(error);
    return imageBuffer;
  }
}

cmd({
    pattern: "enhance",
    react: "↗️",
    desc: desct,
    category: "convert",
    use: '.enhance <reply low quality image>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
    const fileType = require("file-type");
    var nameJpg = getRandom('');
    let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    let type = await fileType.fromBuffer(buff);
   //let downloadedImage = await m.quoted.download();
    const enhancedImage = await processing(buff, 'enhance')
      //await message.send(enhancedImage, {}, 'img', message);
      await conn.sendMessage(from, { image: enhancedImage, caption: wm }, { quoted: mek })
    } else return reply(imgmsg)
} catch (e) {
  reply(cantf);
  console.log(e);
}
})

//=======================================================================
cmd({
    pattern: "dehaze",
    react: "↗️",
    desc: desct,
    category: "convert",
    use: '.dehaze <reply low quality image>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
    const fileType = require("file-type");
    var nameJpg = getRandom('');
    let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    let type = await fileType.fromBuffer(buff);
   //let downloadedImage = await m.quoted.download();
    const enhancedImage = await processing(buff, 'dehaze')
       //await message.send(enhancedImage, {}, 'img', message);
      await conn.sendMessage(from, { image: enhancedImage, caption: wm }, { quoted: mek })
    } else return reply(imgmsg)
} catch (e) {
  reply(cantf);
  console.log(e);
}
})
//====================================================================
cmd({
    pattern: "recolor",
    react: "↗️",
    desc: desct,
    category: "convert",
    use: '.recolor <reply low quality image>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
    const fileType = require("file-type");
    var nameJpg = getRandom('');
    let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    let type = await fileType.fromBuffer(buff);
   //let downloadedImage = await m.quoted.download();
    const enhancedImage = await processing(buff, 'recolor')
       //await message.send(enhancedImage, {}, 'img', message);
      await conn.sendMessage(from, { image: enhancedImage, caption: wm }, { quoted: mek })
    } else return reply(imgmsg)
} catch (e) {
  reply(cantf);
  console.log(e);
}
})
