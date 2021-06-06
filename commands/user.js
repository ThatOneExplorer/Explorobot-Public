module.exports = {
	name: 'user',
	description: 'displays a user info message',
	execute(message, prefix) { 
        const db = require('quick.db')
   
        const Discord = require('discord.js');
        const moment = require('moment')
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
        let member = message.mentions.users.first() || message.author;
       const aboutme = db.get(`aboutme_${member.id}_${message.guild.id}`)

    
      
const av = member.avatarURL();
let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setThumbnail(av)
    .setTitle(`Info for ${member.username}#${member.discriminator}`)
   .addFields(
    {name: `ID`, value: `${member.id}`},
    {name: `Account created on`, value: `${moment.utc(member.createdAt).format("dddd,MMMM, Do YYYY")}`},
    {name: `About Me`, value: `${aboutme}`}

    
   )
   message.channel.send(embed)
    }
}

