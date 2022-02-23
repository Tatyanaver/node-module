const { Router } = require('express')
const usersRouter = require('./usersRouter')
const loginRouter = require('./loginRouter')
const errorRouter = require('./errorRouter')
const signInRouter = require('./signInRouter')

const routes = Router()
routes.use('/users', usersRouter);
routes.use('/login', loginRouter);
routes.use('/error', errorRouter);
routes.use('/signIn', signInRouter);

routes.use((req, res) => {
    res.render('pageNotFound')
})

module.exports = routes