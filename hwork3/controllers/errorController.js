let error = require("../db/error");

class errorController{
    renderError(req,res){
        res.render('error', {error})
    }
}

module.exports = new errorController()