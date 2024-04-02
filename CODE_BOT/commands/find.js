const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('find')
        .setDescription('Recherche des informations dans la base de données.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('users')
                .setDescription('Recherche des utilisateurs dans la base de données.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('items')
                .setDescription('Recherche des items dans la base de données.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('watchlist')
                .setDescription('Recherche les watchlists')),
    async execute(interaction) {
        try {
            const subcommand = interaction.options.getSubcommand();

            let apiUrl = '';
            let searchType = '';
            if (subcommand === 'users') {
                apiUrl = 'http://localhost:3000/users/find';
                searchType = 'Utilisateurs';
            } else if (subcommand === 'items') {
                apiUrl = 'http://localhost:3000/items/find';
                searchType = 'Items';
            } else if (subcommand === 'watchlist') {
                apiUrl = 'http://localhost:3000/watchlist/find';
                searchType = 'Watchlists';
            }

            const response = await axios.get(apiUrl);
            const data = response.data;

            let resultMessage = `**Liste des ${searchType}**\n\n`;
            if (Array.isArray(data) && data.length > 0) {
                data.forEach((result, index) => {
                    let formattedResult = '';
                    if (searchType === 'Utilisateurs') {
                        formattedResult = `**${result.name}** \n`;
                    } else if (searchType === 'Items') {
                        formattedResult = `**${result.titre}** \n Genre: ${result.genre} \n Année: ${result.annee} \n Réalisateur: ${result.realisateur} \n Durée: ${result.duration} \n `;
                    } else if (searchType === 'Watchlists') {
                        formattedResult = `**${result.title}** \n `;
                    }
                    resultMessage += `**------------------------------------------------------------** \n ${formattedResult}\n`;
                });
            } else {
                resultMessage += 'Aucun résultat trouvé.';
            }

            await interaction.reply(resultMessage);
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur est survenue lors de la recherche.');
        }
    }
};
