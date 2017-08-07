<?php
	require_once 'conexion.php';

	$idClient = $_POST['idClient'];
	$idEvento = $_POST['idEvento'];
	$name = $_POST['name'];
	$lastName = $_POST['firstLastName'];
	$secLastName = $_POST['secondLastName'];
	$email = $_POST['email'];
	$ticketsAmount = $_POST['ticketsAmount'];

	$sqlQuery = "CALL pa_registrar_reserva" . "('$idClient', $idEvento, '$name','$lastName', '$secLastName', '$email', '$ticketsAmount')";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>