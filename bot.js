const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	
	bot.user.setStatus('dnd')
	
	bot.user.setGame('Doki Doki Literature Club')
});	
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
