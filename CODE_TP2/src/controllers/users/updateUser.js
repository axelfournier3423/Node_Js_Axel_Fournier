const { crud } = require('./head');

async function updateUser(req, res, next) {
    try {
        const userId = parseInt(req.params.userId, 10);
        const newName = req.body.name;

        

        const user = await crud.findOne('users', { userId: userId });
        if (!user) {
            res.status(400).json({ error: 'Utilisateur non trouvé' });
            return;
        }

        const updatedUser = await crud.updateOne('users', { userId: userId }, { $set: { name: newName } });

        res.status(200).json({ message: `Le nom de l'utilisateur avec l'ID ${userId} a été mis à jour avec succès.` });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = {
    updateUser
};
