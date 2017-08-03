<?php
 require_once 'conexion.php';

 $assistantID = $_POST['pIdentificacion'];
 $assistantType = '2';

 $query = "CALL pa_registrar_asistente_tbl_asistente" . "('$assistantID','$assistantType')";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
