const users = require("../db/users");

class SignInController {
    renderSignInOfUser(req,res) {
       res.render('signIn')
    }
    signInEmailExist({body}, res) {
    users.push({...body, id: users.length? users[users.length -1].id+1 : 1})
    res.redirect('/users')
}
}

module.exports= new SignInController()