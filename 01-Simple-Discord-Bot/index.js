const { Client } = require('discord.js');
const client = new Client();

client.login('CLIENT_SECRET');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  if (message.content.startsWith('ping')) {
    message.channel.send('pong!');
  }
});