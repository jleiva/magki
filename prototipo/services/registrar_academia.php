<?php
 require_once 'conexion.php';

 $academyName = $_POST['academyName'];
 $academyTel = $_POST['academyTel'];
 $academyEmail = $_POST['academyEmail'];
 $attendantName = $_POST['attendantName'];
 $attendantLastName = $_POST['attendantLastName'];
 $attendantSecLastName = $_POST['attendantSecLastName'];
 $academyAdress = $_POST['academyAddress'];
 $placeLatitude = $_POST['placeLatitude'];
 $placeLongitude = $_POST['placeLongitude'];
 $academySatus = true;

 $query = "CALL pa_registrar_academia" . "('$academyName','$academyTel',
 '$academyEmail','$attendantName','$attendantLastName','$attendantSecLastName',
 '$academyAdress','$placeLatitude','$placeLongitude',$academySatus)";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
