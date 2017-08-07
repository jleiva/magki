<?php

  require_once 'conexion.php';
  $eventId = $_GET['eventId'];
  $idCategory = $_GET['idCat'];
  
  $sqlQuery = "CALL pa_listar_alumnos_x_categoria_evento" . "($eventId ,'$idCategory')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error); 

  $fighters = array();

  while($data = mysqli_fetch_assoc($result)) {
    $fighters[] = $data;
  } 

  echo json_encode($fighters);
?>