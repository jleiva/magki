<?php
	require_once 'conexion.php';

	$eventId = $_POST['eventId'];
	$fighterId = $_POST['fighterId'];
	$position = $_POST['position'];
	$belt = $_POST['belt'];
	$score = $_POST['puntaje'];

	$sqlQuery = "CALL pa_registrar_resultado_competidor_evento" . "($eventId,'$fighterId',$position,'$belt',$score)";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>