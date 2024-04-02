const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Réponse : Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        await interaction.followUp('Pong again!');
    },
};
