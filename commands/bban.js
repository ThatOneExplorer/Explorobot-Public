
const Discord = require('discord.js')
const db = require('quick.db')

const { prefix } = require('./config.json');

module.exports = {
name: "bban",
value: "bans a user from using the bot",

async execute(message){
  const args = (message.content.slice(prefix.length).trim().split(/ +/g))

    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));
      
    let RolePermsEmbed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('RED')
    .setTitle(`An Error Has Occured`) 
    .addFields(
      { name: 'Missing permissions ', value:`You dont have permission to do this`}
    )
    
    
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(RolePermsEmbed)


   
    let validMemberEmbed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`An Error Has Occured`)
    .setColor('RED')
    .addFields(
      { name: 'No user mentioned', value:`Please mention a valid member of this server` }
    )


    if(!member){
        return message.channel.send(validMemberEmbed)
    }

    let botbans =  db.get(`botbans_${message.guild.id}_${member.id}`)

if(botbans === null){
    let bbanned = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('GREEN')
    .setTitle(`Succesfully Bot Banned ${member.user.username}#${member.user.discriminator}!`)
    .addFields(
        {name: `Banned by`, value: `${message.author.username}`}
    )
    message.channel.send(bbanned)
     return db.set(`botbans_${message.guild.id}_${member.id}`, `${member.user.id}`)
     
}

if(botbans !== null){
    let userisalreadybanned = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`An Error Has Occured`)
    .addFields(
        {name: `User is already banned!`, value: `${member.user.username}#${member.user.discriminator} is already bot banned, do !unbban @${member.user.username} To Un-Bot ban them!`}
        
    )
    .setColor('RED')
    message.channel.send(userisalreadybanned)
}
}
}