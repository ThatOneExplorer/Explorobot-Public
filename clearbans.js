module.exports = {
	name: 'clearbans',
	description: 'clears bans from the user',
	async execute(message) {
    const db = require('quick.db')
     
        const Discord = require('discord.js');
      
        const userstring = `${message.author.username}#${message.author.discriminator}`

const { prefix } = require('./config.json');


        
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
        let recentb = db.get(`recentb_${message.guild.id}_${member.id}`,`${reason}`)
        let userhasnologs = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`An Error Has Occurred`)
        .addFields(
            {name: `Logs can not be cleared`, value: `User has no logs`}
        )
        if(bans === null){
        return message.channel.send(userhasnologs)
        }

    await db.delete(`bans_${message.guild.id}_${member.user.id}`)
    db.delete(`recentb_${message.guild.id}_${member.id}`)
    let clearedlogsembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`Succesfully cleared ban logs`)
    .addFields(
        {name: `Cleared by`, value:`${userstring}`},
        {name: `Cleared logs of`, value: `${member.user.username}#${member.user.discriminator}`}
    )
    message.channel.send(clearedlogsembed)
        }
}