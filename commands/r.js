const Discord = require("discord.js")

const { prefix } = require('./config.json');


const db = require("quick.db")
module.exports = {
    name: `r`,
    description: `gives a rule thing idk`,

    async execute(message){

        const args = (message.content.slice(prefix.length).trim().split(/ +/g))

        let botbans =  db.get(`botbans_${message.guild.id}_${message.author.id}`)


        if(botbans !== null){
            let botbannedembed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} An Error Has Occured`)
            .addFields(
                {name: "You are bot banned!", value: `You are banned from using the bot, please DM a staff member to appeal this ban`}
            )
            return message.channel.send(botbannedembed)
            }


            let ruleembed1 = new Discord.MessageEmbed()
            .setTitle(`Rule 1.`)
            .setDescription(`Do not talk about, post, play NSFW content anywhere within this server`)

            let ruleembed2 = new Discord.MessageEmbed()
            .setTitle(`Rule 2.`)
            .setDescription(`Respect other members`)


            let ruleembed3 = new Discord.MessageEmbed()
            .setTitle(`Rule 3.`)
            .setDescription(`Do not threaten to Dox, DDOS, Hack or similar`)

            let ruleembed4 = new Discord.MessageEmbed()
            .setTitle(`Rule 4.`)
            .setDescription(`Do not spam, E.G 3-4 messages in a consecutive manner`)

            
            let ruleembed5 = new Discord.MessageEmbed()
            .setTitle(`Rule 5.`)
            .setDescription(`Do not send large chunks of text`)

            let ruleembed6 = new Discord.MessageEmbed()
            .setTitle(`Rule 6.`)
            .setDescription(`Do not participate in Raids, Doxxing, DDOSING, or other`)

            let ruleembed7 = new Discord.MessageEmbed()
            .setTitle(`Rule 7.`)
            .setDescription(`No use of Racial, Homophobic ETC. Slurs,`)

            let ruleembed8 = new Discord.MessageEmbed()
            .setTitle(`Rule 8.`)
            .setDescription(`No hateful discrimintative language`)

            
            let ruleembed9 = new Discord.MessageEmbed()
            .setTitle(`Rule 9.`)
            .setDescription(` a discord server can not he advertised anywhere in the server unless done by a partnership`)

            let ruleembed10 = new Discord.MessageEmbed()
            .setTitle(`Rule 10.`)
            .setDescription(`Staff roles must only be pinged in an EMERGENCY, pinging the role may lead to a mute or warn.`)
           
            
            let ruleembed11 = new Discord.MessageEmbed()
            .setTitle(`Rule 11.`)
            .setDescription(`NSFW rule applies to your profile as well, NSFW profile pictures, status or name may be asked to be changed, refusal to do so will lead to being removed from the server until it's changed. `)

                     
            let ruleembed12 = new Discord.MessageEmbed()
            .setTitle(`Rule 12.`)
            .setDescription(`Please refrain from discussing or mentioning personal details regarding <@756503000016486402>, Thank you.`)

            let ruleembed13 = new Discord.MessageEmbed()
            .setTitle(`Rule 13.`)
            .setDescription(`By being in this server you consent to information such as user id's, message ids, usernames etc. being collected and stored by @ExploroBot (DM FOR MODMAIL), If you are unhappy with this you may leave the server.`)

           let ruleembed14 = new Discord.MessageEmbed()
           .setTitle(`Rule 14.`)
           .setDescription(` By being in this server you acknowledge and agree that content such as names, media or other info that appears in this server may be shown in content i post, such as server advertisements, videos or other. `)


 let noruleembed = new Discord.MessageEmbed()
.setTitle(`An Error Has Occured`)

.setAuthor(message.author.tag, message.author.avatarURL())
.addFields(
    {name: `No rule specified`, value: `Please specify a rule number`}
)
.setColor("RED")
     var rulenumber = args[1]

if(!rulenumber){
    return message.channel.send(noruleembed)
}

     if(rulenumber === "1"){
message.channel.send(ruleembed1)
     }

     if(rulenumber === "2"){
         message.channel.send(ruleembed2)
     }

     if(rulenumber === "3"){
         message.channel.send(ruleembed3)
     }

     if(rulenumber === "4"){
         message.channel.send(ruleembed4)
     }

     if(rulenumber === "5"){
         message.channel.send(ruleembed5)
     }

     if(rulenumber === "6"){
         message.channel.send(ruleembed6)
     }

     if(rulenumber === "7"){
         message.channel.send(ruleembed7)
     }

     if(rulenumber === "8"){
         message.channel.send(ruleembed8)
     }

     if(rulenumber === "9"){
         message.channel.send(ruleembed9)
     }

     if(rulenumber === "10"){
         message.channel.send(ruleembed10)
     }

     if(rulenumber === "11"){
         message.channel.send(ruleembed11)
     }

     if(rulenumber === "12"){
     message.channel.send(ruleembed12)
    }

    if(rulenumber === "13"){
        message.channel.send(ruleembed13)
    }
    if(rulenumber === "14"){
        message.channel.send(ruleembed14)
    
    }
}
}