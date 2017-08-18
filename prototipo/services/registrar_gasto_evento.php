<?php
 require_once 'conexion.php';

 $gasto = $_POST['gasto'];
 $idEvento = $_POST['eventId'];
 $cuenta = $POST['cuenta'];

 $query = "CALL pa_registrar_gasto_evento" . "($gasto,'$cuenta',$idEvento)";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>