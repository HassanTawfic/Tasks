<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<style> 
    body{
        margin: 0;
        padding: 0;
        background: linear-gradient(120deg,#2980b9,#8e44ad);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        height: 100vh;
        overflow: hidden;
    }
    .center
    {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
        background: white;
        border-radius: 20px;
    }
    .center h1{
        text-align: center;
        padding: 0 0 20px 0;
        border-bottom: 1px solid silver;
    }
    .center form{
        padding:  0px 110px;
        box-sizing: border-box;
    }
    .center h2{
        text-align: center;
    }
    .center input{
        size: 10px;
        padding: 10px;
        position: center;
        
    }
    .button
    {
        position: center;
        text-align: center;
        padding: 20px 130px;
        width: 150px;
            
    }
</style>
<body>
    <div class="center">
    <h1>Login Form</h1>
    <form method="POST" action="Home.php">
        <h2>Username</h2>
        <input type="text" name="username" class="input" id="username" placeholder="Enter username" autocomplete="off">
        <h2>Password</h2>
        <input type="password" name="password" class="input" id="password" placeholder="Enter password" autocomplete="off">
        <div class="button">
        <input id="button" name="button" class="button" type="submit" value="Login">
        </div>    
    </form>
    
    </div>
    
</body>
</html>