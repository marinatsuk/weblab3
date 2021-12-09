<?php   
    $response = file_get_contents("style.json");

    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json; charset=utf-8');
    if ($response) {
        header('Content-Length: '.mb_strlen($response, '8bit'));
    }
    echo $response;
?>