<?php
 require_once 'conexion.php';

 $userId = $_POST['userId'];
 $newPassword = $_POST['newPassword'];

 $query = "CALL pa_actualizar_contrasena" . "('$userId','$newPassword')";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>