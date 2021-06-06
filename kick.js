module.exports = {
    name: 'kick',
    description: 'kicks the user',
    
    async execute (message) {
      const db = require('quick.db')
      
const { prefix } = require('./config.json');


        const Discord = require('discord.js');
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
        let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));
      

        const userstring = `${message.author.username}#${message.author.discriminator}`

      
        let RolePermsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username} An Error Has Occured`) 
        .addFields(
          { name: 'Missing permissions ', value:`You dont have permission to do this`}
        )
        .setTimestamp()
        
        if(!message.member.hasPermission("KICK_MEMBERS"))
          return message.channel.send(RolePermsEmbed)
    
    
       
        let validMemberEmbed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(` An Error Has Occured`)
        .setColor('RED')
        .addFields(
          { name: 'No user mentioned', value:`Please mention a valid member of this server` }
        )
        .setTimestamp()
    
        let missingBotKickPermmisionsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        
        .setAuthor(message.author.tag, message.author.avatarURL())
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
  
          {name: `Unable to kick ${member.user.username}#${member.user.discriminator}`, value: `This user is a moderator or admin, they can't be muted`,}
        )
    
        if(member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(userismodembed)
    
        if(!member.kickable) 
        return message.channel.send(missingBotKickPermmisionsEmbed)
        
    
       
        let reason = args.slice(2).join(' ');
        let kicks = db.get(`kicks_${message.guild.id}_${member.user.id}`)
        let recentk = db.get(`recentk_${message.guild.id}_${member.id}`)
        
    
       
    
    
    
        let noreasonembed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
       .setColor('RED')
       .setTitle(`Error`)
       .addFields(
        {  name: 'No reason given', value:`Please enter a valid reason`}
    
       )
    
    
    
    
    
        if(!reason) 
        return message.channel.send(noreasonembed)
    
    
    
        if(kicks === null){
          db.set(`kicks_${message.guild.id}_${member.user.id}`, 1 )
          db.set(`recentk_${message.guild.id}_${member.id}`,`${reason}`)
        let kickDMembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`You have been Kicked from ${message.guild.name}`)
        .addFields( 
          { name: 'Moderator ', value: `${message.author.username}${message.author.discriminator}`, inline: true },       { name: 'Kicked for', value: `${reason}`, inline: true },
    
        )
        
        await  member.user.send(kickDMembed).catch(e => {message.reply(`There was an error: ${e}`)})
        
     let kicksuccesEmbed = new Discord.MessageEmbed()
     
     .setAuthor(message.author.tag, message.author.avatarURL())
     .setColor('GREEN')
     .setTitle(`Succesfully kicked ${member.user.username}#${member.user.discriminator}`)
     .addFields(
       { name: 'Moderator ', value: `${message.author.username}${message.author.discriminator}`, inline: true },  { name: 'Kicked for', value: `${reason}`, inline: true },
      
     )
    
    
    message.channel.send(kicksuccesEmbed)
      member.kick(reason).catch(error => message.channel.send(`Sorry ${message.author}, could kick because of: ${error}`));
      
      }
      if(kicks !== null){
        db.add(`kicks_${message.guild.id}_${member.user.id}`, 1)
    db.delete(`recentk_${message.guild.id}_${member.id}`)
    db.set(`recentk_${message.guild.id}_${member.id}`,`${reason}`)
        let kickDMembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`You have been Kicked from ${message.guild.name}`)
        .addFields( 
          { name: 'Moderator ', value: `${message.author.username}${message.author.discriminator}`, inline: true },       { name: 'Kicked for', value: `${reason}`, inline: true },
    
        )
        
        await  member.user.send(kickDMembed).catch(e => {message.reply(`There was an error: ${e}`)})
        
    
     let kicksuccesEmbed = new Discord.MessageEmbed()
     .setThumbnail()
     .setColor('GREEN')
     .setTitle(`Succesfully kicked ${member.user.username}#${member.user.discriminator}`)
     .addFields(
       { name: 'Moderator ', value: `${message.author.username}#${message.author.discriminator}`, inline: true },  { name: 'Kicked for', value: `${reason}`, inline: true },
      
     )
    
    
    message.channel.send(kicksuccesEmbed)
         member.kick(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick the user: ${error}`));
      
      }

    }
    
    }