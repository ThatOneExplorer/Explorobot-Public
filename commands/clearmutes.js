  
module.exports = {
	name: 'clearmutes',
	description: 'clears mutes from the user',
	async execute(message) {
    const db = require('quick.db')
     
        const Discord = require('discord.js');
      
        
const { prefix } = require('./config.json');


        
const userstring = `${message.author.username}#${message.author.discriminator}`

const args = (message.content.slice(prefix.length).trim().split(/ +/g))

      
  
        let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));
       
        
       
        let moddisabled = db.get(`moddisabled_${message.guild.id}`)


           let moddisabledembed = new Discord.MessageEmbed()
           .setColor('RED')
           
         .setAuthor(message.author.tag, message.author.avatarURL())
           .setTitle(`Error`)
          .addFields(
            {name: `This module is disabled`, value: `Do /enable <module> To re enable this module :)`}
          )
        if(moddisabled !== null) return message.channel.send(moddisabledembed)



        let RolePermsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`Error`) 
        .addFields(

            { name: 'Missing permissions ', value:`You dont have permission to do this`}
        )
        .setTimestamp()


        if(!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(RolePermsEmbed)
        
         let mutevalidmemberembed = new Discord.MessageEmbed()
         
         .setAuthor(message.author.tag, message.author.avatarURL())
         .setTitle(`Error `)
         .setColor('RED')
           .addFields(
             { name:  ` Please enter a valid user`, value:`Who's logs do you want to clear?` },
           
            )
        

        if (!member)
        return message.channel.send (mutevalidmemberembed)
        
        let mutes = db.get(`mutes_${message.guild.id}_${member.user.id}`)
        
        let userhasnologs = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .addFields(
            {name: `Logs can not be cleared`, value: `User has no logs`}
        )
        if(mutes === null){
        return message.channel.send(userhasnologs)
        }

    await  db.delete(`mutes_${message.guild.id}_${member.user.id}`)
    db.delete(`recentm_${message.guild.id}_${member.id}`)
    let clearedlogsembed = new Discord.MessageEmbed()
    .setTitle(`Succesfully cleared mute logs`)
    .addFields(
        {name: `Cleared by`, value:`${message.author.username}`},
        {name: `Cleared logs of`, value: `${member.user.username}`}
    )
    message.channel.send(clearedlogsembed)
        }
}