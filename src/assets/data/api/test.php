<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


if($_POST['data']) {
	echo json_encode($_POST['data']);;
}
else {
	echo json_encode("Get");
}

?>
