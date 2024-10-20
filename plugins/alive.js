const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "🇨​​🇭​​🇪​​🇨​​🇰​ ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​-​🇲​​🇩​ ​🇴​​🇳​​🇱​​🇮​​🇳​​🇪​ ​🇴​​🇷​ ​🇴​​🇫​​🇫​​🇱​​🇮​​🇳​​🇪​🙄",
    react: "☺",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
return await conn.sendMessage(from,{image: {url: "https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/ALIVE_IMG.jpg?raw=true"},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



