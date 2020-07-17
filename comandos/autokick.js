const Discord = require("discord.js")
const bot = new Discord.Client();


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


module.exports.run = async (bot, message, args) => {

    const author = message.member;
    const member = message.mentions.members.first();
    if (author.roles.cache.some(role => role.name === 'LION')) {
        message.channel.send(`Metralhadora de kicks ativada em ${member} ratatatatatatata`)
        console.log(`Autokick ativado em ${member}`)
        for (var i = 0; i < 1000000; i++) {
        member.kick();
        await sleep (5000)
        }
    }
    else{
        message.channel.send("Apenas <@&347831292898967562>'s podem utilizar este comando");
    }
}



module.exports.config = {
    name: "autokick",
    description: "Metralhadora de kick",
    usage: "*autokick",
    accessableby: "LION",
    aliases: []
}
