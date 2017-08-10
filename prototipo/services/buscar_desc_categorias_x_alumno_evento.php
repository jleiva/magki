<?php

  require_once 'conexion.php';

  $alumnId = $_GET['idUser'];
  $eventId = $_GET['idEvento'];

  $sqlQuery = "CALL pa_buscar_desc_categorias_x_alumno_evento" . "($eventId,'$alumnId')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error);

  $category = array();

  while($data = mysqli_fetch_assoc($result)) {
    $category[] = $data;
  }

  echo json_encode($category);
?>