const crud = require('../../services/db/crud')
const { watchlistSchema } = require('../../services/db/validationSchemas')
var Validator = require('jsonschema').Validator;
var v = new Validator();

function validateUser(watchlist) {
    return v.validate(watchlist, watchlistSchema)
}

module.exports = {
    crud,
    validateUser
}