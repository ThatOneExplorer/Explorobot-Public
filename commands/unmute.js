const Discord = require('discord.js')
const db = require('quick.db')

const { prefix } = require('./config.json');



module.exports = {

    name: "unmute",
    description: "unmutes a user if they have the muted role",

    async execute(message){

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        
  
    let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === (args[1]));

    
  let muteroleid = await db.get(`muterole_${message.guild.id}`)



    if(!message.member.hasPermission("MANAGE_MESSAGES")){

        let RolePermsEmbed = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('RED')
        .setTitle(`An Error Has Occured`) 
        .addFields(
            { name: 'Missing permissions ', value:`You dont have permission to do this`}
        )
        .setTimestamp()
    
        return message.channel.send(RolePermsEmbed)
    }
if(!member){

    let WarnCantFindEmbed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`An Error Has Occured`)
    .setColor('RED')
.addFields(
    { name: 'No user mentioned', value:`Please mention a valid member of this server` }
)

    return message.channel.send(WarnCantFindEmbed)
}

const muterole = message.guild.roles.cache.find(role => role.id === `${muteroleid}`);
             
let unmutedembed = new Discord.MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`${message.author.username} Has Unmuted ${member.user.username}#${member.user.discriminator}}`)
.setColor("GREEN")

message.channel.send(unmutedembed)
member.roles.remove(muterole).catch(e => {message.channel.send(`Couldn't unmute user due to an error, ${member.user.username}#${member.user.discriminator}: ${e}`)})


    }

}