const Discord = require("discord.js")

const { prefix } = require('./config.json');



module.exports = {
    name: "report",
    description: "allows users to report a  user",

    async execute(message){

        let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));


        const args = (message.content.slice(prefix.length).trim().split(/ +/g))


        let nomemberembed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`An Error Has Occured.`)
        .addFields(
            {name: `No user mentioned`, value: `Please mention the user you would like to report`}
        )
        .setColor("RED")

        if(!member){
            return message.channel.send(nomemberembed)
        }
            let reason = args.slice(2).join(' ');

            let noreasonembed = new Discord.MessageEmbed()
            
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`An Error Has Occured.`)
        .addFields(
            {name: `No reason given`, value: `Please give a reason for your report`}
        )
        .setColor("RED")
            if(!reason){
                return message.channel.send(noreasonembed)
            }

            const av = member.user.avatarURL();
            let userreportembed = new Discord.MessageEmbed()
            .setThumbnail(av)
            .setTitle(`Report for ${member.user.username}#${member.user.discriminator} [${member.user.id}]`)
            .addFields(
                {name: `Reported For:`, value: `${reason}`},
                {name: `Reported by:`, value: `${message.author.username}#${message.author.discriminator} [${message.author.id}]`}
            )
            .setFooter(`${message.id} / ${message.link}`)

            let reportsentembed = new Discord.MessageEmbed()
            
        .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`Thank you for your report!`)
            .setDescription(`The staff team will look into this report and decide on a punishment.`)
            .setColor("GREEN")
            const channel = message.guild.channels.cache.find(ch => ch.id === '792560460259917844');

           await channel.send(userreportembed).catch(e => {message.channel.send(`Couldn't report user due to an error, ${member.user.username}#${member.user.discriminator}: ${e}`)})
           message.reply(reportsentembed)
    }
}