const db = require("quick.db")
const Discord = require("discord.js")
module.exports = {
    name: "inac",
    description: "files an inac notice.",

    async execute(message) {
 

        const { prefix } = require('./config.json');



        const userstring = `${message.author.username}#${message.author.discriminator}`


        const args = (message.content.slice(prefix.length).trim().split(/ +/g))

 

        if(!message.member.hasPermission("KICK_MEMBERS")){
            return;
        }
    
        let reason = args.slice(1).join(' ');
        const av = message.author.avatarURL();
        let missingarg = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}, An Error Has Occured`)
      .addFields(
          {name: `Format:`, value: `!inac <time> + <reason>`}
      )

   

      if(!reason){
          return message.channel.send(missingarg).catch(e => {message.reply(`There was an error: ${e}`)})
      }

      let inacembed = new Discord.MessageEmbed()
      .setTitle(`Inac for ${message.author.username}#${message.author.discriminator}`)
       .setThumbnail(av)
     .addFields(
         {name: `Inac reason`, value:`${reason}`}
     )
     let inacsentembed = new Discord.MessageEmbed()
     .setTitle(`${message.author.username}#${message.author.discriminator} Thank you for submitting your inac notice!`)
     .setDescription(`Please wait for the green check mark / red x reaction to see if it has been approved`)
     .setColor("GREEN")
       const channel = message.guild.channels.cache.find(ch => ch.id === '781247571422740480');

       channel.send(inacembed).catch(e => {message.reply(`There was an error: ${e}`)})
       message.reply(inacsentembed).catch(e => {message.reply(`There was an error: ${e}`)})
    }
}