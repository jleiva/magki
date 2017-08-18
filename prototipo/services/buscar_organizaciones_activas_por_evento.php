<?php
  require_once 'conexion.php';

  $idEvento = $_GET['idEvento'];
  $sqlQuery = "CALL pa_buscar_organizaciones_por_evento" . "('$idEvento')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error);

  $eventInfo = array();

  while($data = mysqli_fetch_assoc($result)) {
    $eventInfo[] = $data;
  }

  echo json_encode($eventInfo);
?>
