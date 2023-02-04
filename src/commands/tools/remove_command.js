const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js')
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('removecmd')
        .setDescription('Remove custom command.')
        .addStringOption(option => {
            return option
                .setName('name')
                .setDescription('Name of the command')
                .setRequired(true)
        }),
        
        async execute(interaction, client) {
            await interaction.deferReply({
                fetchReply: true
            });

            const replyMessage = (reply, interaction) => {
                interaction.editReply({
                    content: reply ?? '404 error'
                });
            }
            
            axios.post(process.env.APP_URL + 'api/command/remove', {
                name: interaction.options.getString('name')
            })
                .then(response => {
                    console.log(response);
                    replyMessage(response.data, interaction);
                })
        }
}