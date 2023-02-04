const { EmbedBuilder, MessageType } = require('discord.js');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        let rng = Math.floor(Math.random() * 3);
            
        if (message.content.toLowerCase() == 'who is shimon') {
            let shimonUrl = 'https://media.discordapp.net/attachments/999165825741226047/1060490864230674462/image.png?width=505&height=676';
            const shimonEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('This is shimon')
                .setAuthor({ name: 'Shimon', iconURL: shimonUrl, url: shimonUrl })
                .setDescription('He is the goat')
                .setThumbnail(shimonUrl)
                .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
                .setImage(shimonUrl)
                .setFooter({ text: 'Goated', iconURL: shimonUrl });
        
            if (rng == 1) {
                let rngMessage = Math.floor(Math.random() * 4);
                switch (rngMessage) {
                    case 0:
                        message.channel.send('kill yourself');
                        break;
                    case 1:
                        message.channel.send('ur the pussy to my pocket');
                        break;
                    case 2:
                        message.channel.send('CANT BE HOMELESS IF U DONT OWN A HOUSE HAHAHAAHAHAJA U HAVE FUCKKING CANCER');
                        break;
                    case 3:
                        message.channel.send('ur the king gong of potato');
                        break;
                    case 4:
                        message.channel.send('U have cancer im afraid');
                        break;
                }
            }
            else {
                try {
                    message.channel.send({embeds: [shimonEmbed]})
                } catch (e) {
                    console.log(e);
                    message.channel.send('bot crashed fucking retard');
                }
            }
        }
        else if (message.content.toLowerCase() === 'who is garry') {
            let garryUrl = 'https://cdn.discordapp.com/attachments/999165825741226047/1069877639604604958/DA20D137-66E2-49FE-9F1B-77D0F5C399E9.jpg';
            const garryEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('This is gary')
                .setAuthor({ name: 'gry', iconURL: garryUrl, url: garryUrl })
                .setDescription('He is the retard')
                .setThumbnail(garryUrl)
                .addFields({ name: 'Inline field title', value: 'Some snail here', inline: true })
                .setImage(garryUrl)
                .setFooter({ text: 'rtdrarded', iconURL: garryUrl });

            // if (rng == 1) {
            //     const messages = await message.channel.messages.fetch({limit: 100});
            // }
            // else {
            //     try {
            //         message.channel.send({embeds: [shimonEmbed]})
            //     } catch (e) {
            //         console.log(e);
            //         message.channel.send('bot crashed fucking retard');
            //     }
            // }

            try {
                message.channel.send({embeds: [garryEmbed]})
            } catch (e) {
                console.log(e);
                message.channel.send('bot crashed fucking retard');
            }
        }
    }
}