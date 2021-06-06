module.exports = {
    name: 'setlevel',
    description: 'sets a security level',
    
    async execute (message) {
const Discord = require("discord.js")
const db = require("quick.db")

const { prefix } = require('./config.json');


const args = (message.content.slice(prefix.length).trim().split(/ +/g))
const level = args[1]
const staffannouncements = await message.client.channels.fetch("760604491820302427");

const memberrole = message.guild.roles.cache.find(role => role.id === `760605036039766046`);
var textChats = message.guild.channels.cache
.filter((ch) => ch.type === 'text')
.array()


let RolePermsEmbed = new Discord.MessageEmbed()
.setColor('RED')

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`An Error Has Occured`) 
.addFields(
    { name: 'Missing permissions ', value:`You dont have permission to do this`}
)

if(!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send(RolePermsEmbed)


if(!level  || level > 3){
    let nodeletenumberembed = new Discord.MessageEmbed()
    .setColor('RED')
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(` An Error Has Occured`)
    .addFields(
        { name: 'Invalid level', value:`The number you have entered is invalid, Make sure its between 0 and 3` }
      )
     return message.channel.send(nodeletenumberembed)
    }

if(level == "0"){
textChats.forEach(channel => {
 channel.setRateLimitPerUser("0")
 

    channel.updateOverwrite(memberrole, { SEND_MESSAGES: null  });
   
})

  let securitystaffa = new Discord.MessageEmbed()
  .setTitle(`Security level has been set to ${level}`)
  .setFooter(`Set by ${message.author.username}#${message.author.discriminator}`)
  
  let success = new Discord.MessageEmbed()
  
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle(`Success!`)
  .setDescription(`This server is now under security level ${level}.`)
  .setColor("ORANGE")
 message.reply(success)
await staffannouncements.send(`@here`)
staffannouncements.send(securitystaffa)
}

if(level == "1"){
    textChats.forEach(channel => {
     channel.setRateLimitPerUser("10")
        })

   let securitystaffa = new Discord.MessageEmbed()
   .setTitle(`Security level has been set to ${level}`)
   .setFooter(`Set by ${message.author.username}#${message.author.discriminator}`)
     
  let success = new Discord.MessageEmbed()
  
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle(`Success!`)
  .setDescription(`This server is now under security level ${level}.`)
  .setColor("ORANGE")
 message.reply(success)
  
await staffannouncements.send(`@here`)
staffannouncements.send(securitystaffa)
}

if(level == "2"){
    textChats.forEach(channel => {
     channel.setRateLimitPerUser("20")
        })

   let securitystaffa = new Discord.MessageEmbed()
   .setTitle(`Security level has been set to ${level}`)
   .setFooter(`Set by ${message.author.username}#${message.author.discriminator}`)
     
  let success = new Discord.MessageEmbed()
  
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle(`Success!`)
  .setDescription(`This server is now under security level ${level}.`)
  .setColor("ORANGE")
 message.reply(success)
  
await staffannouncements.send(`@here`)
staffannouncements.send(securitystaffa)
}

if(level == "3"){ 
    textChats.forEach(channel => {

    channel.updateOverwrite(memberrole, { SEND_MESSAGES: null });
    });

   let securitystaffa = new Discord.MessageEmbed()
   .setTitle(`Security level has been set to ${level}`)
   .setFooter(`Set by ${message.author.username}#${message.author.discriminator}`)

  

     
  let success = new Discord.MessageEmbed()
  
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle(`Success!`)
  .setDescription(`This server is now under security level ${level}.`)
  .setColor("ORANGE")
 message.reply(success)
  
await staffannouncements.send(`@here`)
return staffannouncements.send(securitystaffa)
    }

    }
}