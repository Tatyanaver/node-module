const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive:true}, (err) =>{
    if (err) {
        console.log(err)
    }
} )

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive:true}, (err) =>{
    if (err) {
        console.log(err)
    }
} )

let onlineUsers = [{name: "Andrii",age: 22, city:"Lviv"}, {name: "Ivan", age: 30, city: "Kharkiv"}];
let inPersonUsers = [{name: "Anya", age:25, city:"Kyiv"}, {name: "Olya", age:33, city: "Herson"}];

for (let i=0; i<onlineUsers.length; i++) {
    for (const user in onlineUsers[i]) {
        fs.writeFile(path.join(__dirname,'main', 'online', 'file2.txt'), `${user}: ${onlineUsers[i] [user]}\n`, {flag:"a"}, (err)=> {
    if (err) {
        console.log(err)
        throw err;}
} )}}

for (let y=0; y<inPersonUsers.length; y++) {
    for (const user in inPersonUsers[y]) {
        fs.writeFile(path.join(__dirname,'main', 'inPerson', 'file.txt'), `${user}: ${inPersonUsers[y] [user]}\n`, {flag:"a"}, (err)=> {
            if (err) {
                console.log(err)
                throw err;}
        } )
    }}



function copyDataFromInPerson(savPath, srcPath) {
    fs.readFile(path.join(__dirname,'main', 'inPerson', 'file.txt'), 'utf8', function (err, data) {
        if (err) throw err;

        fs.writeFile (path.join(__dirname,'main', 'online', 'file2.txt'), data, function(err) {
            if (err) throw err;
            console.log('complete');
        });
    });
}
copyDataFromInPerson();

function copyDataFromOnline(savPath, srcPath) {
    fs.readFile(path.join(__dirname,'main', 'online', 'file2.txt'), 'utf8', function (err, data2) {
        if (err) throw err;

        fs.writeFile (path.join(__dirname,'main', 'inPerson', 'file.txt'), data2, function(err) {
            if (err) throw err;
            console.log('complete');
        });
    });
}
copyDataFromOnline();
