const crud = require('../../services/db/crud')
const { itemSchema } = require('../../services/db/validationSchemas')
var Validator = require('jsonschema').Validator;
var v = new Validator();

function validateItem(item) {
    return v.validate(item, userSchema)
}

module.exports = {
    crud,
    validateItem
}