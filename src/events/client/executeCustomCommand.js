const axios = require('axios');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.content.charAt(0) === '#') {
            let messageContent = message.content;
            messageContent = messageContent.substring(1);

            axios.post(process.env.app_url + 'api/command/fetch', {
                name: messageContent
            }).then(response => {
                message.channel.send(`${response.data}`);
            })
        }
    }
}