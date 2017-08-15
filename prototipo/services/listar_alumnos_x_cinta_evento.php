<?php

  require_once 'conexion.php';

  $eventId = $_GET['eventId'];
  $belt = $_GET['belt'];
  $categoryId = $_GET['cat'];


  $sqlQuery = "CALL pa_listar_alumnos_x_cinta_evento" . "($eventId ,'$belt','$categoryId')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error); 

  $fighters = array();

  while($data = mysqli_fetch_assoc($result)) {
    $fighters[] = $data;
  } 

  echo json_encode($fighters);
?>