<?php

  require_once 'conexion.php';

  $eventId = $_GET['eventId'];
  $fighterId = $_GET['idAlumn'];


  $sqlQuery = "CALL pa_actual_puntaje_competidor_evento" . "($eventId ,'$fighterId')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error); 

  $score = array();

  while($data = mysqli_fetch_assoc($result)) {
    $score[] = $data;
  } 

  echo json_encode($score);
?>