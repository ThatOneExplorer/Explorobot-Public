const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: 'appeallink',
    description: 'shows what the current appeal link is',
    async execute(message){


        let appeallink = db.get(`appeallink_${message.guild.id}`)
        

        let noappeallink = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(` Error`)
        .setColor('RED')
        .addFields(
            {name: `No appeal link`, value: `There's no appeal link for this guild!`}
        )
       
    if(appeallink === null){
        return message.channel.send(noappeallink)
    }


    let appeallinkembed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('GREEN')
    .setTitle(`Appeal link for ${message.guild.name}`)
    .addFields(
        {name: `Link`, value: `${appeallink}`}
    )
   if(appeallink !== null){

message.channel.send(appeallinkembed)
   }

   console.log(`help command has been used in ${message.guild.name} by ${message.author.username}#${message.author.discriminator} (${message.author.id})`);




    }
}