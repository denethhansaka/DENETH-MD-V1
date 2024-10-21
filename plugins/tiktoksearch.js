const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')

cmd({
    pattern: "tiktoksearch",
    alias: ["tiks"],
    use: '.tiktoksearch <query>',
    react: "🍟",
    desc: "Search and DOWNLOAD VIDEOS from xnxx.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('🚩 *Please give me words to search*')
let mal = await fetchJson('https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text='+q)
let res = mal.data
//if (!isMe) return await reply('🚩 You are not a premium user\nbuy via message to owner!!')
//let res = await tiktokSearch(q);
let data = mal.data
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
const msg = `乂 *T T - S E A R C H* `

if (data.length < 1) return await conn.sendMessage(from, { text: "🚩 *I couldn't find anything :(*" }, { quoted: mek } )
var sections = []
        data.map((v) => {
          sections.push({
            rows: [{
              title: `${v.title}`,
              description: `Info : ${v.url} \n ${v.region} Rigion \n ${v.creator}`,
              id: `.ttsdl ${v.nowm}`
            }]
          })
        })
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://cdn.vox-cdn.com/thumbor/-C8qLMHXZ2H1kC1-PTOEkYWoOSI=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951403/STK051_VRG_Illo_N_Barclay_10_tiktok.jpg`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek } )
}
})

//------------------------dl---------------


cmd({
    pattern: "ttsdl",
    react: '🍟',
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 //if (!isMe) return await reply('🚩 You are not a premium user\nbuy via message to owner!!')
 if (!q) return reply('*Please give me direct url !!*')
 let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
  await conn.sendMessage(from, { video: { url: q }, caption: wm}, { quoted: mek })
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
