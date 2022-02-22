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
    $string=file("log.txt");
    //var_dump($string);
    foreach($string as $smallString){
       $Exploded=explode(",",$smallString);
       echo("Visit Date: ".$Exploded[0]."</br>");
       echo("IP: ".$Exploded[1]."</br>");
       echo("Email: ".$Exploded[2]."</br>");
       echo("Name: ".$Exploded[3]."</br>");
       echo("</br>"."<hr size='80%'>"."</br>");
    }
    
    ?>
</body>
</html>