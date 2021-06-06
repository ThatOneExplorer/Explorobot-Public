const Discord = require('discord.js')
const db = require('quick.db')

const { prefix } = require('./config.json');

  

module.exports = {
    name: "suggest",
    description: "suggests something",

    async execute(message){
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
        const suggestion = args.slice(1).join(' ');


            
  

let nosuggestionembed = new Discord.MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`Error`)
.setColor("RED")
.addFields(
    {name: `No suggestion`, value: `What do you want to suggest?`}
)

if(!suggestion){
return message.channel.send(nosuggestionembed)
}

let suggestionembed = new Discord.MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(` Sent suggestion!`)
.setColor('GREEN')
.addFields(
    {name: `Suggestion sent`, value: `An admin will get back to you shortly!`}
)

message.channel.send(suggestionembed)

let suggestionembed2 = new Discord.MessageEmbed()
.setColor('BLUE')

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`Suggestion from ${message.author.username}#${message.author.discriminator}`)
.addFields(
    {name: `Suggestion:`, value: `${suggestion}`}
)
.setDescription(`Author ID: ${message.author.id}`)


let suggestionschannel = await message.client.channels.fetch("763474544597401611");
suggestionschannel.send(suggestionembed2)

    }
}