module.exports = {
	name: 'ban',
	description: 'Bans the user',
	async execute(message) {
    const db = require('quick.db')
   
        const Discord = require('discord.js');
    
const { prefix } = require('./config.json');

        const args = (message.content.slice(prefix.length).trim().split(/ +/g))

        let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));

        let banchannel = message.guild.channels.cache.get("820967492146823178")
     
        let appeallink = db.get(`appeallink_${message.guild.id}`)

        let modlogs = db.get(`modlogs_${message.guild.id}_${member.id}`)

        const userstring = `${message.author.username}#${message.author.discriminator}`

 
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
        
    
        let missingBotBanPermmisionsEmbed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('RED')
        .setTitle(`An Error Has Occured`)
        .addFields(
          { name: 'Missing Bot Permissions', value:`I do not have permissions to ban this user` }
        )
        
    
        if(!member)
        return message.channel.send(validMemberEmbed)
  

       
        let userismodembed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`An Error Has Occured`)
        .setColor('RED')
        .addFields(
  
          {name: `Unable to ban ${member.user.username}#${member.user.discriminator}`, value: `That user is a mod or admin`,}
        )
  
        if(member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(userismodembed)
    
        if(!member.bannable) 
        return message.channel.send(missingBotBanPermmisionsEmbed)
        
    
      
        
        let reason = args.slice(2).join(' ');
        let bans = db.get(`bans_${message.guild.id}_${member.user.id}`)
        let recentb = db.get(`recentb_${message.guild.id}_${member.id}`)
    
    
        let noreasonembed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
       .setColor('RED')
       .setTitle(` An Error Has Occured`)
       .addFields(
        {  name: 'No reason given', value:`Please enter a valid reason`}
    
       )
    
    
    
    
    
        if(!reason) 
        return message.channel.send(noreasonembed)
    
        if(modlogs === null){
          await db.set(`modlogs_${message.guild.id}_${member.user.id}`, {reasons:[`
          Action:Ban
          Banned for ${reason}
          Banned by ${message.author.tag}
          ------------------------------`
         ]})

        let banDMembedNOLINK = new Discord.MessageEmbed()
       
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`You have been Banned in ${message.guild.name}`)
        .setColor('RED')
        .addFields( 
          { name: 'Moderator', value: `${userstring} `, inline: true },       { name: 'Banned for', value: `${reason}`, inline: true },

        )
        let banDMembedWITHLINK = new Discord.MessageEmbed()
       
        .setTitle(`You have been Banned in ${message.guild.name}`)
        .setColor('RED')
        .addFields( 
          { name: 'Moderator', value: `${userstring}`, inline: true },       { name: 'Banned for', value: `${reason}`, inline: true },

        )
        .setFooter(` You may appeal here ${appeallink}`)
   
        if(appeallink === null){
     
          await member.user.send(banDMembedNOLINK).catch(e => {message.reply(`There was an error: ${e}`)})
        }
        if(appeallink !== null)   {
          await  member.user.send(banDMembedWITHLINK).catch(e => {message.reply(`There was an error: ${e}`)})
        }
      
     let bansuccessEmbed = new Discord.MessageEmbed()
     
     .setAuthor(message.author.tag, message.author.avatarURL())
     .setColor('GREEN')
     .setTitle(`Succesfully banned ${member.user.username}#${member.user.discriminator}`)
     .addFields(
       { name: 'Moderator ', value: `${message.author.username}#${message.author.discriminator} `, inline: true },  { name: 'Banned for', value: `${reason}`, inline: true },
    
     )

         member.ban()
          .catch(error => message.reply(`Sorry ${message.author} I couldn't banbecause of : ${error}`));
        message.channel.send(bansuccessEmbed);
        banchannel.send(bansuccessEmbed)
     }
     if(modlogs !== null){

      db.push(`modlogs_${message.guild.id}_${member.user.id}.reasons`, `
      Action:Ban
      Banned for ${reason}
      Banned by ${message.author.tag}
      
      ------------------------------`
      )


    let banDMembedNOLINK = new Discord.MessageEmbed()
       
        .setTitle(`You have been Banned in ${message.guild.name}`)
        .setColor('RED')
        .addFields( 
          { name: 'Moderator', value: `${userstring}`, inline: true },       { name: 'Banned for', value: `${reason}`, inline: true },

        )
        let banDMembedWITHLINK = new Discord.MessageEmbed()
       
        .setTitle(`You have been Banned in ${message.guild.name}`)
        .setColor('RED')
        .addFields( 
          { name: 'Moderator', value: `${userstring}`, inline: true },       { name: 'Banned for', value: `${reason}`, inline: true },

        )
        .setFooter(` You may appeal here ${appeallink}`)

      if(appeallink === null){
     
       await
       member.user.send(banDMembedNOLINK).catch(e => {message.reply(`There was an error: ${e}`)})
      }
      if(appeallink !== null)   {
       await member.user.send(banDMembedWITHLINK).catch(e => {message.reply(`There was an error: ${e}`)})
      }
     let bansuccessEmbed = new Discord.MessageEmbed()
 
     .setAuthor(message.author.tag, message.author.avatarURL())
     .setColor('GREEN')
     .setTitle(`Succesfully banned ${member.user.username}#${member.user.discriminator}`)
     .addFields(
       { name: 'Moderator ', value: `${userstring} `, inline: true },  { name: 'Banned for', value: `${reason}`, inline: true },
  
     )

         member.ban()
          .catch(error => message.reply(`Sorry ${message.author} I couldn't banbecause of : ${error}`));
        message.channel.send(bansuccessEmbed);
        banchannel.send(bansuccessEmbed)
     
  }









       }
    

    
    
    
}