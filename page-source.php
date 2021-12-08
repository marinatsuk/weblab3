<?php 
	$handle = fopen('style.txt', 'w');
	fwrite($fh, file_get_contents('php://input'));
	fclose($fh);

	// header('Content-Type: application/json; charset=utf-8');
	// echo json_encode('New params are saved.');
?>