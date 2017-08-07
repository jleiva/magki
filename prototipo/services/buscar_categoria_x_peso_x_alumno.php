<?php

	require_once 'conexion.php';

  $alumnId = $_GET['alumnId'];
  $eventId = $_GET['eventId'];

  $sqlQuery = "CALL pa_buscar_categoria_x_peso_x_alumno" . "($eventId,'$alumnId')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error);

  $category = array();

  while($data = mysqli_fetch_assoc($result)) {
  	$category[] = $data;
  }

  echo json_encode($category);
?>