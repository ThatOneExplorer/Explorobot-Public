const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "slowmode",
    description: "sets slowmode",

    async execute(message, args) {
    
      
    
let RolePermsEmbed = new Discord.MessageEmbed()
.setColor('RED')

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`An Error Has Occured`) 
.addFields(
    { name: 'Missing permissions ', value:`You dont have permission to do this`}
)

        if(!message.member.hasPermission("MANAGE_MESSAGES"))
    
    
        
    
      return message.channel.send(RolePermsEmbed)
    
    let nonumberembed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle('No Slomwode Time Specified')
    
    if (isNaN(args[0]))
    
     
      
    
    
    
     return message.channel.send(nonumberembed)
     await console.log(`slowmode command has been used in ${message.guild.name} by ${message.author.username}`);
    
     message.channel.setRateLimitPerUser(args[0], )
    
    
     let slowmodeembed = new Discord.MessageEmbed()
     
     .setAuthor(message.author.tag, message.author.avatarURL())
     .setTitle(`Slowmode set to ${args[0]}`)
     .setDescription(`Set by ${message.author.username}#${message.author.discriminator}`)
     .setColor("GREEN")
    
     message.channel.send(slowmodeembed)
      }
    }