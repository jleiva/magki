<?php
  require_once 'conexion.php';

  $idEvento = $_GET['idEvento'];
  $sqlQuery = "CALL pa_buscar_patrocinador_por_evento" . "('$idEvento')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error);

  $sponsorsInfo = array();

  while($data = mysqli_fetch_assoc($result)) {
    $sponsorsInfo[] = $data;
  }

  echo json_encode($sponsorsInfo);
?>
