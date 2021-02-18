/*
 index.js

 @author : Jonathan Ingram
 Created : 12/19/2020
 Project : Discord bot 
*/


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) =>{
	if (msg.content === 'hey now') {
		msg.reply("you're an allstar");	
	}
});

client.login('put client key here'); //you should really put this in an .env file but its here for simplicity
