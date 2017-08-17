<?php
    require_once 'conexion.php';

    $id = $_GET['id'];
    $weight = $_GET['weight'];
    $height = $_GET['height'];

    $sentencia_sql = "CALL pa_actualizarInfo_alumno" . "('$id', '$weight','$height')";

    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    echo json_encode($result);
?>