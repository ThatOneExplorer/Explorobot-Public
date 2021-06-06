const db = require('quick.db')
const Discord = require('discord.js')
const moment = require('moment')
const { relativeTimeRounding } = require('moment')
const prefix =  ("!")
module.exports = async message  => {
    
   

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const debugchannel = await message.client.channels.fetch("840574175876743218").catch(e => {console.log(`There was an error: ${e}`)});
if(message.author.id == ('760607345217896448')){
    return;
}

console.log(`Message logged from ${message.author.tag} || ${message.author.id}: ${message.content}`)
let messagelog = new Discord.MessageEmbed()
.setTitle(`Message logged from ${message.author.tag} || ${message.author.id}:`)
.setDescription(`${message.content}`)

.setColor("#e98df7")
debugchannel.send(messagelog)
	if(!message.guild){
 
       
        const guild = await message.client.guilds.fetch("760604167235829800").catch(e => {console.log(`There was an error: ${e}`)});
  let check =  await db.get(`openthreads_${message.author.id}`)
  let threadid = await db.get(`threadid_${message.author.id}`)
  let userid = await db.get(`userticket_${message.author.id}`)


  let botbans =  db.get(`botbans_${guild.id}_${message.author.id}`)


  if(botbans !== null ){
      let botbannedembed = new Discord.MessageEmbed()
      
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle(`An Error Has Occured`)
      .addFields(
          {name: "You are bot banned!", value: `You are banned from using the bot, please DM a staff member to appeal this ban`}
      )
      return message.channel.send(botbannedembed)
      }



if(check === null){
     await message.reply("Creating support ticket now!")


     const threadcat = await message.client.channels.fetch("807044784173613116").catch(e => {console.log(`There was an error: ${e}`)});

const ticket = await guild.channels.create(`${message.author.id}`, {parent: threadcat}).catch(e => {console.log(`There was an error: ${e}`)});


  await db.set(`openthreads_${message.author.id}`, true)
  await db.set(`userticket_${message.author.id}`, message.author.id)
console.log(ticket)
  await db.set(`threadid_${message.author.id}`, ticket.id)
 
console.log(threadcat.name)
console.log(ticket.name)


let ticketembed = new Discord.MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`Modmail Incoming!`)
.addFields(
    {name: `User:`, value: `${message.author.username}#${message.author.discriminator}`},
    {name: `UserID:`, value:`${message.author.id}`}
)

await ticket.send(`@everyone`).catch(e => {console.log(`There was an error: ${e}`)});
await ticket.send(ticketembed).catch(e => {console.log(`There was an error: ${e}`)});
ticket.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - ${message.content}`).catch(e => {console.log(`There was an error: ${e}`)});
}

else if(check !== null){
    const athread = await message.client.channels.fetch(threadid).catch(e => {console.log(`There was an error: ${e}`)});
    
  
    if(!athread){
        return;
    }
     return athread.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - ${message.content}`).catch(e => {console.log(`There was an error: ${e}`)});
  
  }


  }

  

   if(message.channel.parentID === ("807044784173613116")){

    if(message.content === prefix + "list"){
      let snippetlist = new Discord.MessageEmbed()
      
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle("List of Support Commands")
      .addFields(
        {name: (prefix) + "hello", value: `Hello there! You have successfully reached ${message.guild.name} Staff team! I'm ${message.author.username}#${message.author.discriminator} from the staff team, How can i assist you?`},
        {name: (prefix) + "mod", value: `To get mod you must apply when applications are open, These will be announced in <#760606779163541537>, We don't accept direct requests unless noted otherwise,`},
        {name: (prefix) + "verify", value: `We are sorry too hear about the verificatiton issue, Make sure too verify that you select the box at the bottom of the welcome screen saying you read and agree to these rules, Then go into <#760610183087915061> and react with the Checkmark (✅) in order to get access to the server, If you are still facing trouble let us know so we can further assist you and manually add the role.`},
        {name: (prefix) + "close", value: "closes the thread"}
      )
      .setColor("BLUE")

      message.channel.send(snippetlist)
    }

    if(message.content === prefix + "mod"){
        
    const ticketuser =  message.client.users.cache.get(message.channel.name)

message.delete().catch(O_o=>{}); 
 message.channel.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - To get mod you must apply when applications are open, These will be announced in <#760606779163541537>, We don't accept direct requests unless noted otherwise, `).catch(e => {console.log(`There was an error: ${e}`)});
  ticketuser.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - To get mod you must apply when applications are open, These will be announced in <#760606779163541537>, We don't accept direct requests unless noted otherwise, `).catch(e => {console.log(`There was an error: ${e}`)});
    }
      

   if(message.content === prefix + "hello"){
       
    const ticketuser =  message.client.users.cache.get(message.channel.name)
    message.delete().catch(O_o=>{}); 
    message.channel.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - Hello there! You have successfully reached ${message.guild.name} Staff team! I'm ${message.author.username}#${message.author.discriminator} from the staff team, How can i assist you? `).catch(e => {console.log(`There was an error: ${e}`)});
   ticketuser.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - Hello there! You have successfully reached ${message.guild.name} Staff team! I'm ${message.author.username}#${message.author.discriminator} from the staff team, How can i assist you? `).catch(e => {console.log(`There was an error: ${e}`)});
   }

   
   if(message.content === prefix + "verify"){
       
    const ticketuser =  message.client.users.cache.get(message.channel.name)
    message.delete().catch(O_o=>{}); 
    message.channel.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - We are sorry too hear about the verificatiton issue, Make sure too verify that you select the box at the bottom of the welcome screen saying you read and agree to these rules, Then go into <#760610183087915061> and react with the Checkmark (✅) in order to get access to the server, If you are still facing trouble let us know so we can further assist you and manually add the role.`).catch(e => {console.log(`There was an error: ${e}`)});
    ticketuser.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - We are sorry too hear about the verificatiton issue, Make sure too verify that you select the box at the bottom of the welcome screen saying you read and agree to these rules, Then go into <#760610183087915061> and react with the Checkmark (✅) in order to get access to the server, If you are still facing trouble let us know so we can further assist you and manually add the role.`).catch(e => {console.log(`There was an error: ${e}`)});
   }
    if(message.content === prefix + "close"){
        
    const ticketuser =  message.client.users.cache.get(message.channel.name)

      await message.channel.send(`Closing this thread in 5 seconds!`).catch(e => {console.log(`There was an error: ${e}`)});
      setTimeout(() =>{
          

         db.delete(`openthreads_${ticketuser.id}`)
         db.delete(`userticket_${ticketuser.id}`)
      db.delete(`threadid_${ticketuser.id}`)
        
 ticketuser.send(`This thread has now been closed! Feel free to reopen another thread if you require more assistance`).catch(e => {console.log(`There was an error: ${e}`)});

 message.channel.delete();


      }, 5000)

    }
    
    if(message.content.startsWith("!reply")){
        
    const ticketuser =  message.client.users.cache.get(message.channel.name)
    let messagereplything = args.slice(1).join(' ');

    message.delete().catch(O_o=>{}); 

    ticketuser.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - ${messagereplything}`).catch(e => {console.log(`There was an error: ${e}`)});

    
    message.channel.send(`**FROM: ${message.author.username}#${message.author.discriminator}** - ${messagereplything}`).catch(e => {console.log(`There was an error: ${e}`)});
    }
  }
    

           if(message.channel.id == "830284548243587102")
   {
     if(message.content === ("h")){
       return;
     }
  if(message.content !==("h"))
  message.channel.messages.fetch(`${message.id}`).then(message => message.delete())

  const noh = await message.reply("Only h's, Nothing else dipshit")
  
  setTimeout(function(){
noh.delete();

  }, (3000)); 
}


const { censor} = require('./censor.json');
   
  

    const lm = message.content.toLowerCase();

const includedBadWord = censor.some(
                    (element) => lm.indexOf(element) !== -1
);

if(!message.guild){
    return;
}


const censoralert = await message.client.channels.fetch("804872134643810324").catch(e => {console.log(`There was an error: ${e}`)});

if (!includedBadWord)
    return;

    if(message.member.hasPermission("MANAGE_MESSAGES"))
    return;


let alert = new Discord.MessageEmbed()
.setTitle("Censor list has been triggered!")
.addFields(
    
    {name: `Message author`, value: `${message.author.username}#${message.author.discriminator} ${message.author.id}`},
    {name: `Message content`, value: `${message.content}`},
)
.setFooter(`Please decide on a punishment for this person <3`)





 if (includedBadWord){
        
         
      await censoralert.send(alert).catch(e => {console.log(`There was an error: ${e}`)})
        message.delete().catch(e => {console.log(`There was an error: ${e}`)})


}


}
