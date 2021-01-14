module.exports = {
    name: 'clear',
    description: "clear messages!",
    async execute(message, args) {

        if (!args[0]) return message.reply("please enter the Amount of messages that you want to clear") ;
        if(isNaN(args[0])) return message.reply("please enter a real number") ;

        if(args[0] > 100) return message.reply("you can't clear more than 100 messages") ;
        if(args[0] < 1) return message.reply("you must clear at least 1 message") ;
     
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {

            message.channel.bulkDelete(messages);

        });
    }
}