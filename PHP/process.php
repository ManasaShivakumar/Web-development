<?php

$name = $_POST["name"];
$age = $_POST["age"];

if (empty($name)) {
    echo "Name is required";
} 
elseif (empty($age)) {
    echo "Age is required";
} 
else {
    echo "Hello $name";
    echo "<br>";
    echo "Your age is $age";
}

?>