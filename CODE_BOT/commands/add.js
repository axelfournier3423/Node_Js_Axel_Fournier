const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Ajoute des informations à la base de données.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('users')
                .setDescription('Ajoute un utilisateur à la base de données.')
                .addStringOption(option =>
                    option.setName('name')
                        .setDescription('Le nom de l\'utilisateur à ajouter.')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('items')
                .setDescription('Ajoute un item à la base de données.')
                .addStringOption(option =>
                    option.setName('title')
                        .setDescription('Le titre du film à ajouter.')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('watchlist')
                .setDescription('Ajoute une watchlist à la base de données.')
                .addIntegerOption(option =>
                    option.setName('userid')
                        .setDescription('L\'identifiant de l\'utilisateur.')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('title')
                        .setDescription('Le titre de la watchlist.')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('itemtowatchlist')
                .setDescription('Ajoute un item à une watchlist.')
                .addIntegerOption(option =>
                    option.setName('userid')
                        .setDescription('L\'identifiant de l\'utilisateur.')
                        .setRequired(true))
                .addIntegerOption(option =>
                    option.setName('watchlistid')
                        .setDescription('L\'identifiant de la watchlist.')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('title')
                        .setDescription('Le titre du film à ajouter.')
                        .setRequired(true))),
    async execute(interaction) {
        try {
            const subcommand = interaction.options.getSubcommand();

            if (subcommand === 'users') {
                const name = interaction.options.getString('name');
                const response = await axios.post('http://localhost:3000/users/add', { name: name });
                await interaction.reply(response.data.message);
            } else if (subcommand === 'items') {
                const title = interaction.options.getString('title');
                const response = await axios.post('http://localhost:3000/items/add', { titre: title });
                await interaction.reply(response.data.message);
            } else if (subcommand === 'watchlist') {
                const userId = interaction.options.getInteger('userid'); 
                const title = interaction.options.getString('title');
                console.log(userId, title);
                const response = await axios.post('http://localhost:3000/watchlist/add', { userId: userId, title: title });
                await interaction.reply(response.data.message);
            } else if (subcommand === 'itemtowatchlist') {
                const userId = interaction.options.getInteger('userid'); 
                const watchlistId = interaction.options.getInteger('watchlistid'); 
                const title = interaction.options.getString('title');
                console.log(userId, watchlistId, title);
                const response = await axios.patch('http://localhost:3000/watchlist/additem', { userId: userId, id: watchlistId, titre: title });
                if (response.data.error) {
                    await interaction.reply(response.data.error);
                } else {
                    await interaction.reply(response.data.message);
                }
            }
        } catch (error) {
            console.error(error);
            await interaction.reply(error.response?.data?.error || 'Une erreur est survenue lors de l\'ajout.');
        }
    }
};
