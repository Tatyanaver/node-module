const { Router } = require('express')
let error = require('../db/error')
const errorController = require('../controllers/errorController')

const errorRouter = Router();

errorRouter.get('/', errorController.renderError)

module.exports = errorRouter
