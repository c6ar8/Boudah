
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const servers = {};

module.exports = {
    name: 'play',
    description: "play music",
    async execute(message, args) {


        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct Permission!');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct Permission!');
        if (!args.length) return message.channel.send('You need to type the song name');

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        var server = servers[message.guild.id];

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {

            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }



        const video = await videoFinder(args.join(' '));

        if (video) {
            while (server.queue[0]){
            const stream = ytdl(server.queue[0], { filter: 'audioonly' });
            server.dispatcher = connection.play(stream);
            server.queue.shift();
            server.dispatcher.on('finish', () => {
                    //voiceChannel.leave();
                });

            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        }
        }
        else {
            message.channel.send('No video results found');
        }



    }
}