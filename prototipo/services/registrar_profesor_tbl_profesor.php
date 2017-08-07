<?php
 require_once 'conexion.php';

 $profID = $_POST['pid_profesor'];
 $profCinturon = $_POST['pnombre_cinturon'];
 $profType = '3';
 $profIdAcademia = $_POST['pid_academia'];

 $query = "CALL pa_registrar_profesor_tbl_profesor" . "('$profID','$profCinturon','$profType','$profIdAcademia')";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
