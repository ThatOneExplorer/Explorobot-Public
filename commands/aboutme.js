const Discord = require("discord.js")
const db = require("quick.db")
const { prefix } = require("./config.json")
module.exports = {
    name: "aboutme",
    description: "sets a custom about me",


 async execute(message){

    const args = (message.content.slice(prefix.length).trim().split(/ +/g))

    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));

    let descriptor = args.slice(1).join(' ');


    if(!descriptor){
        let nodescriptor = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`${message.author.tag} An Error Has Occured`)
        .setColor("RED")
        .addFields(
            {name: `No about me status given!`, value: `Please provide a custom message to be shown on your user info card.`}
        )
        return message.channel.send(nodescriptor)
    }
    
    const aboutme = db.get(`aboutme_${message.author.id}_${message.guild.id}`)

    if(aboutme === null){
    await db.set(`aboutme_${message.author.id}_${message.guild.id}`, `${descriptor}`)
    let setembed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`${message.author.tag} Success!`)
    .setColor("GREEN")
    .addFields(
        {name: `Sucessfully set about me status!`, value: `Set status to ${descriptor}`}
    )
   return message.channel.send(setembed)
    }
    else if(aboutme !== null){
        await db.delete(`aboutme_${message.author.id}_${message.guild.id}`, `${descriptor}`)
       db.set(`aboutme_${message.author.id}_${message.guild.id}`, `${descriptor}`)
       let setembed = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL())
       .setTitle(`${message.author.tag} Success!`)
       .setColor("GREEN")
       .addFields(
           {name: `Sucessfully set about me status!`, value: `Set status to ${descriptor}`}
       )
       return message.channel.send(setembed)
    }

   
    }
}