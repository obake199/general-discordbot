const { ClientUser } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync('./src/commands');
        
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter(file => file.endsWith('.js'));

                const { commands, commandArray } = client;
                for (const file of commandFiles) {
                    const command = require(`../../commands/${folder}/${file}`);
                    commands.set(command.data.name, command);
                    commandArray.push(command.data.toJSON());
                    
                    console.log(`command: ${command.data.name} is set`);
                }
        }
        
        // connect to discord rest api
        const { CLIENT_ID, GUILD_ID } = process.env;

        const rest = new REST({
            version: "9"
        })
            .setToken(process.env.TOKEN)

        try {
            console.log('Started refreshing application slash commands.');
            await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
                body: client.commandArray
            });
        }
        catch (error) {
            console.error(error);
        }

    }
}