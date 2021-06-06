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
   let warnings = db.get(`warnings_${message.guild.id}_${member.user.id}`)
    let mutes = db.get(`mutes_${message.guild.id}_${member.user.id}`)
    let kicks = db.get(`kicks_${message.guild.id}_${member.user.id}`)
    let bans = db.get(`bans_${message.guild.id}_${member.user.id}`)
   let recentw = db.get(`recentw_${message.guild.id}_${member.id}`)
   let recentm = db.get(`recentm_${message.guild.id}_${member.id}`)
  let recentk = db.get(`recentk_${message.guild.id}_${member.id}`)
  let recentb = db.get(`recentb_${message.guild.id}_${member.id}`)

   let botbansmember = db.get(`botbans_${message.guild.id}_${member.user.id}`)
if(warnings === null) warnings = 'This user has no warns!';
if(recentw === null) recentw ='No recent warns logs';
if(mutes === null) mutes = 'This user has no mutes!';
if(recentm === null) recentm = 'No recent mute logs'
if(kicks === null) kicks = 'This user has no kicks!';
if(recentk === null) recentk = 'No recent kick logs'
if(bans === null) bans = 'This user has no bans!';
if(recentb === null) recentb = 'No recent ban logs'
if(botbansmember === null) botbansmember = 'This user is not bot banned!'
if(botbansmember !== null) botbansmember = 'This user is bot banned!'
const av = member.user.avatarURL();
let warningsembed = new Discord.MessageEmbed()
.setColor('GREEN')
.setThumbnail(av)
.setTitle(`Modlogs for ${member.user.username}#${member.user.discriminator}`)
.setDescription(`${botbansmember}`)
.addFields(
{name: `Warns`, value: `${warnings}`},
{name: `Most recent warn`, value: `${recentw}`},
{name: `Mutes`, value: `${mutes}`},
{name: `Most recent mutes`, value: `${recentm}`},
{name: `Kicks`, value: `${kicks}`},
{name: `Most recent kicks`, value: `${recentk}`},
{name: `Bans`, value: `${bans}`},
{name: `Most recent bans`, value: `${recentb}`}
)
message.channel.send(warningsembed)

}
}
