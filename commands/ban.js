module.exports = {
    name: 'ban',
    description: "ban members",
    execute(message, args) {

        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id); 
            if(message.member.permissions.has("BAN_MEMBERS")){
                memberTarget.ban();
                message.channel.send(`User Has been Banned`);
            }else{
                message.channel.send(`you dont have the permission to Ban`);
            }
            

        }else{
            message.channel.send(`you dont have the permission to Ban`);
        }
        
    }
}