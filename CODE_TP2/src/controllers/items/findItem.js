const { crud } = require('./head')

async function findItem(req, res, next) {
    try {
        const result = await crud.find('items', req.query)
        res.json(result)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    findItem
}