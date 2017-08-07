<?php
 require_once 'conexion.php';

 $namePlace = $_POST['namePlace'];
 $telPlace = $_POST['telPlace'];
 $schedule = $_POST['schedule'];
 $capPlace = $_POST['capPlace'];
 $adressPlace = $_POST['adressPlace'];
 $placeLatitude = $_POST['placeLatitude'];
 $placeLongitude = $_POST['placeLongitude'];
 $statusPlace = $_POST['status'];
 $idplace = $_POST['placeId'];

 $query = "CALL pa_actualizar_lugar" . "('$namePlace','$telPlace',
 '$schedule','$capPlace','$adressPlace','$placeLatitude',
 '$placeLongitude',$statusPlace,$idplace)";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
