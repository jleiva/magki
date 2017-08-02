<?php
	require_once 'conexion.php';

	$id = $_POST['id'];
	$name = $_POST['name'];
	$legalName = $_POST['legalName'];
	$imgName = $_POST['imgName'];
	$status = $_POST['status'];

	$sqlQuery = "CALL pa_actualizar_info_patrocinador" . "('$id','$name','$legalName','$imgName','$status')";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error);

	echo json_encode($result);
?>