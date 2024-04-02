const { crud } = require('./head');

let userIdCounter = 0;

async function addUser(req, res, next) {
    try {
        const userId = Date.now() + userIdCounter++;

        req.body.userId = userId;

        const result = await crud.insertOne('users', req.body);

        const responseMessage = `L'utilisateur a été ajouté avec succès avec l'ID : ${userId}`;

        result.message = responseMessage;

        res.json(result);
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = {
    addUser
};
