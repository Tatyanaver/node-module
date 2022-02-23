const users = require('../db/users')
let error = require("../db/error");

class UserController {
    renderUsers({query}, res) {
    if (Object.keys(query).length) {
    let arrayOfUsers= [...users];
    if (query.city){
    arrayOfUsers = arrayOfUsers.filter(user=> user.city === query.city);
}
    if (query.age){
    arrayOfUsers = arrayOfUsers.filter(user=>user.age === query.age);
}
res.render('users',{users:arrayOfUsers});
return;}
res.render('users',{users})
}

    getUserById({params}, res) {
    const user = users.find (user => user.id === +params.userId)
    if (!user) {
        error = `User with id ${params.userId} doesn't exist`;
        res.redirect('/error')
        return}
    res.render('userInfo', {user})
}
}

module.exports = new UserController()
