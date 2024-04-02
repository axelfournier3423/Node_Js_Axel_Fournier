const { crud } = require('./head')

async function findUser(req, res, next) {
    try {
        const result = await crud.find('users', req.query)
        res.json(result)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    findUser
}