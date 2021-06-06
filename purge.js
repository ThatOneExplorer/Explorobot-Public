module.exports = {
	name: 'purge',
	description: 'purges an amount of messages',
  async execute(message) {
        const config = require("./config.json");
        const Discord = require('discord.js');
        const db = require('quick.db')
        
const { prefix } = require('./config.json');


	const args = message.content.slice(prefix.length).trim().split(/ +/);
        
      

    
      
            let RolePermsEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            
        .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`An Error Has Occured`) 
            .addFields(
                {name: `Missing permissions`, value: `You don't have permission to do this`}
            )
            .setTimestamp()
            if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(RolePermsEmbed)
        
            
  
            const deleteCount = args[1]
            let nodeletenumberembed = new Discord.MessageEmbed()
            .setColor('RED')
        .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`An Error Has Occured`)
            .addFields(
                { name: 'No purge amount given', value:`Enter a purge amount between 2-100` }
              )
          
            if(!deleteCount || deleteCount < 2 || deleteCount > 100)
              return message.channel.send(nodeletenumberembed);
            

        
            let purgeembed = new Discord.MessageEmbed()
            
        .setAuthor(message.author.tag, message.author.avatarURL())
            .setColor('GREEN')
            .setTitle(`Succesfully Purged ${deleteCount} messages`)
                
        
            

      await message.channel.bulkDelete(args[1]).catch(error => message.channel.send(`Sorry ${message.author}, could purge because of: ${error}`));
        
            message.channel.send(purgeembed)
            .then(msg => {
              msg.delete({ timeout: 2000})
            })
      
          }
        
       
        








    }