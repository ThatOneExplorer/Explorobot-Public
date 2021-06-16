const MessageEmbed = require("discord.js").MessageEmbed
const randomPuppy = require("random-puppy")
const urbex = require("../urbex.json").subReddits
const db = require('quick.db')
module.exports = {
    name: "urbex",
    description: "urbex posts",
    async execute(message){

     
     
        const random = urbex[Math.floor(Math.random() * urbex.length)];
          const img = await randomPuppy(random);
          const embed = new MessageEmbed()
          .setColor('BLACK')
            .setImage(img)
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`Urbex post from the subreddit: /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
          await message.channel.send(embed);
        }
    }