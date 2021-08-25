const Joi = require('joi');
const { loginQuery, signUpQuery } = require('../database/quieres');
const { loginSchema, signupSchema } = require('../util/schema');

const login = (req, res) => {
    const { username, password } = req.body;

    // server side validation
    loginSchema.validateAsync({ username, password })
        .then((result) => console.log(result))
        .catch((err) => {
            console.log(err);
            res.json('your credentials does not match our records');
        });

    loginQuery({ username, password })
        .then((data) => {
            console.log(data);
        })
        .catch(console.log);
};

const signUp = (req, res) => {
    const {
        username,
        email,
        password,
        confirmdPassword,
    } = req.body;

    // server side validation
    signupSchema.validateAsync({
            username,
            password,
            confirmdPassword,
            email,
        }, )
        .then((result) => console.log(result))
        .catch((err) => {
            console.log(err);
            res.json('your credentials does not match our records');
        });
    signUpQuery({
            username,
            email,
            password,
            confirmdPassword,
        })
        .then(console.log)
        .catch(console.log);
};

module.exports = {
    login,
    signUp,
};