<?php

  require_once 'conexion.php';

  $query = "CALL pa_listar_lugares_habilitados";

  $result = $conexion->query($query);

  if(!$result)die($conexion->error);

  $rows = array();

  while ($row = mysqli_fetch_assoc($result)) {

    $rows[] = $row;
  }

  echo json_encode($rows);

?>
