const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gmlEQQgK#I3p8_RkDchmZYAjNsuKWATOwQIJjyJW6C_ReK7-4oMY",
MONGODB: process.env.MONGODB || "mongodb://mongo:cRkswBWkzOcbjKHaQfDsLLraLympnLQa@junction.proxy.rlwy.net:56096",
PEXELS_API_KEY: process.env.PEXELS_API_KEY='39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH',
};
