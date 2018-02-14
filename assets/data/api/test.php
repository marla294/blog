<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
//header('Content-Type: text/plain');

if ($_POST['name'] || $_POST['email'] || $_POST['body']) {
	echo $_POST['name'];
	echo $_POST['email'];
	echo $_POST['body'];
}


?>