module.exports = {
	name: 'warn',
	description: 'Warns the user',
async	execute(message) {

        const { prefix } = require('./config.json')
        const Discord = require('discord.js');
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
        const db = require('quick.db')
        const currentDate = new Date();
         const timestamp = currentDate. getTime();
    
       

let RolePermsEmbed = new Discord.MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('RED')
    .setTitle(` An Error Has Occured`) 
    .addFields(
        { name: 'Missing permissions ', value:`You dont have permission to do this`}
    )
    .setTimestamp()


    let reason = args.slice(2).join(' ');
        
    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));
    const User = message.mentions.members.first()
    let WarnCantFindEmbed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(` An Error Has Occured`)
    .setColor('RED')
.addFields(
    { name: 'No user mentioned', value:`Please mention a valid member of this server` }
)



    let NoWarnReason = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(` An Error Has Occured`)
    .addFields(
    {  name: 'No reason given', value:`Please enter a valid reason`}
    )
 .setTimestamp()



    if(!message.member.hasPermission("KICK_MEMBERS"))

    return message.channel.send(RolePermsEmbed)
   
    const adminrole = message.guild.roles.cache.find(role => role.id === `760605453662814358`);

 
    
     if (!member)

    
    return message.channel.send(WarnCantFindEmbed)

    let userismodembed = new Discord.MessageEmbed()
        
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`An Error Has Occured`)
    .setColor('RED')
    .addFields(

      {name: `Unable to warn ${member.user.username}#${member.user.discriminator}`, value: `This user is a moderator or admin, they can't be muted`,}
    )
    
    if(member.hasPermission("KICK_MEMBERS"))
    return message.channel.send(userismodembed) 
    
    if(!reason) 


    return message.channel.send(NoWarnReason)


    console.log(`warn command has been used in ${message.guild.name} by ${message.author.username}`);

    let modlogs = db.get(`modlogs_${message.guild.id}_${member.id}`)
    if(modlogs === null){
           await db.set(`modlogs_${message.guild.id}_${member.user.id}`, {reasons:[`
           Action:Warn 
           Warned for ${reason}
           Warned by ${message.author.tag}
           ------------------------------`
          ]})

    WarnEmbed = new Discord.MessageEmbed()
    .setTitle(`you have been warned in ${message.guild.name}`)
    .setColor('RED')
    .addFields(

     { name: 'Moderator', value: `${message.author.username}#${message.author.discriminator}`, inline: true },     { name: 'Reason', value: `${reason}`, inline: true},
    
    )



    let ServerWarnEmbed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`Warned ${member.user.username}#${member.user.discriminator}`)
    .setColor('GREEN')
    .addFields(
   { name: 'Warned for', value: `${reason}`, inline: true        },        { name: 'Warned by', value:`${message.author.username}#${message.author.discriminator}`, inline: true},
    )
   
    member.user.send(WarnEmbed).catch(e => {message.reply(`There was an error: ${e}`)})
  
  

    message.channel.send(ServerWarnEmbed)

    }

    if(modlogs !== null){

      db.push(`modlogs_${message.guild.id}_${member.user.id}.reasons`, `
      Action:Warn 
      Warned for ${reason} 
      Warned by ${message.author.tag}
      ------------------------------`

      )

    

          
      WarnEmbed = new Discord.MessageEmbed()
      .setTitle(`you have been warned in ${message.guild.name}`)
      .setColor('RED')
      .addFields(
  
       { name: 'Moderator', value: `${message.author.username}#${message.author.discriminator}`, inline: true },     { name: 'Reason', value: `${reason}`, inline: true},
      
      )
  
  
  
      let ServerWarnEmbed = new Discord.MessageEmbed()
      
      .setTitle(`Warned ${member.user.username}#${message.author.discriminator}`)
      .setColor('GREEN')
      .addFields(
     { name: 'Warned for', value: `${reason}`, inline: true        },        { name: 'Warned by', value:`${message.author.username}#${message.author.discriminator}`, inline: true},
      )
    
      
      member.user.send(WarnEmbed).catch(e => {message.reply(`There was an error: ${e}`)})
  
  
      message.channel.send(ServerWarnEmbed)
    }
    


}
  
}
