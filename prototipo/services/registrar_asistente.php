<?php
 require_once 'conexion.php';

 $assistantType = '2';
 $assistantName = $_POST['pPrimer_nombre'];
 $assistantSecName = $_POST['pSegundo_nombre'];
 $assistantLastName = $_POST['pPrimer_apeliido'];
 $assistantSecLastName = $_POST['pSegundo_apellido'];
 $assistantNac = '';
 $assistantEdad = '';
 $assistantEmail = $_POST['pCorreo'];
 $assistantPass = '12345';
 $assistantGenero = '';
 $assistantTel = '';
 $assistantEstado = '1';
 $assistantID = $_POST['pIdentificacion']; //cedula

 $query = "CALL pa_registrar_asistente_tbl_usuario" . "('$assistantType','$assistantName',
 '$assistantSecName','$assistantLastName','$assistantSecLastName','$assistantNac','$assistantEdad',
 '$assistantEmail','$assistantPass','$assistantGenero','$assistantTel','$assistantEstado','$assistantID')";

//$sqlQuery = "CALL pa_registrar_patrocinador" . "('$id','$name','$legalName','$imgName','$status')";

 //quite los quemados: pass y tipo

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
