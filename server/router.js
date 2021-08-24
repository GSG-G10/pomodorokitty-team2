const express = require('express');

const router = express.Router();

const errorController = require('./contollers/errorController');
const authController = require('./contollers/authController');
const tasksController = require('./contollers/tasksController');

router.post('/login', authController.login);
router.post('/sign-up', authController.signUp);

router.get('/tasks', tasksController.getTasks);
router.post('/tasks', tasksController.insertTask);
router.put('/tasks/:taskId/done', tasksController.taskDone);

router.use(errorController.NotFound);
router.use(errorController.ServerError);

module.exports = router;
