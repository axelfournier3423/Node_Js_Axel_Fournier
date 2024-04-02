const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Modifie le nom d\'un utilisateur ou le statut d\'un item dans une watchlist.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Modifie le nom d\'un utilisateur.')
                .addIntegerOption(option =>
                    option.setName('userid')
                        .setDescription('L\'identifiant de l\'utilisateur à mettre à jour.')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('name')
                        .setDescription('Le nouveau nom de l\'utilisateur.')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('statut')
                .setDescription('Modifie le statut d\'un item dans une watchlist.')
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
                        .setDescription('Le titre du film à mettre à jour.')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('statut')
                        .setDescription('Le nouveau statut de l\'item.')
                        .setRequired(true))),
    async execute(interaction) {
        try {
            const subcommand = interaction.options.getSubcommand();

            if (subcommand === 'user') {
                const userId = interaction.options.getInteger('userid');
                const newName = interaction.options.getString('name');

                const response = await axios.patch(`http://localhost:3000/users/update/${userId}`, { name: newName });

                await interaction.reply(response.data.message);
            } else if (subcommand === 'statut') {
                const userId = interaction.options.getInteger('userid');
                const watchlistId = interaction.options.getInteger('watchlistid');
                const title = interaction.options.getString('title');
                const statut = interaction.options.getString('statut');


                const response = await axios.patch(`http://localhost:3000/watchlist/updatestate`, {
                    userId: userId,
                    id: watchlistId,
                    titre: title,
                    statut: statut
                });

                await interaction.reply(response.data.message);
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur est survenue lors de la mise à jour.');
        }
    }
};
