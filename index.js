const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*"

const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOG] Não foram encontrados comandos");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./comandos/${f}`);
        client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;


    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)

})


client.on('ready', () => {
    console.log(`[LOG] ${client.user.username} está online!`);
  });

client.login(process.env.token)