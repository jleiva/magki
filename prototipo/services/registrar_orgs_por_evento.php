<?php
 require_once 'conexion.php';

 $orgId = $_POST['orgId'];
 $eventId = $_POST['idEvent'];

 $query = "CALL pa_registrar_orgs_por_evento" . "('$orgId',$eventId)";

 $result = $conexion->query($query);

 if(!$result)die($conexion->error);

 echo json_encode($result);
?>
