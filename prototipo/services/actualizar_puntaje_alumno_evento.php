<?php
	require_once 'conexion.php';

	$eventId = $_POST['eventId'];
	$fighterId = $_POST['fighterId'];
	$score = $_POST['score'];

	$sqlQuery = "CALL pa_actualizar_puntaje_competidor_evento" . "($eventId,'$fighterId',$score)";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>