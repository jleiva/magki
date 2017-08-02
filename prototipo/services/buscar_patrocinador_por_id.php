<?php

	require_once 'conexion.php';

	$sponsorId = $_GET['idSponsor'];
	$sqlQuery = "CALL pa_buscar_patrocinador_por_id" . "('$sponsorId')";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error); 

	$sponsorInfo = array();

	while($data = mysqli_fetch_assoc($result)) {
		$sponsorInfo[] = $data;
	} 

	echo json_encode($sponsorInfo);
?>