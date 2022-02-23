const users = require("../db/users");
let error = require('../db/error')

class LoginController {
    renderLoginOfUser(req,res) {
        res.render('login')
    }
    enterLoginOfUser({body},res) {
            users.push({...body, id: users.length? users[users.length -1].id+1 : 1})
            res.redirect('/users')
    }
}

module.exports= new LoginController()