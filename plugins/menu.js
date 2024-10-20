const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "This is menu",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
news: '',
ai: '',
search: '',
convert: '',
group: '',
user: '',
owner: '',
anime: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `*Hey, ${pushname}*👋
_________________________
|🍁 ɴᴀᴍᴇ ʙᴏᴛ : ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​-​🇲​​🇩​
|💻 ​🇨​​🇷​​🇪​​🇦​​🇹​​🇴​​🇷​   : ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​ ​🇭​​🇦​​🇳​​🇸​​🇦​​🇰​​🇦​ ​🇰​​🇪​​🇪​​🇷​​🇹​​🇭​​🇮​​🇷​​🇦​​🇹​​🇭​​🇳​​🇦​
|📊 ​🇻​​🇪​​🇷​​🇸​​🇮​​🇴​​🇳   : ​🇻​​🇪​​🇷​​🇸​​🇮​​🇴​​🇳 1.0.0
|🐱‍👤 🇬​​🇮​​🇹​​🇭​​🇺​​🇧​   : https://github.com/denethhansaka
|🪀 ​🇼​​🇭​​🇦​​🇹​​🇸​​🇦​​🇵​​🇵​ : https://whatsapp.com/channel/0029Vamo0kT2ER6qNXgykO0B
———————————————————
🍁𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.main}
🤖𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.ai}
⬇𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.download}
📰𝗡𝗘𝗪𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.news}
🔍𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.search}
🔄𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.convert}
💻𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.owner}
👉𝗨𝗦𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.user}
🤝𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.group}
💀𝗔𝗡𝗜𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
${menu.anime}

> 🇵​​🇴​​🇼​​🇪​​🇷​​🇪​​🇩​ ​🇧​​🇾​ ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​-​🇲​​🇩​ ​🇼​​🇭​​🇦​​🇹​​🇸​​🇦​​🇵​​🇵​ ​🇧​​🇴​​🇹​® `

await conn.sendMessage(from,{image:{url:"https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/MENU_IMG.jpg?raw=true"},caption:madeMenu},{quoted:mek})//kemathinam IMG URL ekata alive image eka danna URL EKA THIYENA THENA MEKA TYPE KARANNA ᴄᴏɴꜰɪɢ.ᴀʟɪᴠᴇ_ɪᴍᴀɢᴇ

}catch(e){
console.log(e)
reply(`${e}`)
}
});
