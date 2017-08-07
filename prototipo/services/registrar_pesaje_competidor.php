<?php
	require_once 'conexion.php';

	$eventId = $_POST['eventId'];
	$fighterId = $_POST['fighterId'];
	$weight = $_POST['weight'];
	$status = $_POST['status'];

	$sqlQuery = "CALL pa_registrar_pesaje_competidor" . "($eventId,'$fighterId',$weight,'$status')";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>