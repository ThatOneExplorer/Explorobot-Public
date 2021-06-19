
const Discord = require('discord.js')
module.exports = async clickButton  => {

if(clickButton.id === ("memedelete_button")){

await clickButton.message.delete()

return clickButton.channel.send(`Meme deleted by <@${clickButton.clicker.member.id}>`)

}



}