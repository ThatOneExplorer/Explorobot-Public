module.exports = {
    name: 'ping',
description: 'Gets the ping',
async execute(message, client) {
const Discord = require ('discord.js')
const db = require('quick.db')

let botbans =  db.get(`botbans_${message.guild.id}_${message.author.id}`)




let awaitembed = new Discord.MessageEmbed()
.setColor('ORANGE')
 .setTitle(`Pinging... `)
   
 const m = await message.channel.send(awaitembed);
    
     




 let pingembed = new Discord.MessageEmbed()
 .setColor('GREEN')
.setTitle(`Pong!`)
.addFields(
    {name: `Latency is`, value: `${m.createdTimestamp - message.createdTimestamp}ms.`}
)
  
    
    m.edit(pingembed);






}
}