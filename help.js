const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: `help`,
    description: `Help command`,

    async execute(message){

        const { prefix } = require('./config.json');


        const userstring = `${message.author.username}#${message.author.discriminator}`

        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
     
    let helpembed = new Discord.MessageEmbed()
 .setColor("PINK")
    .setTitle(`Help requested by ${message.author.username}#${message.author.discriminator}`)
    .addFields(
    {name: `Fun commands!`, value: `meme, bread `},
    {name: `Misc. commands`, value: `appeallink, help, ping, report, serverinfo, socials, suggest, wheel, r, userinfo, aboutme `}
    )

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        let helpembedmod = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/760605885402710066/814294185968402482/e63co024yh741.png")
        .setColor("RED")
           .setTitle(`Help requested by ${message.author.username}#${message.author.discriminator} MOD VERSION`)
           .addFields(
           {name: `Staff commands.`, value: `ban, bban, clearbans, clearkicks, clearlogs, clearmutes, cleartcache, clearwarns, inac, kick, modlogs, mute, purge, set, setlevel, slowmode, unbban, unmute, warn`},
           {name: `Fun commands!`, value: `meme, bread `},
           {name: `Misc. commands`, value: `appeallink, help, ping, report, serverinfo, socials, suggest, wheel, `}
           )
           message.channel.send(helpembedmod)
    }
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
    message.channel.send(helpembed)
    }

    }
}