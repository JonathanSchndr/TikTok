import { Client, MessageEmbed } from 'discord.js';
import fetch from 'node-fetch';
const client = new Client();

client.login('CLIENT_SECRET');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  if (message.content.startsWith('MM:') && message.content.endsWith('?')) {
    fetch('https://yesno.wtf/api/').then((data) => {
      return data.json()
    }).then((data) => {
      const embed = new MessageEmbed()
        .setTitle(message.content.substring(3))
        .setDescription(data.answer)
        .setImage(data.image)
        .setFooter("Gefragt von " + message.author.username)
      message.channel.send(embed)
    })
  }
});