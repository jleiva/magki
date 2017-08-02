<?php
	require_once 'conexion.php';

	$id = $_POST['id'];
	$name = $_POST['name'];
	$legalName = $_POST['legalName'];
	$imgName = $_POST['imgName'];
	$status = '1';

	$sqlQuery = "CALL pa_registrar_patrocinador" . "('$id','$name','$legalName','$imgName','$status')";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);
	
	echo json_encode($result);
?>