<?php
session_start();
require_once("vendor/autoload.php");

use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;

$capsule->addConnection([
    "driver" => _driver_,
    "host" =>_host_,
    "database" => _database_,
    "username" =>_username_,
    "password" => _password_
 ]);

$capsule->setAsGlobal();
$capsule->bootEloquent();


//$glasses= $capsule::table("items")->get();//array of object . (get=select)
$glasses=capsule::table('items')->first();//first row , first object
//$searched_glasses=capsule::table('items')->find(5);//search_primary_key
//$canada_glasses=capsule::table('items')->where("country","=","canada")->get();
//$USA=capsule::table('items')->where("country","=","USA")->count();

$index = (isset($_GET["index"]) && is_numeric($_GET["index"]) && $_GET["index"] > 0) ? (int) $_GET["index"] : 0;
$all_requrds= Capsule::table("items")->skip($index)->take(_Pager_size_)->get();
$next_index = $index +_Pager_size_;
$next_link = "http://localhost/Trials/4_5_lab/Lab_4_5/?index=$next_index";
$previous_index = (($index - _Pager_size_)>=0)?$index - _Pager_size_:0;
$previous_link = "http://localhost/Trials/4_5_lab/Lab_4_5/?index=$previous_index";

//require_once("Views/intro.php");
$table= Capsule::table('items');

if(isset($_GET["glass"]) && is_numeric($_GET["glass"]) && $_GET["glass"] >= 0){

    require_once("Views/details.php");

}else
 {
   require_once("Views/intro.php");
}