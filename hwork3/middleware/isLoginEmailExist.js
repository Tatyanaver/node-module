let error = require("../db/error");

function isLoginEmailExist({body}, res, next) {
    try {
        const userData = users.some(user=> user.email === body.email)
        if (userData) {
            error ="This email already exist";
            res.redirect('/error');
            return;}
            next()
    }
    catch (err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }
}

module.exports = isLoginEmailExist