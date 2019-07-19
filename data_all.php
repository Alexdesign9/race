<?php

$data_attempts = file_get_contents('data_attempts.json');
$data_decode = json_decode($data_attempts, TRUE);
$attempts = $data_decode['data'];
for ($id = 0; $id < 15; $id++) {
	$number_attempt = 0;
	foreach ($attempts as $attempt) {
		if ($attempt['id'] == ($id + 1)) {
			$result[$id][$number_attempt] = $attempt['result'];
			$number_attempt++;
		}
	}
}

$data_cars = file_get_contents('data_cars.json');
$data_decode = json_decode($data_cars, TRUE);
$racers = $data_decode['data'];
$id = 0;
foreach ($racers as $racer) {
	$racer['result'] = $result[$id];
	$id++;
	$data_all[] = $racer;
}
header('Content-Type: application/json');
echo json_encode($data_all, JSON_UNESCAPED_UNICODE);

?>