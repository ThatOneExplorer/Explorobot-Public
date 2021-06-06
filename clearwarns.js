  
module.exports = {
	name: 'clearwarns',
	description: 'clears warns from the user',
	async execute(message) {
    const db = require('quick.db')
      const fs = require("fs")
        const Discord = require('discord.js');

        
        
const { prefix } = require('./config.json');



        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
      
        const userstring = `${message.author.username}#${message.author.discriminator}`

  
        let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));
       
        let number = args[1]
       



        let RolePermsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username}, Error`) 
        .addFields(

            { name: 'Missing permissions ', value:`You dont have permission to do this`}
        )
        .setTimestamp()


        if(!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(RolePermsEmbed)
        
         let mutevalidmemberembed = new Discord.MessageEmbed()
         .setTitle(`${message.author.username} Error `)
         .setColor('RED')
           .addFields(
             { name:  ` Please enter a valid user`, value:`Who's logs do you want to clear?` },
           
            )
        

        if (!member)
        return message.channel.send (mutevalidmemberembed)
        
        
        let warnings = db.get(`warnings_${message.guild.id}_${member.user.id}`)
        
        let userhasnologs = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .addFields(
            {name: `Logs can not be cleared`, value: `User has no logs`}
        )
        if(warnings === null){
        return message.channel.send(userhasnologs)
        }



    await  db.delete(`warnings_${message.guild.id}_${member.user.id}`)
    db.delete(`recentw_${message.guild.id}_${member.id}`)
    let clearedlogsembed = new Discord.MessageEmbed()
    .setTitle(`Succesfully cleared warn logs`)
    .addFields(
        {name: `Cleared by`, value:`${message.author.username}`},
        {name: `Cleared logs of`, value: `${member.user.username}`}
    )
    message.channel.send(clearedlogsembed)
        }

  




   
}