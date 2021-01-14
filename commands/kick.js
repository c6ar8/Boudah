module.exports = {
    name: 'kick',
    description: "kick members",
    execute(message, args) {

        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            if(message.member.permissions.has("KICK_MEMBERS")){
                memberTarget.kick();
                message.channel.send(`User Has been Kicked`);
            }else{
                message.channel.send(`you dont have the permission to Kick`);
            }

        }else{
            message.channel.send(`you dont have the permission to Kick`);
        }

    }
}