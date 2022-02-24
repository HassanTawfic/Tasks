<?php
session_start();
if(!isset($_POST['button'])){
    header("location:LoginForm.php");
}else{
    $_SESSION['IsCount']=(isset($_SESSION['IsCount']))?$_SESSION['IsCount']+1:1;
    echo("You have Visited ".$_SESSION['IsCount'].":Times");
}
?>