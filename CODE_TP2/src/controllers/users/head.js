const crud = require('../../services/db/crud')
const { userSchema } = require('../../services/db/validationSchemas')
var Validator = require('jsonschema').Validator;
var v = new Validator();

function validateUser(user) {
    return v.validate(user, userSchema)
}

module.exports = {
    crud,
    validateUser
}