<?php
    $name = $_POST["name"];
    $billingAddress= $_POST["billingAddress"];
    $state= $_POST["state"]; 
    $email= $_POST["email"]; 
	$item_quantity= $_POST["quantity"];
	$Baked_Good= $_POST["bakedArray"];

    $data = "Name: " . $name."<br>".
    "Billing Address: ".$billingAddress."<br>".$state."<br>".
    "Email: ".$email."<br>".$item_quantity."<br>".$Baked_Good; 
    
    $filename = "files/" . $name.$billingAddress . ".txt";
    file_put_contents($filename,$data);
    
    echo "http://p3.smssandbox.biz/" . $filename;
?>
