<?php
	require_once 'conexion.php';

	$fighterId = $_POST['fighterId'];
	$amount = $_POST['amount'];

	$sqlQuery = "CALL pa_actualizar_torneos_ganados_competidor" . "('$fighterId',$amount)";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>