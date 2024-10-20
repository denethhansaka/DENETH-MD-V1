const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

async function chatgptdownloader(inputUrl) {
  try {
    const response = await fetch("https://chatgptdownloader.com/wp-json/aio-dl/video-data/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          url: inputUrl,
          token: "d869a16e9f14d2c03e9ce361e134e28bd87562b5ec071d88a7f4f04772b9b1ec"
        })
      }),
      data = await response.text();
    return JSON.parse(data);
  } catch (error) {
    throw console.error("Error fetching data:", error), error;
  }
}

//===============================================================

cmd({
    pattern: "chatgptdownloader",
    alias: ["chatgptdl"],
    use: '.chatgptdownloader <url>',
    react: "🍟",
    desc: "Search and DOWNLOAD VIDEOS from ai.",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('🚩 *Please give me words to search*')
    const result = await chatgptdownloader(q);
    await conn.sendMessage(from, { text: JSON.stringify(result) }, { quoted: mek } )
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek } )
}
})
