<?php
    require_once 'conexion.php';

    $id = $_POST['id_alumno'];
    $idEvento = $_POST['id_evento'];
    $desc = $_POST['desc'];

    $sentencia_sql = "CALL pa_desinscribir_alumno_evento" . "($idEvento,'$id','$desc')";

    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    echo json_encode($result);

?>