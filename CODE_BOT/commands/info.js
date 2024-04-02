const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Affiche des informations sur l\'utilisateur ou le serveur.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Affiche des informations sur un utilisateur spécifique ou sur l\'utilisateur actuel.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Affiche des informations sur le serveur.')),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'user') {
            let targetUser = interaction.options.getUser('utilisateur');
            if (!targetUser) targetUser = interaction.user;
            const member = interaction.guild.members.cache.get(targetUser.id);
            const joinDate = member.joinedAt;

            await interaction.reply(`Nom de l'utilisateur : ${targetUser.username}\nDate d'arrivée sur le serveur : ${joinDate}`);
        } else if (interaction.options.getSubcommand() === 'server') {
            const guild = interaction.guild;
            const memberCount = guild.memberCount;

            await interaction.reply(`Nom du serveur : ${guild.name}\nNombre de membres : ${memberCount}`);
        }
    }
};