const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js')
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('command')
        .setDescription('Create custom command.')
        .addStringOption(option => {
            return option
                .setName('name')
                .setDescription('Name of the command')
                .setRequired(true)
        })
        .addStringOption(option => {
            return option
                .setName('value')   
                .setDescription('Value of the command')
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
            
            axios.post(process.env.APP_URL + 'api/command/create', {
                name: interaction.options.getString('name'),
                value: interaction.options.getString('value')
            })
                .then(response => {
                    console.log(response);
                    replyMessage(response.data, interaction);
                })
        }
}