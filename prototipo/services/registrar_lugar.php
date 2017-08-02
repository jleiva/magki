<?php
 require_once 'conexion.php';

 $placeName = $_POST['placeName'];
 $placeTel = $_POST['placeTel'];
 $placeSchedule = $_POST['placeSchedule'];
 $placeCap = $_POST['placeCap'];
 $placeAdress = $_POST['placeAdress'];
 $placeLatitude = $_POST['placeLatitude'];
 $placeLongitude = $_POST['placeLongitude'];
 $placeSatus = true;

 $query = "CALL pa_registrar_lugar" . "('$placeName','$placeTel',
 '$placeSchedule',$placeCap,'$placeAdress','$placeLatitude',
 '$placeLongitude',$placeSatus)";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
