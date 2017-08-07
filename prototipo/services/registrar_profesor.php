<?php
 require_once 'conexion.php';

 $profType = '3';
 $profName = $_POST['pPrimer_nombre'];
 $profSecName = $_POST['pSegundo_nombre'];
 $profLastName = $_POST['pPrimer_apeliido'];
 $profSecLastName = $_POST['pSegundo_apellido'];
 $profNac = $_POST['pfecha_nacimiento'];
 $profEdad = $_POST['pedad'];
 $profEmail = $_POST['pCorreo'];
 $profPass = '12345';
 $profGenero = $_POST['pgenero'];
 $profTel = $_POST['ptelefono'];
 $profEstado = true;
 $profID = $_POST['pIdentificacion']; 

 $query = "CALL pa_registrar_profesor_tbl_usuario" . "('$profType','$profName',
 '$profSecName','$profLastName','$profSecLastName','$profNac','$profEdad',
 '$profEmail','$profPass','$profGenero','$profTel','$profEstado','$profID')";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
