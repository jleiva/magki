<?php
  require_once 'conexion.php';

  $id = $_GET['userId'];

  $sqlQuery = "CALL pa_listar_proximos_eventos_por_alumno" . "('$id')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error); 

  $events = array();

  while($data = mysqli_fetch_assoc($result)) {
    $events[] = $data;
  } 

  echo json_encode($events);
?>