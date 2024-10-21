const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const Esana = require('@sl-code-lords/esana-news')
var api = new Esana()

var tmsg = "It gives whatsapp beta news."


cmd({
    pattern: "wabeta",
    alias: ["wabetainfo","betawa"],
    react: "✔️",
    desc: tmsg,
    category: "news",
    use: '.wabeta',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = await fetchJson('https://api.maher-zubair.xyz/details/wa-beta-info?apikey=a816a62ac39f3d1b52')
let info = `*DENETH-MD WA-BETA NEWS*

*🥏 Title :* ${result.title}
*📅 Date :* ${result.date}
*🖥️ Platform :* ${result.updateFor}
*🔗 URL :* ${result.link}
*🗞️ Short Desc :*
${result.desc}

*ℹ️ FAQ*

*❓ Question :* ${result.QandA[0].question}
*👨🏻‍💻 Answer :* ${result.QandA[0].answer}

*❓ Question :* ${result.QandA[1].question}
*👨🏻‍💻 Answer :* ${result.QandA[1].answer}

*❓ Question :* ${result.QandA[2].question}
*👨🏻‍💻 Answer :* ${result.QandA[2].answer}

*❓ Question :* ${result.QandA[3].question}
*👨🏻‍💻 Answer :* ${result.QandA[3].answer}

> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹`
return await conn.sendMessage(from, { image: { url: data.result.image} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//=============================================================================================================================

cmd({
    pattern: "esana",
    react: '📰',
    desc: "To see esana news",
    category: "news",
    use: '.esana',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const latst = await api.latest_id();
            const nws = latst.results.news_id
            let nn = q || nws
            const ress = await api.news(nn);
            const res = ress.results;

            const txt2 = await conn.sendMessage(from, {image: 
	    {url: res.COVER},caption: `*DENETH-MD ESANA NEWS*\n┃◉⇨ 𝚃𝙸𝚃𝙻𝙴 :${res.TITLE}\n\n┃◉⇨ 𝙳𝙰𝚃𝙴 :${res.PUBLISHED}\n\n┃◉⇨ 𝚄𝚁𝙻 :${res.URL}\n\n┃◉ ⇨ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${res.DESCRIPTION}\n\n> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹\n\n`},
			{ quoted: mek });
await conn.sendMessage(from, { react: { text: `🗞️`, key: mek.key }}) 
} catch (e) {
reply()
console.log(e)
}
})       

//=======================================================================================================

cmd({
    pattern: "ios",
    alias: ["apple","applenews"],
    react: "🍎",
    desc: "It gives IOS news.",
    category: "news",
    use: '.ios',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const data = await fetchJson('https://api.maher-zubair.xyz/news/ios-latest?apikey=a816a62ac39f3d1b52')
let info = `*DENETH-MD IOS NEWS*

*📃 Title :* ${result.title}
*🕒 Time:* ${result.time} 
*⛓️ Link:* ${result.link}
*📚 Description:* ${result.desc}

> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹
`
return await conn.sendMessage(from, { image: { url: data.result.images} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//================================================================================================================

cmd({
    pattern: "technews",
    alias: ["tech","gadgets360"],
    react: "📡",
    desc: "It gives Tech news.",
    category: "news",
    use: '.technews',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = await fetchJson('https://api.maher-zubair.tech/details/tnews')
let info = `*DENETH-MD TECH NEWS*

*📃 Title :* ${data.result.title}
*⛓️ Link:* ${data.result.link}
*📚 Description:* ${data.result.desc}

> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹
`
return await conn.sendMessage(from, { image: { url: data.result.img} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//===============================
