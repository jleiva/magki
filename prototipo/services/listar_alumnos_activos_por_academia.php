<?php
  require_once 'conexion.php';

  $nombreAcademia = $_GET['nombre_academia'];
  $query = "CALL pa_listar_alumnos_activos_por_academia" . "('$nombreAcademia')";

  $result = $conexion->query($query);

  if(!$result)die($conexion->error);

  $rows = array();

  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  echo json_encode($rows);

?>