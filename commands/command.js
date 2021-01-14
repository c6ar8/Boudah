module.exports = {
    name: 'command',
    description: "embeds!",
    execute(message, args, Discord) {

        if (message.member.roles.cache.has('769659686659293205')) {
            message.channel.send('pong!')
        } else {
            message.channel.send('لايوجد لديك صلاحيات');
        }
    }
}