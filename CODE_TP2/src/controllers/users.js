const { findUserInDB, createUserInDB, updateUserInDB, deleteUserInDB } = require('../repositories/users.js');

async function findUser(req, res) {
    try {
        const userId = req.query.userId;
        const user = await findUserInDB(userId);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
}

async function createUser(req, res) {
    try {
        const userData = req.body;
        const newUser = await createUserInDB(userData);

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
}

async function updateUser(req, res) {
    try {
        const userId = req.params.userId;
        const updatedUserData = req.body;
        const updatedUser = await updateUserInDB(userId, updatedUserData);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
}

async function deleteUser(req, res) {
    try {
        const userId = req.params.userId;
        await deleteUserInDB(userId);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
}

module.exports = {
    findUser,
    createUser,
    updateUser,
    deleteUser
};
