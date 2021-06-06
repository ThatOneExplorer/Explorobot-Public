const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
    name: "socials",

    description: "gets a list of my social medias",

    async execute(message){

            


    let socialembed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle('Social medias')
    .setColor("PURPLE")
    .addFields(
    {name: `ThatOneExplorer's Instagram :camera:`, value: `https://www.instagram.com/ThatOneExplorer/?hl=en`},
{name: `Youtube`, value: `https://www.youtube.com/channel/UCAjbCmTOmTsNkPMfxaPtULQ`}
    )
    message.channel.send(socialembed)
    }
}
    
