<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');

	$data = "hi";
	echo json_encode($data);
?>