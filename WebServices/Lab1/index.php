<?php
ini_set("memory_limit",-1);
$CitiesJSON = file_get_contents('city.list.json');
$json = json_decode($CitiesJSON,true);
$EgyCities=[];

foreach ($json as $city)
{
        if($city["country"]=="EG")
        {
            $EgyCities[] = $city;
        }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Weather Api</title>
</head>
<body>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <label>Select City
        <select name="Cities">
            <?php
            foreach ($EgyCities as $egyCity)
            {
                echo "<option value=".$egyCity['id'].">".$egyCity['name'].','.$egyCity['country']."</option>";
            }
            ?>
        </select>
    </label>
    <input type="submit" name="submit" value="Get Selected Values" />
</form>
<?php
if (isset($_POST["submit"]))
{
    $selectedCityID = $_POST['Cities'];
    $apiKey = "keyValue";
    $apiLink = "http://api.openweathermap.org/data/2.5/weather?id=$selectedCityID&appid=$apiKey";
    $ch=curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_URL,$apiLink);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
    $response=curl_exec($ch);
    curl_close($ch);
    $data=json_decode($response,true);
    $time= time();
    //var_dump($data);
    echo ("<h1>" . $data['name'] . " Weather Status </h1>");
    echo( "<br><h3>" . date("D H:i A",$time) . "</h3>");
    echo( "<br><h3>" . date("jS F,Y",$time) . "</h3>");
    echo( "<br><h3>" . $data["weather"][0]['description'] . "</h3>") ;
    echo( "<br><h3>Tempreature: " . ($data["main"]['temp']-273.15) . "°C</h3>");
    echo( "<br><h3>Humidity: " . ($data["main"]['humidity']) . "%</h3>");
    echo( "<br><h3>" . ($data["wind"]['speed']) . "Km/h</h3>");

}
?>

</body>
</html>
