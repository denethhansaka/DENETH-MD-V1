const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "This is menu",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
news: '',
ai: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `🥰*Hello ${pushname}*

•DOWNLOAD MENU⬇
${menu.download}
•MAIN MENU🧾
${menu.main}
•NEWS MENU🧾
${menu.news}
•GROUP MENU🤝
${menu.group}
•AI MENU🖤
${menu.ai}
•OWNER MENU⚒
${menu.owner}
•CONVERT MENU🔄
${menu.convert}
•SEARCH MENU🔎
${menu.search}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ
`

await conn.sendMessage(from,{image:{url:"https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/Menu%20Command.jpg?raw=true"},caption:madeMenu},{quoted:mek})//kemathinam IMG URL ekata alive image eka danna URL EKA THIYENA THENA MEKA TYPE KARANNA ᴄᴏɴꜰɪɢ.ᴀʟɪᴠᴇ_ɪᴍᴀɢᴇ
  
}catch(e){
console.log(e)
reply(`${e}`)
}
});
