<?php

  require_once 'conexion.php';

  $fighterId = $_GET['idAlumn'];


  $sqlQuery = "CALL pa_torneos_ganados_competidor" . "('$fighterId')";

  $result = $conexion->query($sqlQuery);

  if(!$result)die('Sql query failed' . $conexion->error); 

  $wonTournaments = array();

  while($data = mysqli_fetch_assoc($result)) {
    $wonTournaments[] = $data;
  } 

  echo json_encode($wonTournaments);
?>