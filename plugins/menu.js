const { copy } = require('fs-extra')
const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
let cap = '*Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴅᴀɴᴜxᴢᴢ*'
//=====================================================================================
cmd({
        pattern: "owner",
        react: "🩸",
        alias: ["status"],
        desc: "Check bot owner cmd.",
        category: "other",
        use: '.owner',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`> *👋. *HEY* *${pushname}* ジ,
_________________________

🍫 ∆ ◦ _*ɴᴀᴍᴇ ʙᴏᴛ*_ : 💃𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍
__________________________________________________________

🌜 ∆ ◦ _*ᴄʀᴇᴀᴛᴏʀ*_ : *DanuXzz* ジ 🤍
> Ｄａｒｋ Ｎｅｏｎ Ｃｙｂｅｒｚ 🅥
__________________________________________________________

👻 ∆ ◦ _*ᴠᴇʀsɪᴏɴs*_ : 2.0.0 ( *ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs* )🤍
__________________________________________________________

🧩 ∆ ◦ _*ᴛʏᴘᴇ sᴄʀɪᴘᴛ*_ : *ᴘʟᴜɢɪɴs* 🤍
__________________________________________________________

♟️ ∆ ◦ _*ᴊᴏɪɴ ᴍʏ ɢʀᴏᴜᴘ*_ :  ~https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34~  🤍
__________________________________________________________

🖲️ ∆ ◦ _*ᴄᴏɴᴛᴀᴄᴛ*_ : ~https://wa.me/94740460412~ 🤍         
_________________________

*OWNER IS SLEEPING DON'T DISTURB* 🤫

*°⏰ [  𝗕𝗬  © Ｄａｒｋ < | | > Ｎｅｏｎ Ｃｙｂｅｒｚ ヤ • 🎉 ]*`
    
    let buttons = [{
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: '𝙲𝙾𝙽𝚃𝙰𝙲𝚃-𝙾𝚆𝙽𝙴𝚁 🤭',
                    url: `https://wa.me/94774500937?text=*Hi_DANU_XZ🥵⃟💥⃝☙*`,
                    merchant_url: `https://wa.me/94774500937?text=*Hi_DANU_XZ🥵⃟💥⃝☙*`
          }),
      },

    
    ]
    
    let message = {
        image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      
    
    
      body: txt
    
    }
    
    
    
    
    
    
    return await conn.sendButtonMessage(from, buttons, m, message)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
    })
    
cmd({
        pattern: "alive",
        react: "👻",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "other",
        use: '.alive',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const sssf = `${monspace}🤍 Hello ${pushname} I'm alive now${monspace}

*😼ＫＥＮＺＩ-ＭＤ🤍*
    
> *Name Bot* : Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2
> *Versions* : ${require("../package.json").version}
> *Type Script* : ᴘʟᴜɢɪɴs
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}`

            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "𝐊𝐄𝐍𝐙𝐈 𝐌𝐄𝐍𝐔 📑",
                        id: ".menu"
                    }),
                }
            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: sssf

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
        pattern: "rules",
        react: "🗿",
        alias: ["online", "test", "bot"],
        desc: "Check bot rules.",
        category: "other",
        use: '.rules',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const sssf = `┏━━━°❀ ❬ *Rules Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 MultiDevice* ❭ ❀°━━━┓

1. ✧ *Spamming Bots is Prohibited*, If Caught You Will Be Banned.

2. ✧ If the Bot Doesn't Answer 1x, Please Try Again. But If the Bot Doesn't Answer 2x, That Means Delay, Don't Use It First.

3. ✧ *Don't Spam Bots, If You Haven't Donated, Just Be Aware of Using It* :)

4. ✧ If the Limit Runs Out, Please Play Games to Get Exp. Example Games: Guessing Games, RPG Games, etc.

5. ✧ *Sending Virtex/Bugs to Bots is Prohibited*, Even Though It Has No Effect :v

6. ✧ *Call Bots Are Strictly Prohibited*, If You Call You Will Be Automatically Blocked.

7. ✧ If You Don't Understand How to Use Bots, Please Ask Other Members. Or If You Haven't Joined the Bot Group, Type #gcbot and Enter the Bot Group.

 8. ✧ If There is an Error Feature/Do Not Understand How to Use It, Please Report/Ask the Owner.

9. ✧ If the Bot Delays, Do Not Spam It First.

10. ✧ For *Premium* Users, *It is Strictly Prohibited to Send Original Bugs to Others*.

┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
    
> *Name Bot* : Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2
> *Versions* : ${require("../package.json").version}
> *Type Script* : ᴘʟᴜɢɪɴs
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}
____________________________________________`

            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 💗",
                        id: ".alive"
                    }),
                }
            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: sssf

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })
    
    cmd({
        pattern: "animes",
        react: "😽",
        alias: ["status"],
        desc: "Check bot system status.",
        category: "anime",
        use: '.animes',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`🪙Command : anime
📝Desc : You can get Anime images.
☘Use: .anime

🪙Command : animeeg
📝Desc : You Can search Animes.
☘Use: .animeeg

🪙Command : loli
📝Desc : Anime cmd.
☘Use: .loli

🪙Command : waifu
📝Desc : Anime cmd.
☘Use: .waifu

🪙Command : neko
📝Desc : Anime cmd.
☘Use: .neko

🪙Command : megumin
📝Desc : Anime cmd.
☘Use: .megumin

🪙Command : maid
📝Desc : Anime cmd.
☘Use: .maid

🪙Command : awoo
📝Desc : Anime cmd.
☘Use: .awoo

🪙Command : anime1
📝Desc : Anime cmd.
☘Use: .anime1

🪙Command : anime2
📝Desc : Anime cmd.
☘Use: .anime2

🪙Command : anime3
📝Desc : Anime cmd.
☘Use: .anime3

🪙Command : anime4
📝Desc : Anime cmd.
☘Use: .anime4

🪙Command : anime5
📝Desc : Anime cmd.
☘Use: .anime5

🪙Command : nsfw1
📝Desc : Anime cmd.
☘Use: .nsfw1

🪙Command : nsfw2
📝Desc : Anime cmd.
☘Use: .nsfw2

🪙Command : nsfw3
📝Desc : Anime cmd.
☘Use: .nsfw3

🪙Command : nsfw4
📝Desc : Anime cmd.
☘Use: .nsfw4

🪙Command : nsfw5
📝Desc : Anime cmd.
☘Use: .nsfw5`
    
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ΛПIMΣ 1 💗",
              id: ".anime1"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ΛПIMΣ 2 💗",
              id: ".anime2"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ΛПIMΣ 3 💗",
              id: ".anime3"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ΛПIMΣ 4 💗",
              id: ".anime4"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ΛПIMΣ 5 💗",
              id: ".anime5"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "𝑵𝒔𝒇𝒘 1 🥶",
              id: ".nsfw1"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "𝑵𝒔𝒇𝒘 2 🥶",
              id: ".nsfw2"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "𝑵𝒔𝒇𝒘 3 🥶",
              id: ".nsfw3"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "𝑵𝒔𝒇𝒘 4 🥶",
              id: ".nsfw4"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "𝑵𝒔𝒇𝒘 5 🥶",
            id: ".nsfw5"
        }),
    },

    
    ]
    
    let message = {
        image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      
    
    
      body: txt
    
    }
    
    
    
    
    
    
    return await conn.sendButtonMessage(from, buttons, m, message)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
    })

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "list", "commands", "cmd"],
    desc: "Get bot\'s command list.",
    category: "other",
    use: '.menu',
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
        if (os.hostname().length == 12) hostname = 'replit'
        else if (os.hostname().length == 36) hostname = 'heroku'
        else if (os.hostname().length == 8) hostname = 'koyeb'
        else hostname = os.hostname()
        let monspace = '```'
        const MNG = `👋 *Hey ${pushname}!* 🍃
Welcome to Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2, bot WhatsApp is ready to help you!

_____________________________________

😼ＫＥＮＺＩ-ＭＤ🤗

> Hey 💠 This Is Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 MENU 💗

*ʜɪ 💗, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ 📁, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ* 💠

*🚫𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*🚫𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
_____________________________________

┌─ 📊 *DASHBOARD* ─┐
│
├─ 🩵 *User*: ${pushname}
├─ 🩵 *Mode*: Public
│
├─ 🤖 *INFO BOT* ─┐
│
├─ 🤍 *ɴᴀᴍᴇ ʙᴏᴛ*: Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2
├─ 🤍 *ᴘʟᴀᴛꜰᴏʀᴍ:* ${hostname}
├─ 🤍 *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs
├─ 🤍 *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
├─ 🤍 *ᴍᴇᴍᴏʀʏ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
└─ 🤍 *ᴠᴇʀsɪᴏɴs* : ${require("../package.json").version}
│
└─ 💐 Thank you for using *Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2* ! 🌟`

        const categories = [];
        const categoryMap = new Map();

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                const category = cmd.category.toUpperCase();
                if (!categoryMap.has(category)) {
                    categories.push(category);
                    categoryMap.set(category, []);
                }
                categoryMap.get(category).push(cmd.pattern);
            }
        }

        const rows = []
        for (const category of categories) {
            rows.push({
                header: '',
                title: `${category} MENU`,
                description: '',
                id: `.category ${category}`
            })
        }

        let buttons = [{
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: '𝙸𝙽𝙵𝙾-𝙺𝙴𝙽𝚉𝙸-𝙼𝙳 🔍',
                    url: `https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34`,
                    merchant_url: `https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34`
                }),
                  },
                  {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "𝐑𝐔𝐋𝐄𝐒 🗿",
              id: ".rules"
          }),
            },
            {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "𝐎𝐖𝐍𝐄𝐑 👤",
              id: ".owner"
          }),
            },
            {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                    title: '𝐁𝐎𝐓-𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐘 🥵',
                    sections: [{
                        title: 'Please select a category',
                        highlight_label: 'Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2',
                        rows: rows
                    }]
                }),
            }
        ]

        let opts = {
            image: `https://8030.us.kg/file/mKXIMtf1PF1i.jpg`,
            header: '',
            footer: wm,
            body: MNG
        }

        return await conn.sendButtonMessage(from, buttons, m, opts)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
    pattern: "category",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        let wm = '*Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴅᴀɴᴜxᴢᴢ*'
        const category = q.trim().toUpperCase();
        let commandList = `*࿈ ${category} ℭ𝔬𝔪𝔪𝔞𝔫𝔡 𝔏𝔦𝔰𝔱:*\n\n`;

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (cmd.category.toUpperCase() === category) {
                commandList += ` ❥ *${cmd.use}* \n`;
            }
        }

        commandList += `\n✦ *𝚃𝚘𝚝𝚊𝚕 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚒𝚗 ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: commandList,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363192956026815@newsletter',
      newsletterName: "😼ＫＥＮＺＩ-ＭＤ🤍",
      serverMessageId: 1234
    },
externalAdReply: { 
title: 'Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://github.com/mine-bbh" ,
thumbnailUrl: 'https://8030.us.kg/file/mKXIMtf1PF1i.jpg' ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
