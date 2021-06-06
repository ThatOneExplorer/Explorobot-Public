const db = require('quick.db')
const Discord = require('discord.js')
const moment = require('moment')
module.exports = async member  => {
    const membercount = member.guild.channels.cache.find(ch => ch.id === '850524264171044874');
    membercount.setName(`Members: ${member.guild.members.cache.filter(member => !member.user.bot).size} `)
}
