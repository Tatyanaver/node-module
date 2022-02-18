const express = require('express')
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();

const users = [];
let error='';

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/users', ({query}, res) => {
    if (Object.keys(query).length) {
        let arrayOfUsers=[...users];
        if (query.city){
            arrayOfUsers = arrayOfUsers.filter(user=> user.city === query.city);
        }
        if (query.age){
            arrayOfUsers = arrayOfUsers.filter(user=>user.age === query.age);
        }
        res.render('users',{users:arrayOfUsers});
        return;
    }
    res.render('users', {users})
})

app.post('/login', ({body}, res) => {
    const userData = users.some(user=> user.email===body.email)
    if (userData) {
        error="This email already exist";
        res.redirect('/error');
        return;
    }
    users.push({...body, id: users.length? users[users.length -1].id+1 : 1})
    res.redirect('/users')
})

app.get('/users/:userId', ({params}, res) => {
    const user= users.find (user => user.id === +params.userId)
    if (!user) {
        error = `User with id ${params.userId} doesn't exist`;
        res.redirect('/error')
        return
    }
    res.render('userInfo', {user})
})

app.get('/error', (req, res) => {
    res.render('error', {error})
})


app.use((req, res) => {
    res.render('pageNotFound')
})

app.listen(5200, ()=> {
    console.log('Server has started on port 5200')
})