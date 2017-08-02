<?php
	require_once 'conexion.php';

	$eventId = $_POST['eventId'];
	$ticketsAmount = $_POST['ticketsAmount'];
	$soldTickets = $_POST['soldTickets'];

	$sqlQuery = "CALL pa_modificar_entradas_vendidas_evento" . "('$eventId','$soldTickets')";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>