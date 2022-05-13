const fs = require('fs')
const dir = './directory'
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log("Created New Directory!")
}
if (fs.existsSync('info.txt')) {
    fs.rename('test.txt', 'info.txt', function () {
        console.log('File Renamed!');
    });
}
if (fs.existsSync('info.txt')) {
    fs.rm('info.txt', function () {
        console.log('File removed!')
    })
}

let rawdata = fs.readFileSync('data.json')
console.log("from read sync")
console.log(JSON.parse(rawdata))
console.log("from read async")


fs.readFile('data.json', {encoding: 'utf8'}, function (err, data) {
if(err) console.log(err)
    else console.log(data)
});

fs.writeFileSync('file.txt',"Hello from App!")
