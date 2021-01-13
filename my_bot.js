const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

// Get your bot's secret token
bot_secret_token = "XXXXXXXXXXX"

client.login(bot_secret_token)
