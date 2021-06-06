const Discord = require("discord.js")
const db = require("quick.db")

const { prefix } = require('./config.json');
module.exports = {
    name: "afk",
    description: "sets an afk with description",
    alias: [
        "brb",
        "away"
    ],

    async execute(message){

   let isafk = db.get(`isafk_${message.author.id}_${message.guild.id}`)

   
   const args = (message.content.slice(prefix.length).trim().split(/ +/g))


   const afkreason = db.get(`afkreason_${message.author.id}`)

   let reason = args.slice(1).join(' ');

   const userstring = `${message.author.username}#${message.author.discriminator}`

   if(!reason){

     reason = `No reason provided`
   }

   if(isafk !== null){

    await db.delete(`afkreason_${message.author.id}`)
   await db.delete(`isafk_${message.author.id}_${message.guild.id}`)

   let afkembed = new Discord.MessageEmbed()
    
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setTitle(`Goodbye ${userstring}, Good luck on your adventure, Or wherever you're going`)
   .setDescription(`Reason: ${reason}`)

   await db.set(`afkreason_${message.author.id}`, reason)
   await db.set(`isafk_${message.author.id}_${message.guild.id}`, true)

  message.channel.send(afkembed)

   }
if(isafk === null){
    let afkembed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`Goodbye ${userstring}, Good luck on your adventure, Or wherever you're going`)
    .setDescription(`Reason: ${reason}`)

    await db.set(`afkreason_${message.author.id}`, reason)
    await db.set(`isafk_${message.author.id}_${message.guild.id}`, true)

   message.channel.send(afkembed)
}
}
}