const express = require('express');

const router = express.Router();

const errorController = require('./contollers/errorController');
const authController = require('./contollers/authController');

router.post('/login', authController.login);
router.post('/sign-up', authController.signUp);

router.use(errorController.NotFound);
router.use(errorController.ServerError);

module.exports = router;
