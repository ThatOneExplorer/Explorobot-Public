const db = require('quick.db')
const Discord = require('discord.js')
const ban = require('./ban')


module.exports = {
name: 'modlogs',
description: 'Gets a list of moderative action thats been taken on the user',
async execute (message) { 
  
const { prefix } = require('./config.json');


  const args = message.content.slice(prefix.length).trim().split(/ +/);

  let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));
    
  
    
    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`An Error Has Occured`) 
    .addFields(
      { name: 'Missing permissions ', value:`You dont have permission to do this`}
    )
    .setTimestamp()

    let validMemberEmbed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`An Error Has Occured`)
    .setColor('RED')
    .addFields(
      { name: 'No user mentioned', value:`The user may no longer be in this guild, or doesn't exist` }
    )
    .setTimestamp()

    
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(RolePermsEmbed)

   if(!member)
  return message.channel.send(validMemberEmbed)
  let modlogs = db.get(`modlogs_${message.guild.id}_${member.user.id}.reasons`)

   let botbansmember = db.get(`botbans_${message.guild.id}_${member.user.id}`)
if (modlogs === null) modlogs = 'Users modlogs are cleaner then a plate!'
const av = member.user.avatarURL();
let warningsembed = new Discord.MessageEmbed()
.setColor('GREEN')
.setThumbnail(av)
.setTitle(`Modlogs for ${member.user.username}#${member.user.discriminator}`)
.setDescription(`${botbansmember}`)
.addFields(
  {name: `Modlogs`, value: `${modlogs}`}
)

message.channel.send(warningsembed)

}
}
