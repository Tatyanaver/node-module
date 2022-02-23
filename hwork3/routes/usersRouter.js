const { Router } = require('express')
const users = require('../db/users')
const userController = require('../controllers/userController')

const usersRouter = Router();

usersRouter.get('/', userController.renderUsers);

usersRouter.get('/:userId', userController.getUserById);


module.exports = usersRouter