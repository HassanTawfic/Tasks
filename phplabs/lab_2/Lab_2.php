
<html>
    <head>
        <title> contact form </title>


    </head>

    <body>
        <?php
        //validate submit btn
        //validate input feilds
            //if errors show error msg
        //if validated show msg
        //session_start();
        $NameCheck=false;
        $EmailCheck=false;
        $MessageCheck=false;

        if (isset($_POST["submit"])){
            //catch name
            if (empty($_POST["name"])||!(strlen(trim($_POST["name"]))<100)){
                echo "Please Enter a Valid username!<br>";
                $NameCheck=false;
                
            }else{$NameCheck=true;}
            //validate name
            if (empty($_POST["email"]) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
                echo "Please Enter a Valid E-Mail Address!<br>";
                $EmailCheck=false;
            }else{$EmailCheck=true;}
            if (empty($_POST["message"])|| !(strlen(trim($_POST["message"]))<255)){
                echo "Please Enter a Valid Message!<br>";
                $MessageCheck=false;
            }else{$MessageCheck=true;}

        }
        if($MessageCheck && $EmailCheck && $NameCheck){
            $LogFile=fopen("log.txt","a+");
            $date = date('D m y h:i A');
            $line="$date,".$_SERVER['SERVER_ADDR'].",".$_POST["email"].",".$_POST["name"];
            fwrite($LogFile,$line.PHP_EOL);
            fclose($LogFile);
            //echo "Hamada";
        }

        if(isset($_POST["clear"])){
            if (isset($_POST["name"])){
                $_POST["name"] = "";
                $NameCheck=false;
            }
            if (isset($_POST["email"])){
                $_POST["email"] = "";
                $EmailCheck=false;
            }

        }

        

        ?>
        <h3> Contact Form </h3>
        <div id="after_submit">
            
        </div>
        <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">

            <div class="row">
                <label class="required" for="name">Your name:</label><br />
                <input id="name" class="input" name="name" type="text" value="<?php echo isset($_POST["name"])?($_POST["name"]):""; ?>" size="30" /><br />

            </div>
            <div class="row">
                <label class="required" for="email">Your email:</label><br />
                <input id="email" class="input" name="email" type="text" value="<?php echo isset($_POST["email"])?($_POST["email"]):""; ?>" size="30" /><br />

            </div>
            <div class="row">
                <label class="required" for="message">Your message:</label><br />
                <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />

            </div>

            <input id="submit" name="submit" type="submit" value="Send email" />
            <input id="clear" name="clear" type="reset" value="clear form" />

        </form>
    </body>

</html>