
module.exports = async (client) =>{
    const guild = client.guilds.cache.get('769657098077732894');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('798935565567131648');
        channel.setName(`Total Members: ${memberCount}`);

    }, 300000);
}