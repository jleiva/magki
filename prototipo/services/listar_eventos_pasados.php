<?php

  require_once 'conexion.php';

  $sqlQuery = "CALL pa_listar_eventos_pasados";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error); 

  $events = array();

  while($data = mysqli_fetch_assoc($result)) {
    $events[] = $data;
  } 

  echo json_encode($events);
?>