const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./commands/config.json');
const { token } = require("./token.json")
const { ownerID } = require("./owners.json")
let db = require('quick.db')
const path = require("path");
const webhook = require("webhook-discord")
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
 const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}





client.once('ready', () => {


	let guilds = client.guilds.cache.map(guild => "Guild name" +  "    " + "     " + guild.name + "    " + "     " + `Guild id` +  "    " + "     " + guild.id)
	console.log(guilds)
	
	const server = client.guilds.cache.find(g => g.id === '760604167235829800');
	const membercount = server.channels.cache.find(ch => ch.id === '850524264171044874');
    membercount.setName(`Members: ${server.members.cache.filter(member => !member.user.bot).size} `)

	


client.user.setActivity('http://linktree.com/thatoneexplorer')



	console.log(`Connected to discord, Successfully logged as ${client.user.username}`)
});

client.on("message", async message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	   
	let botbans =  db.get(`botbans_${message.guild.id}_${message.author.id}`)


	if(botbans !== null){
		let botbannedembed = new Discord.MessageEmbed()
		.setTitle(`${message.author.username} An Error Has Occured`)
		.addFields(
			{name: "You are bot banned!", value: `You are banned from using the bot, please DM a staff member to appeal this ban`}
		)
		return message.channel.send(botbannedembed)
		}

   else if (botbans === null){
	let commandindmembed = new Discord.MessageEmbed()
	.setColor('RED')
	.setTitle(`${message.author.username}, ERROR`)
	.addFields(
		{name: `Unabled to execute this command`, value: `Commands are un-executable via dms`}
	)

if(!message.guild)
return message.channel.send(commandindmembed)
const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
	const debugchannel = await message.client.channels.fetch("840574175876743218").catch(e => {console.log(`There was an error: ${e}`)});
	let messagelog = new Discord.MessageEmbed()
.setTitle(`Message logged from ${message.author.tag} || ${message.author.id}:`)
.setDescription(`${message.content}`)

.setColor("#e98df7")
debugchannel.send(messagelog)
    console.log(`${command} has been used in ${message.guild.name} by ${message.author.username}#${message.author.discriminator} (${message.author.id})`);
}
});

client.on('message', message => {


	if (message.content === '!welcome') {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return;
		}
		client.emit('guildMemberAdd', message.member);
	}
});


require("./handlers/eventHandler")(client);


const ReactionRole = require("reaction-role");
const system = new ReactionRole(token);

let option1 = system.createOption("✅", "760605036039766046");
let option2 = system.createOption("📷", "765340268835635231");
let option4 = system.createOption("💬", "778010298618871898");
let option5 = system.createOption("🇪🇺", "795836441078661140");
let option6 = system.createOption("🇺🇸", "795836370668355584");
let option7 = system.createOption("🇦🇺", "778528455565639731");
let option8 = system.createOption("🇰🇷", "795836587878383617");
let option9 = system.createOption("🇿🇦", "795836652005490698");
let option10 = system.createOption("🤝", "805937083440037898");
let ExplorobotUpdates = system.createOption("🤖","851160946483396648");
let he = system.createOption("♂️", "796577809866817556");
let she = system.createOption("♀️", "796577966732607568");
let they = system.createOption("👤", "796578015941361684");
system.createMessage("760613190077120523", "760610183087915061", 1, null, option1);
system.createMessage("805938712952700996", "795836152686575686", 1, null, option2);
system.createMessage("805938952955363330", "795836152686575686", 1, null, option4);
system.createMessage("795841679197732938", "795836152686575686", 1, null, option5, option6, option7, option8, option9);
system.createMessage("796582046708924447", "795836152686575686", 3, null, he, she, they);
system.createMessage("805939141879005184", "795836152686575686", 1, null, option10);
system.createMessage("851160493397770240", "795836152686575686", 1, null, ExplorobotUpdates);
system.init();
  
  
  



function clean(text) {
	if (typeof(text) === "string")
	  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
  }

  client.on("message", async message =>{

	const args = message.content.split(" ").slice(1);

if (message.content === (prefix + "restart")) {
	  if(message.author.id !== ownerID)
		  return;
try{

 await message.channel.send("Resarting!")
await console.log(`Restarted by ${message.author.username}`)
return process.exit();
}
catch (err) {
	message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}
});


client.on("message", async message => {
	const args = message.content.split(" ").slice(1);
   
	if (message.content.startsWith(prefix + "eval")) {
	  if(message.author.id !== ownerID) return;
	  try {
		const code = args.join(" ");
		let evaled = eval(code);
   
		if (typeof evaled !== "string")
		  evaled = require("util").inspect(evaled);
   
		message.channel.send(clean(evaled), {code:"xl"});
	  } catch (err) {
		message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	  }
	}
  });

  client.on("message", async message => {
 if(!message.guild){
	 return;
 }

 else {
	let isafk = db.get(`isafk_${message.author.id}_${message.guild.id}`)


	let afkreason = db.get(`afkreason_${message.author.id}`)


if(isafk === null){
	return;
}

else if(isafk !== null){

	let welcomeback = new Discord.MessageEmbed()
	.setTitle(`${message.author.tag}, Welcome Back!`)
	.setFooter(`I have cleared your AFK status for you`)
	.setColor("PURPLE")

	await db.delete(`isafk_${message.author.id}_${message.guild.id}`)
    if(afkreason !== null){
		await db.delete(`afkreason_${message.author.id}`)
	}

	await message.reply(welcomeback)
}
 }
	
  })

client.on("message", async message => {
	let member = message.mentions.users.first();
  
if(!member){
return;
}

else {
  let isafk = db.get(`isafk_${member.id}_${message.guild.id}`)


  let afkreason = db.get(`afkreason_${member.id}`)
  if(isafk === null){
	  return;
  }

  if(isafk !== null){
    let isafkembed = new Discord.MessageEmbed()
.setTitle(`Woah buddy, ${member.tag} is AFK, Don't disturb them`)
.addFields(
  {name: `Reason:`, value: `${afkreason}`}
)
.setColor("BLUE")

message.channel.send(isafkembed)
}
}
  
})


client.login(token);