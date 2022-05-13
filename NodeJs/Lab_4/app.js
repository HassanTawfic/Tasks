const express = require('express');
const app = express();
const fs = require('fs');
app.use('/assets',express.static('./public'));
/*app.use('/',function(req,res,next){
    next();
})*/
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.set('view engine','ejs');
app.get('/', function (req,res){
    res.send('<html><head><link rel="stylesheet" href="assets/style.css"><title>Hello</title></head><body><h1>Hello Hassan</h1></body></html>')
})
app.get('/homepage', function (req,res){
    res.render('hello');
})

app.get('/form',function(req,res){
    res.render('form')
})

app.post('/form',function(req,res){
    let rawData = fs.readFileSync('data.json');
    let currentCredentials = JSON.parse(rawData);
    const receivedCredentials = JSON.parse(JSON.stringify(req.body));
    currentCredentials.push(receivedCredentials)
    console.log(currentCredentials);
    fs.writeFileSync('data.json',JSON.stringify(currentCredentials))
    res.send('Thank you for submitting!')
})

app.get('/login',function(req,res){
    res.render('login')
})

app.post('/login',function(req,res){
    let rawData = fs.readFileSync('data.json');
    let AllCredentials = JSON.parse(rawData);
    AllCredentials.forEach(data =>{
        if(data.email === req.body.email &&
        data.password === req.body.password)
        {
            res.send("login Successful!")
        }else{
            res.send("Wrong credentials!")
        }
    })
})

app.post('/formapi',function (req,res){
    // console.log(req.body.firstname)
    // console.log(req.body.lastname)
    res.send('thanks for submitting')
})

app.listen(3000);