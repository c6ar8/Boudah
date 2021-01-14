const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$';

const fs = require('fs');

const memberCounter = require('./counters/member-counter.js');






client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {

    console.log('BoudahBot is Online!');
    memberCounter(client);

});

client.on('message', async(message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    }
    else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    }
    else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    }

    //else if (command == 'youtube' || command == 'القناة') {
    //    message.channel.send('https://www.youtube.com/c6ar8')
    //} else if (command == 'youtube') {
    //    message.channel.send('https://www.youtube.com/c6ar8')
    //}


});

client.login(process.env.token);
