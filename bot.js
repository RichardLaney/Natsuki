const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () =>{
	console.log(`Bot is ready! ${bot.user.username}`);
	bot.user.setStatus('dnd')
	bot.user.setPresence({ game: { name: 'Doki Doki Literature Club', type: 0 } });
});
bot.login(botSettings.token);
