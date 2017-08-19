<?php
  require_once 'conexion.php';

  $nombre = $_POST['pPrimer_nombre'];
  $snombre = $_POST['pSegundo_nombre'];
  $apellido = $_POST['pPrimer_apeliido'];
  $apellido2 = $_POST['pSegundo_apellido'];
  $bday = $_POST['pfecha_nacimiento'];
  $edad = $_POST['pedad'];
  $mail = $_POST['pCorreo'];
  $genero = $_POST['pgenero'];
  $id = $_POST['pIdentificacion'];
  $idAcademy = $_POST['pAcademyId'];
  $belt = $_POST['pbelt'];
  $qExib = $_POST['pExib'];
  $qTourn = $_POST['pTourn'];
  $qWint = $_POST['pWinT'];
  $height = $_POST['pUserheight'];
  $weight = $_POST['pUserweight'];
  $idProf = $_POST['pIdProf'];
  $estado = $_POST['pEstado'];
  $tipo = 4;
  $defaultPassword = '12345';

$querya = "CALL pa_registrar_usuario" . "($tipo,'$nombre','$snombre','$apellido','$apellido2','$bday',$edad,'$mail','$defaultPassword','$genero','$estado','$id')";

$resulta = $conexion->query($querya);

if(!$resulta)die($conexion->error);

$queryb = "CALL pa_registrar_alumno" . "('$id',$weight,$height,$qTourn,$qWint,$qExib,'$belt',$tipo,$idAcademy,'$idProf')";

$resultb = $conexion->query($queryb);

if(!$resultb)die($conexion->error);

?>