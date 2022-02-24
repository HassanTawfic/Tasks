<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //die(print_r($_POST));
    session_start();
        $_SESSION["counter"]=(isset($_SESSION["counter"]))?$_SESSION["counter"]+1:1;
        // if(empty($_SESSION["counter"])){
        //     $_SESSION["counter"]=1;
        //     echo("<h2>Welcome! This is Your First Visit!</h2>");
        // }
        // else{
        //     $_SESSION["counter"]++;
        echo("<h2>Welcome! You Have Visited ".$_SESSION["counter"]." time/s!</h2>");
        // }
        $string=file("log.txt");
        //var_dump($string);
        foreach($string as $smallString){
           $Exploded=explode(",",$smallString);
           echo("Visit Date: ".$Exploded[0]."</br>");
           echo("IP: ".$Exploded[1]."</br>");
           echo("Email: ".$Exploded[2]."</br>");
           echo("Name: ".$Exploded[3]."</br>");
           echo("</br>"."<hr>"."</br>");
        }
    
    
    
    ?>
</body>
</html>