const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Recherche un terme sur Urban Dictionary.')
        .addStringOption(option =>
            option.setName('terme')
                .setDescription('Le terme à rechercher sur Urban Dictionary.')
                .setRequired(true)),
    async execute(interaction) {
        try {
            const terme = interaction.options.getString('terme');
            const response = await fetch(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(terme)}`);
            const data = await response.json();

            if (data.list && data.list.length > 0) {
                const definition = data.list[0].definition;
                await interaction.reply(`**${terme}** : ${definition}`);
            } else {
                await interaction.reply(`Aucune définition trouvée pour **${terme}** sur Urban Dictionary.`);
            }
        } catch (error) {
            console.error('Erreur lors de la recherche sur Urban Dictionary :', error);
            await interaction.reply('Une erreur est survenue lors de la recherche sur Urban Dictionary.');
        }
    }
};