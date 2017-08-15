<?php
	require_once 'conexion.php';

	$eventId = $_POST['eventId'];
	$fighterId = $_POST['fighterId'];
	$position = $_POST['position'];

	$sqlQuery = "CALL pa_registrar_resultado_competidor_evento" . "($eventId,'$fighterId',$position)";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>