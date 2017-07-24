module.exports = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    adafruit: {
        username: process.env.ADAFRUIT_USERNAME,
        apiKey: process.env.ADAFRUIT_APIKEY
    }
};