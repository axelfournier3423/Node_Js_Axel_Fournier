const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Affiche des informations sur l\'utilisateur qui a exécuté la commande.'),
    async execute(interaction) {
        const user = interaction.user;
        const member = interaction.guild.members.cache.get(user.id);
        const joinDate = member.joinedAt;

        await interaction.reply(`Nom de l'utilisateur : ${user.username}\nDate d'arrivée sur le serveur : ${joinDate}`);
    },
};
