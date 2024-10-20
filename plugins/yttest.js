const config = require('../config')
const dl = require('@bochilteam/scraper') 
const fs = require('fs')
const {
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')
const {
    cmd,
    commands
} = require('../command')
const ufs = require('../lib/ufs');
var sizetoo =  "_This file size is too big_"
const yts = require("ytsearch-venom")
const fg = require('api-dylux')
const { sizeFormatter } = require('human-readable')
const fetch = require('node-fetch')

let foot = `© 𝙳𝙴𝙽𝙴𝚃𝙷-𝙼𝙳 𝚅 ${require("../package.json").version} (Test)\n​> 🇵​​🇴​​🇼​​🇪​​🇷​​🇪​​🇩​ ​🇧​​🇾​ ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​-​🇲​​🇩​ ​🇼​​🇭​​🇦​​🇹​​🇸​​🇦​​🇵​​🇵​ ​🇧​​🇴​​🇹​®`
let newsize = config.MAX_SIZE * 1024
let normals = 150 * 1024

async function getBuffer(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const buffer = await response.buffer();
        return buffer;
    } catch (error) {
        console.error('Error fetching buffer:', error);
        throw error;
    }
}

function formatSize(size) {
    return sizeFormatter({
        std: 'JEDEC',
        decimalPlaces: 2,
        keepTrailingZeroes: false,
        render: (literal, symbol) => `${literal} ${symbol}B`,
    })(size);
}

//=======================================144p=========================================

cmd({
    pattern: "yt144",
    react: "🍟",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
    if (!q) return await reply('*Need a youtube url!*')
    const yt = await dl.youtubedl(q).catch(async () => await dl.youtubedlv2(q))
    if (yt.video['144p'].fileSize >= newsize) return conn.sendMessage(from, { text: '🚩 *This video too big !!*' }, { quoted: mek })
    if (yt.video['144p'].fileSize <= normals) return await conn.sendMessage(from, { video: {url: await yt.video['144p'].download() }, caption: foot}, { quoted: mek })
    await conn.sendMessage(from, { document: {url: await yt.video['144p'].download() }, mimetype: 'video/mp4', fileName: `${yt.title}.mp4`, caption: foot}, { quoted: mek })
            } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });
//========================240p=====================================================
    
cmd({
    pattern: "yt240",
    react: "🍟",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
    if (!q) return await reply('*Need a youtube url!*')
    const yt = await dl.youtubedl(q).catch(async () => await dl.youtubedlv2(q))
    if (yt.video['240p'].fileSize >= newsize) return conn.sendMessage(from, { text: '🚩 *This video too big !!*' }, { quoted: mek })
    if (yt.video['240p'].fileSize <= normals) return await conn.sendMessage(from, { video: {url: await yt.video['240p'].download() }, caption: foot}, { quoted: mek })
    await conn.sendMessage(from, { document: {url: await yt.video['240p'].download() }, mimetype: 'video/mp4', fileName: `${yt.title}.mp4`, caption: foot}, { quoted: mek })           
        } catch (e) {
                console.log(e)
        }
    })
//==========================360p====================================

cmd({
    pattern: "yt360",
    react: "🍟",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
    if (!q) return await reply('*Need a youtube url!*')
    const yt = await dl.youtubedl(q).catch(async () => await dl.youtubedlv2(q))
    if (yt.video['360p'].fileSize >= newsize) return conn.sendMessage(from, { text: '🚩 *This video too big !!*' }, { quoted: mek })
    if (yt.video['360p'].fileSize <= normals) return await conn.sendMessage(from, { video: {url: await yt.video['360p'].download() }, caption: foot}, { quoted: mek })
    await conn.sendMessage(from, { document: {url: await yt.video['360p'].download() }, mimetype: 'video/mp4', fileName: `${yt.title}.mp4`, caption: foot}, { quoted: mek })        
        } catch (e) {
            console.log(e)
        }
    })
//============================480p================================================
    cmd({
        pattern: "yt480",
        react: "🍟",
        dontAddCommandList: true,
        filename: __filename
    },
    
        
    async (conn, mek, m, { from, q, reply }) => {
        try {
    if (!q) return await reply('*Need a youtube url!*')
    const yt = await dl.youtubedl(q).catch(async () => await dl.youtubedlv2(q))
    if (yt.video['480p'].fileSize >= newsize) return conn.sendMessage(from, { text: '🚩 *This video too big !!*' }, { quoted: mek })
    if (yt.video['480p'].fileSize <= normals) return await conn.sendMessage(from, { video: {url: await yt.video['480p'].download() }, caption: foot}, { quoted: mek })
    await conn.sendMessage(from, { document: {url: await yt.video['480p'].download() }, mimetype: 'video/mp4', fileName: `${yt.title}.mp4`, caption: foot}, { quoted: mek })            
       } catch (e) {
        console.log(e)
        }
    })
//=================================720p=====================================
    
    cmd({
        pattern: "yt720",
        react: "🍟",
        dontAddCommandList: true,
        filename: __filename
    },
    
        
    async (conn, mek, m, { from, q, reply }) => {
        try {
    if (!q) return await reply('*Need a youtube url!*')
    const yt = await dl.youtubedl(q).catch(async () => await dl.youtubedlv2(q))
    if (yt.video['720p'].fileSize >= newsize) return conn.sendMessage(from, { text: '🚩 *This video too big !!*' }, { quoted: mek })
    if (yt.video['720p'].fileSize <= normals) return await conn.sendMessage(from, { video: {url: await yt.video['720p'].download() }, caption: foot}, { quoted: mek })
    await conn.sendMessage(from, { document: {url: await yt.video['720p'].download() }, mimetype: 'video/mp4', fileName: `${yt.title}.mp4`, caption: foot}, { quoted: mek })
        } catch (e) {
console.log(e)
}
})
//================================1080p=========================================================
    cmd({
        pattern: "yt1080",
        react: "🍟",
        dontAddCommandList: true,
        filename: __filename
    },
    
        
    async (conn, mek, m, { from, q, reply }) => {
        try {
    if (!q) return await reply('*Need a youtube url!*')
    const yt = await dl.youtubedl(q).catch(async () => await dl.youtubedlv2(q))
    if (yt.video['1080p'].fileSize >= newsize) return conn.sendMessage(from, { text: '🚩 *This video too big !!*' }, { quoted: mek })
    if (yt.video['1080p'].fileSize <= normals) return await conn.sendMessage(from, { video: {url: await yt.video['1080p'].download() }, caption: foot}, { quoted: mek })
    await conn.sendMessage(from, { document: {url: await yt.video['1080p'].download() }, mimetype: 'video/mp4', fileName: `${yt.title}.mp4`, caption: foot}, { quoted: mek })
          } catch (e) {
            console.log(e)
}
})



