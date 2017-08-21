<?php

require_once 'conexion.php';

$idProf = $_POST['id'];
$name = $_POST['name'];
$name2 = $_POST['name2'];
$lastname = $_POST['lastname'];
$lastname2 = $_POST['lastname2'];
$bday = $_POST['bday'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$academyId = $_POST['academyId'];
$beltGrade = $_POST['beltGrade'];
$academy = $_POST['academy'];
$status = $_POST['status'];

$query = "CALL pa_actualizar_profesor" . "('$name','$name2','$lastname',
'$lastname2','$bday','$age','$email','$gender','$phone',$status,'$beltGrade',
'$academyId','$idProf')";

$result = $conexion->query($query);
if (!$result)die($conexion->error);

echo json_encode($result);

?>
