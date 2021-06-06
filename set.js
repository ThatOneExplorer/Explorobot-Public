const db = require('quick.db')
const Discord = require('discord.js')

const { prefix } = require('./config.json');


module.exports = {
    name: 'set',
    description: 'sets an object',
    async execute(message){

    
        let botbans =  db.get(`botbans_${message.guild.id}_${message.author.id}`)


        if(botbans !== null){
            let botbannedembed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} An Error Has Occured`)
            .addFields(
                {name: "You are bot banned!", value: `You are banned from using the bot, please DM a staff member to appeal this ban`}
            )
            return message.channel.send(botbannedembed)
            }

            let RolePermsEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`An Error Has Occured`) 
            .addFields(
                { name: 'Missing permissions ', value:`You dont have permission to do this`}
            )

if(!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send(RolePermsEmbed)

      

        let appeallink = db.get(`appeallink_${message.guild.id}`)
        let muteroleid = await db.get(`muterole_${message.guild.id}`)
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
        const setname = args[1]
      let role = message.mentions.roles.first();




     let nosetname = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`There was an error!`)
.addFields(
    {name: `!Set`, value: `appeal / mrole / welcome / wping / verification`}
)
if (!setname){
    return message.channel.send(nosetname)
}
        let link = args.slice(2).join(' ');
        console.log(`set command has been used in ${message.guild.name} by ${message.author.username}`);

        if (setname ===('appeal')){

let nolink = new Discord.MessageEmbed()
.setColor('RED')

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`There was an error!`)
.addFields(
    {name: `No link given`, value: `Please supply me with a link!`}
)

if(!link){
    return message.channel.send(nolink)
}
            if(appeallink === null){
                db.set(`appeallink_${message.guild.id}`, link)

                
        let setlink = new Discord.MessageEmbed
        .setColor('GREEN')  
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`Appeal link set!`)
        .addFields(
            {name: `Set to`, value: `${link}`}
        )
        message.channel.send(setlink)
            }

            else if(appeallink !== null){
                db.delete(`appeallink_${message.guild.id}`)
                db.set(`appeallink_${message.guild.id}`, link)

                
        let setlink = new Discord.MessageEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('GREEN')
        .setTitle(`Appeal link set!`)
        .addFields(
            {name: `Set to`, value: `${link}`}
        )
        message.channel.send(setlink)
            }
        }

        if(setname ===(`mrole`)){
       if(!role){

           let norole = new Discord.MessageEmbed()
           .setColor('RED')
           
        .setAuthor(message.author.tag, message.author.avatarURL())
           .setTitle(`An Error Has Occured`)
           .addFields(
               {name: `No role given`, value: `Please mention a role!`}
           )
         return message.channel.send(norole)
           }
if(muteroleid === null){

db.set(`muterole_${message.guild.id}`, role.id)

let mroleset = new Discord.MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL())
.setColor('GREEN')
.setTitle(`Mute Role set!`)
.addFields(
    {name: `Set to`, value: `${role}`}
)
message.channel.send(mroleset)
}

else if(muteroleid !== null){
    db.delete(`muterole_${message.guild.id}`)
    db.set(`muterole_${message.guild.id}`, role.id)

    let mroleset = new Discord.MessageEmbed()
.setColor('GREEN')

.setAuthor(message.author.tag, message.author.avatarURL())
.setTitle(`Mute Role set!`)
.addFields(
    {name: `Set to`, value: `${role}`}
)
message.channel.send(mroleset)


}

        }


if(setname === ("welcome")){

    let setting =  args.slice(2).join(' ').toLowerCase();

    if(!setting){
       let nosetting = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL())
       .setTitle("An Error Has Occured")
       .setColor("RED")
       .addFields(
           {name: "Invalid Option", value: `Please use Either On or Off`}
           
       )
     
        message.channel.send(nosetting)

    }

    
    else if(setting ===("on")){
      await db.delete(`welcome_${message.guild.id}`)

      let welcomeon = new Discord.MessageEmbed()
      
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle(`Enabled the Welcome Message!`)
    .setColor("GREEN")
    .addFields({
        name:`Enabled the welcome message for ${message.guild.name}`, value: `Enabled By ${message.author.tag}`
    })
    await message.channel.send(welcomeon)
    }

    else if(setting ===("off")){
        await db.set(`welcome_${message.guild.id}`, true)
        let welcomeoff = new Discord.MessageEmbed()        
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle("Disabled the Welcome Messsage!")
    .setColor("ORANGE")
    .addFields({
        name: `Disabled the welcome message for ${message.guild.name}`, value: `Disabled By ${message.author.tag}`
    
    })
await message.channel.send(welcomeoff)

    };



}

if(setname ===("wping")){
    let setting =  args.slice(2).join(' ').toLowerCase();


    if(!setting){
        let nosetting = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle("An Error Has Occured")
        .setColor("RED")
        .addFields(
            {name: "Invalid Option", value: `Please use Either On or Off`}
            
        )
      
         message.channel.send(nosetting)
    }

    else if(setting ===("on")){
        await db.delete(`welcomeping_${message.guild.id}`)
  
        let welcomeon = new Discord.MessageEmbed()
        
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle(`Enabled the Welcome Ping!`)
      .setColor("GREEN")
      .addFields({
          name:`Enabled the welcome ping for ${message.guild.name}`, value: `Enabled By ${message.author.tag}`
      })
      await message.channel.send(welcomeon)
      }
  
      else if(setting ===("off")){
          await db.set(`welcomeping_${message.guild.id}`, true)
          let welcomeoff = new Discord.MessageEmbed()        
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle("Disabled the Welcome ping!")
      .setColor("ORANGE")
      .addFields({
          name: `Disabled the welcome ping for ${message.guild.name}`, value: `Disabled By ${message.author.tag}`
      
      })
  await message.channel.send(welcomeoff)
  
      };

}

if(setname ===(`verification`)){

    let setting =  args.slice(2).join(' ').toLowerCase();

    if(!setting){
     let nosetting = new Discord.MessageEmbed()
     .setAuthor(message.author.tag, message.author.avatarURL())
     .setTitle(`An Error Has Occurred`)
     .setColor("RED")
       .addFields(
           {name: "Invalid Option", value: `Please use Either On or Off`}
           
       )

       return message.channel.send(nosetting)
    }
    
    else if (setting === ("off")){
        await db.set(`verification_${message.guild.id}`, true)
        let verificationoff = new Discord.MessageEmbed()        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle("Disabled Verification! ")
        .setColor("ORANGE")
        .addFields({
            name: `Disabled reaction-role verification for ${message.guild.name}`, value: `Disabled By ${message.author.tag}`
        
        })

     return message.channel.send(verificationoff)
    }

    else if (setting === ("on")){
        await db.delete(`verification_${message.guild.id}`)
        let verificationon = new Discord.MessageEmbed()        
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle("Enabled Verification! ")
        .setColor("YELLOW")
        .addFields({
            name: `Enabled reaction-role verification for ${message.guild.name}`, value: `Disabled By ${message.author.tag}`
        
        })

     return message.channel.send(verificationon)
    }

}
}
}

