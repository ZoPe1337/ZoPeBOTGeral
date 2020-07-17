const Discord = require("discord.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


const rainbow1 = "733315714685075536"
const rainbow2 = "733316146056527973"
const rainbow3 = "733316265862496306"
const rainbow4 = "733316237794345032"
const rainbow5 = "733316225920401468"
const rainbow6 = "733316216348868710"
const rainbow7 = "733316220614606890"
const rainbow8 = "733316270782677022"
const rainbow9 = "733316249135874059"
const rainbow10 = "733316259650732143"
const rainbow11 = "733316243427164181"
const rainbow12 = "733316170270244986"
const rainbow13 = "733316232954249227"
const rainbow14 = "733316209080271000"
const rainbow15 = "733316254915494028"
const rainbow16 = "733316202461396993"



module.exports.run = async (client, message, args) => {

    const member = message.member;
    if (member.roles.cache.some(role => role.name === 'LION')) {

     message.channel.send(`Rainbow ativado em ${member}`) 
     console.log(`Rainbow ativado em ${member}`)
  while (1 < 2){
    member.roles.add(rainbow1);
    member.roles.remove(rainbow16);
     await sleep(5000);
    member.roles.add(rainbow2);
    member.roles.remove(rainbow1);
     await sleep(5000);
    member.roles.add(rainbow3);
    member.roles.remove(rainbow2);
     await sleep(5000);
    member.roles.add(rainbow4);    
    member.roles.remove(rainbow3);
     await sleep(5000);
    member.roles.add(rainbow5);    
    member.roles.remove(rainbow4);
     await sleep(5000);
    member.roles.add(rainbow6);    
    member.roles.remove(rainbow5);
     await sleep(5000);
    member.roles.add(rainbow7);    
    member.roles.remove(rainbow6);
     await sleep(5000);
    member.roles.add(rainbow8);    
    member.roles.remove(rainbow7);
     await sleep(5000);
    member.roles.add(rainbow9);    
    member.roles.remove(rainbow8);
     await sleep(5000);
    member.roles.add(rainbow10);    
    member.roles.remove(rainbow9);
     await sleep(5000);
    member.roles.add(rainbow11);    
    member.roles.remove(rainbow10);
     await sleep(5000);
    member.roles.add(rainbow12);    
    member.roles.remove(rainbow11);
     await sleep(5000);
    member.roles.add(rainbow13);    
    member.roles.remove(rainbow12);
     await sleep(5000);
    member.roles.add(rainbow14);    
    member.roles.remove(rainbow13);
     await sleep(5000);
    member.roles.add(rainbow15);    
    member.roles.remove(rainbow14);
     await sleep(5000);
    member.roles.add(rainbow16);    
    member.roles.remove(rainbow15);
     await sleep(5000);
    }

}
    else{
        message.channel.send("Apenas <@&347831292898967562>'s podem possuir cargos rainbow")
    }
}


  module.exports.config = {
    name: "rainbow",
    description: "",
    usage: "*rainbow",
    accessableby: "LION",
    aliases: []
}
