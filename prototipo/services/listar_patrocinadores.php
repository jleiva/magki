<?php

	require_once 'conexion.php';

	$sqlQuery = "CALL pa_listar_patrocinadores";

	$result = $conexion->query($sqlQuery);

	if(!$result)die('Sql query failed' . $conexion->error); 

	$sponsorInfo = array();

	while($data = mysqli_fetch_assoc($result)) {
		$sponsorInfo[] = $data;
	} 

	echo json_encode($sponsorInfo);
?>