const express = require('express');

const router = express.Router();

const { notFound, serverError } = require('./contollers/errors');
const { login, signUp } = require('./contollers/authentication');
const { getTasks, insertTask, taskDone } = require('./contollers/tasks');
const loginPage = require('./contollers/loginPageController');
const signUpPage = require('./contollers/signUpPageController');

router.get('/tasks', getTasks);
router.post('/tasks', insertTask);
router.put('/tasks/:taskId/done', taskDone);
router.get('/login', loginPage);
router.get('/signUp', signUpPage);
router.post('/login', login);
router.post('/sign-up', signUp);

router.use(notFound);
router.use(serverError);

module.exports = router;
