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
	if (msg.content === 'pog') {
		msg.reply('poggeres');	
	}
});

client.login('Nzg5OTMyMjc2NDc3MDY3Mjg0.X95Pwg.BlFZ4qmeDTPMEH-Rl5bV-XmsTUo');
