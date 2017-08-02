<?php
	require_once 'conexion.php';

	$productName = $_POST['productName'];
	$imgName = $_POST['imgName'];
	$idOwner = $_POST['idOwner'];


	$sqlQuery = "CALL pa_registrar_producto" . "('$productName','$imgName','$idOwner')";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>