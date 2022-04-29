const http = require('http');
const fs = require('fs');
const url = require("url");
http.createServer(function (req, res){
    const queryObject = url.parse(req.url, true).query;
    let realPath = url.parse(req.url, true).pathname
    if(realPath === '/login' && req.method === 'GET')
    {   /*
        todo : if I send correct password and email redirect me to profile with my name
                if I send wrong password return, 400 in header with msg you entered wrong password
                if I send wrong email, return 400 in header with msg you entered wrong email
                If I send an email that doesn’t exist, return 400 headers with msg you entered email doesn’t exist please signup
        */
        let usersJSON = fs.readFileSync('./data.json','utf-8')
        let users = JSON.parse(usersJSON)
        const queryObject = url.parse(req.url, true).query;
        //console.log("inside login " + queryObject.name)
        res.writeHead(200)
        res.write('Hello from login')

    }
    else if(realPath === '/signup' && req.method === 'POST')
    {
        let flag = true
        let usersJSON = fs.readFileSync('data.json','utf-8')
        let users = JSON.parse(usersJSON)
        console.log(users)
        const queryObject = url.parse(req.url, true).query;
        const arr = Array.from(users);
        arr.forEach(element=>{
            if(queryObject.name === element.name
                || queryObject.email === element.email){
                res.writeHead(200)
                res.write('Name or EMail Already Used!')
                return flag = false;
            }
        })
        if(flag){
            arr.push(queryObject)
            usersJSON = JSON.stringify(arr);
            fs.writeFileSync("data.json",usersJSON,"utf-8");
            res.writeHead(200)
            res.write('Hello from sign up')
        }

    }
    else if((req.url === '/home' && req.method === 'GET') || (req.url === '/' && req.method === 'GET'))
    {
        res.writeHead(200,{'content-type':'text/html'})
        let html = fs.readFileSync('./Index.html','utf8')
        res.write(html)
    }
    else if(req.url === '/profile' && req.method === 'GET')
    {
        res.writeHead(200)
        res.write('You are in profile')
    }
    else{
        res.writeHead(404)
        res.write("Page Not Found")
    }
    res.end()

}).listen(3000)