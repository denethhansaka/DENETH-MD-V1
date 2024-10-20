const ytSearch = require('yt-search');
const fg = require('api-dylux');

async function ytcore(query) {
    const searchResults = await ytSearch(query);
    const video = searchResults.videos.length > 0 ? searchResults.videos[0] : null;

    if (!video) {
        throw new Error('No video found');
    }

    const videoUrl = video.url;
    const ytmp3data = await fg.yta(videoUrl);
    const ytmp4data = await fg.ytv(videoUrl);

    return {
        title: video.title,
        thumbnail: video.thumbnail,
        mp3Url: ytmp3data.dl_url,
        mp4Url: ytmp4data.dl_url,
        size: ytmp3data.size
    };
}

module.exports = {
    ytcore
}
