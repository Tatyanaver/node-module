const { Router } = require('express')
const users = require('../db/users')
let error = require('../db/error')
const SignInController = require('../controllers/signInController')
const signInEmailMiddleware = require('../middleware/signInEmailExist')

const signInRouter = Router();

signInRouter.get('/', SignInController.renderSignInOfUser)
signInRouter.post('/', signInEmailMiddleware, SignInController.signInEmailExist)

module.exports = signInRouter