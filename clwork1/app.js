const fs = require('fs')
const path = require('path')

// 1
fs.writeFile(path.join(__dirname, 'file1.txt'), 'Some data', (err)=> {
    if (err) {
        console.log(err)
        throw err;}})

function someDataWrite(savPath, srcPath) {
    fs.readFile(path.join(__dirname, 'file1.txt'), 'utf8', function (err, data) {
        if (err) throw err;

        fs.writeFile (path.join(__dirname, 'file2.txt'), data, function(err) {
            if (err) throw err;
            console.log('complete');
        });
    });
}
someDataWrite();


// 2

fs.writeFile(path.join(__dirname, 'newFile.txt'), 'Some text', (err)=> {
    if (err) {
        console.log(err)
        throw err;}})

fs.mkdir(path.join(__dirname, 'main'), (err) =>{
    if (err) {
        console.log(err)
        throw err;}})

function copyData(savPath, srcPath) {
    fs.readFile(path.join(__dirname,'newFile.txt'), 'utf8', function (err, data) {
        if (err) throw err;

    fs.writeFile (path.join(__dirname,'main', 'file.txt'), data, function(err) {
            if (err) throw err});
    });
}
copyData();


fs.unlink(path.join(__dirname, 'newFile.txt'),(err)=> {
    if (err) {
        console.log(err)
        throw err}})

// 3

fs.mkdir(path.join(__dirname, 'Comments'), (err) =>{
    if (err) {
        console.log(err)
        throw err;}})

fs.mkdir(path.join(__dirname, 'Comments', 'public', 'test'), {recursive:true}, (err) =>{
    if (err) {
        console.log(err)
        throw err;}})

fs.writeFile(path.join(__dirname,'Comments', 'public', 'test', 'file.txt'), 'some data in the file', (err) =>{
    if (err) {
        console.log(err)
         throw err;}})

// Третье не закончено

// fs.readdir(path.join(__dirname,'Comments'), (err, files) => {
//     if (err)
//         console.log(err);
//     else {
//         files.forEach(file => {
//             if (path.extname(file) !== ".txt")
//                 fs.rename();
//                 });
//         })
//     }
// })