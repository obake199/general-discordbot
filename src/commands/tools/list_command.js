const { SlashCommandBuilder } = require('discord.js')
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commands')
        .setDescription('List all commands.'),
    
        async execute(interaction, client) {
            const message = await interaction.deferReply({
                fetchReply: true
            });

            const replyMessage = (reply, interaction) => {  
                interaction.editReply({
                    content: reply ?? '404 error'
                });
            }
            
            axios.post(process.env.APP_URL + 'api/command/list', {
                test: true
            })
                .then(response => replyMessage(response.data, interaction))
                .catch(error => {
                    console.log(error);
                    replyMessage(error.message, interaction)
                }
            )
        }
}