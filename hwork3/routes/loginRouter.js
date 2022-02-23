const { Router } = require('express')
const LoginController = require('../controllers/loginController')
const LoginMiddleware = require('../middleware/enterAllData')
const LoginEmailMiddleware = require('../middleware/isLoginEmailExist')


const loginRouter = Router();

loginRouter.get('/', LoginController.renderLoginOfUser)
loginRouter.post('/', LoginMiddleware, LoginEmailMiddleware, LoginController.enterLoginOfUser)

module.exports = loginRouter