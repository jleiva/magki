<?php
	require_once 'conexion.php';

	$eventId = $_GET['idEvento'];
  $sqlQuery = "CALL pa_buscar_lugar" . "('$eventId')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error);

  $placeInfo = array();

  while($data = mysqli_fetch_assoc($result)) {
  	$placeInfo[] = $data;
  }

  echo json_encode($placeInfo);
?>