<?php
  require_once 'conexion.php';

  $eventId = $_GET['eventId'];

  $query = "CALL pa_listar_ganadores_por_evento" . "('$eventId')";

  $result = $conexion->query($query);

  if(!$result)die($conexion->error);

  $winnersList = array();

  while ($data = mysqli_fetch_assoc($result)) {
    $winnersList[] = $data;
  }

  echo json_encode($winnersList);

?>