<?php

  require_once 'conexion.php';

  $sqlQuery = "CALL pa_listar_reservaciones";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error); 

  $reservations = array();

  while($data = mysqli_fetch_assoc($result)) {
    $reservations[] = $data;
  } 

  echo json_encode($reservations);
?>