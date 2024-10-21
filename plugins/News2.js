// NEW ADDED NEWS SITE [ BBC , LANKADEEPA ]

const config = require('../config')
const { cmd } = require('../command')
const axios = require('axios')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-news-apis.vercel.app/api' // API LINK ( DO NOT CHANGE THIS!! )


// ================================LANKADEEPA NEWS========================================

cmd({
    pattern: "lankadeepanews",
    alias: ["lankadeepa","news4"],
    react: "📰",
    desc: "",
    category: "news",
    use: '.lankadeepanews',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply }) => {
try{

const news = await fetchJson(`${apilink}/lankadeepa`)
  
const msg = `
*LANKADEEPA NEWS DENETH-MD*
       
* Title - ${news.result.title}

* News - ${news.result.desc}

* Date - ${news.result.date}

* Link - ${news.result.url}

> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹`


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})

// ================================BBC NEWS========================================

cmd({
    pattern: "bbcnews",
    alias: ["bbc","news5"],
    react: "🌍",
    desc: "",
    category: "news",
    use: '.bbcnews',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply }) => {
try{

const news = await fetchJson(`${apilink}/bbc`)
  
const msg = `
*BBC NEWS DENTH-MD*

       
* Title - ${news.result.title}

* News - ${news.result.desc}

* Link - ${news.result.url} 

> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹`

await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})

// ================================HIRU NEWS========================================
cmd({
    pattern: "hirunews",
    alias: ["hiru","news1"],
    react: "☀",
    desc: "",
    category: "news",
    use: '.hirunews',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/hiru`)
  
const msg = `
*HIRU NEWS DENETH-MD*

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Link* - ${news.result.url}

> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹`

await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})

// ================================SIRASA NEWS========================================

cmd({
    pattern: "sirasanews",
    alias: ["sirasa","news2"],
    react: "🔺",
    desc: "",
    category: "news",
    use: '.sirasa',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/sirasa`)
  
const msg = `
*SIRASA NEWS DENETH-MD*
 
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Link* - ${news.result.url}

> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹`

await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})

// ================================DERANA NEWS========================================

cmd({
    pattern: "derananews",
    alias: ["derana","news3"],
    react: "🟥",
    desc: "",
    category: "news",
    use: '.derana',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/derana`)
  
const msg = `
*DERANA NEWS DENETH-MD*
       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Date* - ${news.result.date}

• *Link* - ${news.result.url} 

> 🇵🇴🇼🇪🇷🇪🇩 🇧🇾 🇩🇪🇳🇪🇹🇭-🇲🇩 🇼🇭🇦🇹🇸🇦🇵🇵 🇧🇴🇹`

await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})
