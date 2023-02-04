module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`ready! ${client.user.tag} is online.`);
        client.channels.fetch('999165825741226047').then(channel => {
            channel.send('Changed custom command from $ to #');
        })
    }
}