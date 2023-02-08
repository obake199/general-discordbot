module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} is now online.`);
        if (process.env.CHANNEL_ID)
            client.channels.fetch(process.env.CHANNEL_ID).then(channel => {
                channel.send('Fixed bugs');
            }).catch(e => {
                console.log(`Message not sent. Error: ${e.message}`);
            })
    }
}