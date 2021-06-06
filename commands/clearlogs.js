  
module.exports = {
	name: 'clearlogs',
	description: 'clears all logs from the user',
	async execute(message) {
    const db = require('quick.db')
     
        const Discord = require('discord.js');
      
        
const { prefix } = require('./config.json');


const userstring = `${message.author.username}#${message.author.discriminator}`

        
const args = (message.content.slice(prefix.length).trim().split(/ +/g))

      
  
        let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));
       





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
        
        let bans = db.get(`bans_${message.guild.id}_${member.user.id}`)
            
        let kicks = db.get(`kicks_${message.guild.id}_${member.user.id}`)

        
        let mutes = db.get(`mutes_${message.guild.id}_${member.user.id}`)

        
        let warns = db.get(`warns_${message.guild.id}_${member.user.id}`)
      

    await db.delete(`bans_${message.guild.id}_${member.user.id}`)
    await db.delete(`kicks_${message.guild.id}_${member.user.id}`)
    await db.delete(`mutes_${message.guild.id}_${member.user.id}`)
    await db.delete(`warnings_${message.guild.id}_${member.user.id}`)

    let clearedlogsembed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`Succesfully cleared all logs`)
    .addFields(
        {name: `Cleared by`, value:`${message.author.username}#${message.author.discriminator}`},
        {name: `Cleared logs of`, value: `${member.user.username}#${member.user.discriminator}`}
    )
    message.channel.send(clearedlogsembed)
        }
}