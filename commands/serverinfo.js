module.exports = {
	name: 'serverinfo',
	description: 'displays info on the server',
	async execute(message) { 
        const config = require("./config.json");
        const Discord = require('discord.js');
        var serverIcon = message.guild.iconURL();
let infoembed = new Discord.MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL())
.setColor('PURPLE')
.setTitle(`**Server info for ${message.guild.name}**`)
.addFields(

{name: 'Member Count',    value: ` ${message.guild.members.cache.filter(member => !member.user.bot).size} `},
{name: 'Owner',    value: `${message.guild.owner}`},
{ name: 'Server name',       value: `${message.guild.name}` },
{ name: 'Server boosts',       value: `${message.guild.premiumSubscriptionCount}` }
)
.setThumbnail(serverIcon)

return message.channel.send(infoembed)
    }
}