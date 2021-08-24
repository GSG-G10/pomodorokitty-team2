const joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(5)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')).require(),
});

module.exports = schema;