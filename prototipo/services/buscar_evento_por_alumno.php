<?php
  require_once 'conexion.php';

  $idEvento = $_GET['idEvento'];
  $idUsuario = $_GET['idUsuario'];
  $sqlQuery = "CALL pa_buscar_evento_por_alumno" . "($idEvento,'$idUsuario')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error);

  $eventInfo = array();

  while($data = mysqli_fetch_assoc($result)) {
    $eventInfo[] = $data;
  }

  echo json_encode($eventInfo);
?>