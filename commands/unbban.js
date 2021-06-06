
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
name: "unbban",
value: "unbans a user from using the bot",

async execute(message, args){
 
    
  
    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));
      
    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`An Error Has Occured`) 
    .addFields(
      { name: 'Missing permissions ', value:`You dont have permission to do this`}
    )
    
    
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(RolePermsEmbed)


   
    let validMemberEmbed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(` An Error Has Occured`)
    .setColor('RED')
    .addFields(
      { name: 'No user mentioned', value:`Please mention a valid member of this server` }
    )


    if(!member){
        return message.channel.send(validMemberEmbed)
    }

    let botbans =  db.get(`botbans_${message.guild.id}_${member.id}`)

if(botbans !== null){
    let bbanned = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('GREEN')
    .setTitle(`Succesfully Un-Bot Banned ${member.user.username}#${member.user.discriminator}!`)
    .addFields(
        {name: `Un-Banned by`, value: `${message.author.username}`}
    )
    message.channel.send(bbanned)
}

if(botbans === null){
    let userisalreadybanned = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`An Error Has Occured`)
    .addFields(
        {name: `User is already unbanned!`, value: `${member.user.username}#${member.user.discriminator} is already Un-bot banned, do !bban @${member.user.username} To UnBot ban them!`}
    )
    .setColor('RED')

    message.channel.send(userisalreadybanned)
}
db.delete(`botbans_${message.guild.id}_${member.id}`)
}
}