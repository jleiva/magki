<?php

require_once 'conexion.php';

$idStudent = $_POST['identification'];
$firstName = $_POST['firstName'];
$secondName = $_POST['secondName'];
$firstLastName = $_POST['firstLastName'];
$secondLastName = $_POST['secondLastName'];
$bday = $_POST['bday'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$weight = $_POST['weight'];
$height = $_POST['height'];
$beltGrade = $_POST['beltGrade'];
$tournaments = $_POST['tournaments'];
$winTournaments = $_POST['winTournaments'];
$exhibitions = $_POST['exhibitions'];
$academy = $_POST['academy'];
$professor = $_POST['professor'];
$status = $_POST['status'];

$query = "CALL pa_actualizar_alumno" . "($weight,$height,$tournaments,$winTournaments,$exhibitions,'$beltGrade',$academy,'$professor','$idStudent')";

$result = $conexion->query($query);
if (!$result)die($conexion->error);

echo json_encode($result);

?>
