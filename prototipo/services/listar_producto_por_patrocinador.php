<?php
	require_once 'conexion.php';

  	$id = $_GET['pIdPatrocinador'];

  	$sentencia_sql = "CALL pa_listar_producto_por_patrocinador" . "('$id')";

	$result = $conexion->query($sentencia_sql);

	if(!$result)die('Sql query failed' . $conexion->error);

	$products = array();


	while($data = mysqli_fetch_assoc($result)) {
		$products[] = $data;
	}

	echo json_encode($products);
?>
