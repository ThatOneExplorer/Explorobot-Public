const db = require('quick.db')
const Discord = require('discord.js')
const moment = require('moment')
module.exports = async member  => {
    
   


  
    const memberrole = member.guild.roles.cache.find(role => role.id === `760605036039766046`);
    const channel = member.guild.channels.cache.find(ch => ch.id === '760606910968758312');
    const membercount = member.guild.channels.cache.find(ch => ch.id === '850524264171044874');
    membercount.setName(`Members: ${member.guild.members.cache.filter(member => !member.user.bot).size} `)

const verificationsetting =  await db.get(`verification_${member.guild.id}`)
if(verificationsetting !== null){
member.roles.add(memberrole)
let av = member.user.avatarURL();



      

let welcomeembed = new Discord.MessageEmbed()
.setThumbnail(av)
.setColor('BLUE')

.setAuthor(member.user.tag, member.user.avatarURL())
.setTitle(`Welcome ${member.user.username}#${member.user.discriminator}`)
.addFields(
    {name: `Welcome message`, value: `Welcome to ${member.guild.name}, Please read the rules in <#760604491820302426>, If you have any questions DM an online staff member, Here you can discuss urban explorations, share your cool photos in either <#764430308274864168> or <#760984149405728808>, Get some roles in <#795836152686575686> You can discuss any topic as long as they follow server rules, Have fun!`},
 {name: `Position`, value: `${member.guild.members.cache.filter(member => !member.user.bot).size}`},
 {name: `User mention`, value: `<@${member.user.id}>`},
 {name: `User id`, value: `${member.user.id}`}
)

let welcomeping = db.get(`welcomeping_${member.guild.id}`)
let welcomesetting = db.get(`welcome_${member.guild.id}`)
if(welcomeping === null){

 if(welcomesetting !== null){
     return;
 }
await channel.send("<@&778010298618871898>")
}

if(welcomesetting === null){
 await channel.send(welcomeembed)
await member.send(`**Welcome to ${member.guild.name} Make sure to complete the screening and verify in <#760610183087915061>, If you have any questitons then DM this bot to open a modmail, Thanks on behalf of the ${member.guild.name} Staff team**`)
}

if(welcomesetting !== null){
member.send(`**Welcome to ${member.guild.name} Make sure to complete the screening and verify in <#760610183087915061>, If you have any questitons then DM this bot to open a modmail, Thanks on behalf of the ${member.guild.name} Staff team**`)
}
}


else {


let av = member.user.avatarURL();



      

   let welcomeembed = new Discord.MessageEmbed()
   .setThumbnail(av)
   .setColor('BLUE')
   
   .setAuthor(member.user.tag, member.user.avatarURL())
   .setTitle(`Welcome ${member.user.username}#${member.user.discriminator}`)
   .addFields(
       {name: `Welcome message`, value: `Welcome to ${member.guild.name}, Please read the rules in <#760604491820302426>, If you have any questions DM an online staff member, Here you can discuss urban explorations, share your cool photos in either <#764430308274864168> or <#760984149405728808>, Get some roles in <#795836152686575686> You can discuss any topic as long as they follow server rules, Have fun!`},
    {name: `Position`, value: `${member.guild.memberCount}`},
    {name: `User mention`, value: `<@${member.user.id}>`},
    {name: `User id`, value: `${member.user.id}`}
   )

   let welcomeping = db.get(`welcomeping_${member.guild.id}`)
   let welcomesetting = db.get(`welcome_${member.guild.id}`)
   if(welcomeping === null){

    if(welcomesetting !== null){
        return;
    }
 await channel.send("<@&778010298618871898>")
   }

if(welcomesetting === null){
    await channel.send(welcomeembed)
   await member.send(`**Welcome to ${member.guild.name} Make sure to complete the screening and verify in <#760610183087915061>, If you have any questitons then DM this bot to open a modmail, Thanks on behalf of the ${member.guild.name} Staff team**`).catch(e => {console.log(e)})


if(welcomesetting !== null){
member.send(`**Welcome to ${member.guild.name} Make sure to complete the screening and verify in <#760610183087915061>, If you have any questitons then DM this bot to open a modmail, Thanks on behalf of the ${member.guild.name} Staff team**`).catch(e => {console.log(e)})
}
}
}
}