<?php
    require_once 'conexion.php';

    $gasto = $_POST['gasto'];
    $eventId = $_POST['eventId'];
    $cuenta = "costo_evento";

    $sentencia_sql = 'CALL pa_registrar_gasto_evento' . '("$cuenta",$gasto,$eventId)';

    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    echo json_encode($result);

?>