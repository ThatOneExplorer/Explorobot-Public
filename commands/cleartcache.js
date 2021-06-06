module.exports = {
	name: 'cleartcache',
	description: 'clears users ticketcache',
async	execute(message) {
const Discord = require("discord.js")
const db = require("quick.db")

const { prefix } = require('./config.json');


        
const args = (message.content.slice(prefix.length).trim().split(/ +/g))



const userstring = `${message.author.username}#${message.author.discriminator}`


const member = message.mentions.members.first();


db.delete(`openthreads_${member.id}`)
db.delete(`userticket_${member.id}`)
db.delete(`threadid_${member.id}`)

message.reply(`Cleared ${member.user.username}#${member.user.discriminator}`)
}
}