const Discord = require("discord.js")
const bot = new Discord.Client();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports.run = async (bot, message, args) => {
    const member = message.member
    if (member.roles.cache.some(role => role.name === 'LION')) {
        message.channel.send("Metralhadora de kicks desativada");
        console.log(`Autokick desativado`)
        await sleep(1000);
        process.kill(process.pid);
    }
    else {
        message.channel.send("Apenas <@&347831292898967562>'s podem utilizar este comando")
    }
}

module.exports.config = {
    name: "stopkick",
    description: "Metralhadora de kick",
    usage: "*stopkick",
    accessableby: "LION",
    aliases: []
}