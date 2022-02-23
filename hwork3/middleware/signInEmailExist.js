let error = require("../db/error");

function SignInEmailExist({body}, res, next) {
    try {
        const signData = users.some(user=> user.email === body.email)
        if (signData) {
            error = "This email already exist";
            res.redirect('/error');
            return;}
            next()
    }
    catch (err) {
        console.log(err.message)
        res.status(400).send(err.message)}
}

module.exports = SignInEmailExist