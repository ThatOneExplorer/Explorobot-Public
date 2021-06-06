const Discord = require('discord.js')
const db = require('quick.db')

const { prefix } = require('./config.json');


module.exports = {
    name: `say`,
    description: `repeats a message`,

    async execute(message){

            

    
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))

        let saym = args.slice(1).join(' ');


        if(!saym)
        return message.reply(`No message given`)

        message.delete().catch(O_o=>{}); 

        message.channel.send(saym)


    }
}