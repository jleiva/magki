<?php
 require_once 'conexion.php';

 $academyName = $_POST['academyName'];
 $academyTel = $_POST['academyTel'];
 $academyEmail = $_POST['academyEmail'];
 $attendantName = $_POST['attendantName'];
 $attendantLastName = $_POST['attendantLastName'];
 $attendantSecLastName = $_POST['attendantSecLastName'];
 $academyAdress = $_POST['academyAddress'];
 $academyLatitude = $_POST['placeLatitude'];
 $academyLongitude = $_POST['placeLongitude'];
 $academySatus = $_POST['status'];
 $idAcademy = $_POST['academyId'];

 $query = "CALL pa_actualizar_academia" . "('$academyName','$academyTel',
 '$academyEmail','$attendantName','$attendantLastName','$attendantSecLastName',
 '$academyAdress','$academyLongitude','$academyLongitude',$academySatus,$idAcademy)";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
