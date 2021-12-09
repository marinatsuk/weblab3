<?php 
	try {
		$file_handle = fopen('style.json', 'w');
		fwrite($file_handle, json_encode($_POST));
		fclose($file_handle);

		$response['status'] = 'success';
	} catch (Exception $e) {
		$response = array('error' => $e->getMessage());
	}

	$response = json_encode($response);
	header('Access-Control-Allow-Origin: *');
	header('Content-type: application/json; charset=utf-8');
	if ($response) {
		header('Content-Length: '.mb_strlen($response, '8bit'));
	}
	echo $response;