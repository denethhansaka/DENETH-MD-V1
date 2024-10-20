const axios = require('axios');
const { cmd, commands } = require('../command');
const config = require('../config'); // Add your Pexels API key here

cmd({
    pattern: "wallpaper",
    desc: "Fetch a random wallpaper image.",
    category: "fun",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.pexels.com/v1/search?query=wallpaper&per_page=1&page=${Math.floor(Math.random() * 100) + 1}`;
        const response = await axios.get(apiUrl, { headers: { Authorization: config.PEXELS_API_KEY } });
        const data = response.data.photos[0];

        await conn.sendMessage(from, { image: { url: data.src.original }, caption: '🖼️ *Random Wallpaper Image* 🖼️\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error fetching wallpaper image: ${e.message}`);
    }
});
