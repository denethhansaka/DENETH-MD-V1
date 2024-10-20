const config = require('../config')
const fg = require('api-dylux');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const cheerio = require('cheerio')
const axios = require("axios")
const fetch = require('node-fetch')
const vm = require('vm')
let wm = `© 𝙳𝙴𝙽𝙴𝚃𝙷-𝙼𝙳 𝚅 ${require("../package.json").version} (Test)\n> ​🇵​​🇴​​🇼​​🇪​​🇷​​🇪​​🇩​ ​🇧​​🇾​ ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​-​🇲​​🇩​ ​🇼​​🇭​​🇦​​🇹​​🇸​​🇦​​🇵​​🇵​ ​🇧​​🇴​​🇹​®`

cmd({
    pattern: "blackbox",
    alias: ["bb"],
    react: '👾',
    desc: "Blackbox ai chat",
    category: "ai",
    use: '.blackbox <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('Need a keyword')
var res = (await fetchJson('https://api-pink-venom.vercel.app/api/blackboxAIChat?message=' + q)).data

return await reply(res.response)
} catch (e) {
reply('Unable to generate')
l(e)
}
})

cmd({
    pattern: "bingimgai",
    alias: ["bingimg"],
    react: '📷',
    desc: "Generate Images using Bing AI",
    category: "ai",
    use: '.bingimgai <prompt>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if (!q) return await  reply("*Give me a prompt to generate images*")
  let response = await fetchJson(`https://widipe.com/bingimg?text=${encodeURIComponent(q)}`)
        if (response && response.result && Array.isArray(response.result) && response.result.length > 0) {
            for (let i = 0; i < response.result.length; i++) {
                await conn.sendMessage(from, { image: { url: response.result[i] }, caption: wm }, { quoted: mek });
            }
        } else {
            reply('No images found for the given prompt');
        }
} catch (e) {
reply('Unable to generate images to the given prompt')
l(e)
}
})

cmd({
    pattern: "aiimg",
    alias: ["imgai"],
    react: '📷',
    desc: "Generate Images using Bing AI",
    category: "ai",
    use: '.aiimg <prompt>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if (!q) return await  reply("*Give me a prompt to generate images*")
 await conn.sendMessage(from, { image: { url: `https://sms-bomb.vercel.app/api/aipic.php?prompt=${encodeURIComponent(q)}` }, caption: wm }, { quoted: mek });
} catch (e) {
reply('Unable to generate images to the given prompt')
l(e)
}
})

async function aiArtGenerator(prompt) {
  try {
    const response = await fetch("https://ai-api.magicstudio.com/api/ai-art-generator", {
      method: "POST",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-US,en;q=0.9",
        Origin: "https://magicstudio.com",
        Referer: "https://magicstudio.com/ai-art-generator/"
      },
      body: new URLSearchParams({
        prompt: prompt,
        output_format: "bytes",
        user_profile_id: "null",
        anonymous_user_id: "a584e30d-1996-4598-909f-70c7ac715dc1",
        request_timestamp: Date.now(),
        user_is_subscribed: "false",
        client_id: "pSgX7WgjukXCBoYwDM8G8GLnRRkvAoJlqa5eAVvj95o"
      })
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.arrayBuffer();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

cmd({
    pattern: "aiartgen",
    alias: ["aiart"],
    react: '📷',
    desc: "Generate Images using Bing AI",
    category: "ai",
    use: '.aiart <prompt>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if (!q) return await  reply("*Give me a prompt to generate images*")
 const aiArt = await aiArtGenerator(q)
 await conn.sendMessage(from, { image: Buffer.from(aiArt) , caption: wm }, { quoted: mek });
} catch (e) {
reply('Unable to generate images to the given prompt')
console.log(e)
}
})
