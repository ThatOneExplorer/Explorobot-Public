const MessageEmbed = require("discord.js").MessageEmbed
const randomPuppy = require("random-puppy")
const { MessageButton } = require("discord-buttons")
const subReddits = require("../subreddits.json").subReddits
const db = require('quick.db')
module.exports = {
    name: "meme",
    description: "meme for days",
    async execute(message){

     
     
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
          const img = await randomPuppy(random);
          const embed = new MessageEmbed()
          .setColor('BLUE')
            .setImage(img)
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`This meme has been taken from /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)

            let button = new MessageButton()
    .setLabel("Press me to delete this meme if it is NSFW!")
    .setStyle("red")
    .setID("memedelete_button")
    const embedandbuttonm = message.channel.send({
      component: button,
      embed: embed
  });


        }
    }