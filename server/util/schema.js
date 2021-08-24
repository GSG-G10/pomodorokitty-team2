const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(5)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')).require(),
});

const signupSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

  confirmdPassword: Joi.ref('password'),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

});

module.exports = { loginSchema, signupSchema };
