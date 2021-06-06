const db = require('quick.db')
const fs = require("fs")
  const Discord = require('discord.js');
  
const { prefix } = require('./config.json');


  const ms = require("ms");
module.exports = {
	name: 'mute',
	description: 'Mutes the user',
async	execute(message) {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let muteroleid = await db.get(`muterole_${message.guild.id}`)

    



  let nomuteroleembed = new Discord.MessageEmbed()
  
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('RED')
  .setTitle(` An Error Has Occured`)
  .addFields(
    {name: `No mute role found in the database`, value: `Please select a muted role with !set mRole @role`}
  )

  if(muteroleid === null){
    return message.channel.send(nomuteroleembed)
    }



  const muterole = message.guild.roles.cache.find(role => role.id === `${muteroleid}`);
             
      

      
      

        let RolePermsEmbed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('RED')
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
             { name:  ` Please enter a valid user`, value:`Who do you want to be muted?` },
           
            )
        
        let member = message.mentions.members.first();
      
        
        if (!member){
        return message.channel.send (mutevalidmemberembed)
        }

               
     
 
        let userismodembed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`An Error Has Occured`)
        .setColor('RED')
        .addFields(
  
          {name: `Unable to mute ${member.user.username}#${member.user.discriminator}`, value: `This user is a moderator or admin, they can't be muted`,}
        )
        
        if(member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(userismodembed) 

     
        
        let time = args[2];
        let reason = args.slice(3).join(' ');
        let mutes = db.get(`mutes_${message.guild.id}_${member.user.id}`)
        let recentm = db.get(`recentm_${message.guild.id}_${member.id}`)
        let nomutereasonembed = new Discord.MessageEmbed()
        .setColor('RED')
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`ERROR`)
        .addFields(
            {  name: 'No reason given', value:`Please enter a valid reason`}
         )

         let nomutetimeembed = new Discord.MessageEmbed()
         .setColor('RED')
        .setAuthor(message.author.tag, message.author.avatarURL())
         .setTitle(`ERROR`)
        .addFields(

          {  name: 'No time given', value:`Please give me a time`}
        )

     
         if(!time)
           return message.channel.send(nomutetimeembed)
     else if (!reason)
           
        return message.channel.send (nomutereasonembed)
        

        if(mutes === null){
          db.set(`mutes_${message.guild.id}_${member.user.id}`, 1 )
          db.get(`recentm_${message.guild.id}_${member.id}`, reason)
member.roles.add(muterole).catch(error => message.reply(`Sorry ${message.author}: ${error}`));

        
        let muteembed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('GREEN')
        .setTitle(`Succesfully muted ${member.user.username}#${member.user.discriminator} for ${time}`)
        .addFields(
          { name:  `Moderator`, value:` ${message.author.username}#${message.author.discriminator} `, inline: true, },    { name:  `Reason`, value:`${reason}` },
        
         )
         
         message.channel.send(muteembed)
        
        let MuteDMembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`You have been muted in ${message.guild.name} for ${time}`)
        .addFields(
          { name:  `Moderator`, value:`${message.author.username}#${message.author.discriminator} `, inline: true, },      { name:  `Reason`, value:`${reason}`, inline: true, },
        
         )
         
                
         member.user.send(MuteDMembed).catch(e => {message.reply(`There was an error: ${e}`)})
        

        setTimeout(function(){
                
  
          member.roles.remove(muterole);
         let unmutedembed = new Discord.MessageEmbed()
         .setTitle(`You have been unmuted in ${message.guild.name}, you may now talk`)
     
              
         member.user.send(unmutedembed).catch(e => {message.channel.send(`Couldn't send unmute embed to ${member.user.username}#${member.user.discriminator}: ${e}`)})
       
      }, ms(time));
    
        }
    if(mutes !== null){
      db.add(`mutes_${message.guild.id}_${member.user.id}`, 1)
      db.delete(`recentm_${message.guild.id}_${member.id}`)
      db.set(`recentm_${message.guild.id}_${member.id}`, reason)
      member.roles.add(muterole).catch(error => message.reply(`Sorry ${message.author}: ${error}`));
         
    
          
        
      let muteembed = new Discord.MessageEmbed()
      
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('GREEN')
      .setTitle(`Succesfully muted ${member.user.username}#${member.user.discriminator} for ${time}`)
      .addFields(
        { name:  `Moderator`, value:` ${message.author.username}#${message.author.discriminator}  `, inline: true, },    { name:  `Reason`, value:`${reason}` },
      
       )
       
       message.channel.send(muteembed)
      
      let MuteDMembed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(`You have been muted in ${message.guild.name} for ${time}`)
      .addFields(
        { name:  `Moderator`, value:`${message.author.username}#${message.author.discriminator} `, inline: true, },      { name:  `Reason`, value:`${reason}`, inline: true, },
      
       )
      
             

 member.user.send(MuteDMembed).catch(e => {message.reply(`There was an error: ${e}`)})





      setTimeout(function(){
              

        member.roles.remove(muterole);
       let unmutedembed = new Discord.MessageEmbed()
       .setTitle(`You have been unmuted in ${message.guild.name}, you may now talk`)
       member.user.send(unmutedembed).catch(e => {message.channel.send(`Couldn't send unmute embed to ${member.user.username}#${member.user.discriminator}: ${e}`)})

      
 
    }, ms(time));
    
    }



  }


  }