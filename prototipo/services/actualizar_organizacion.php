<?php
    require_once 'conexion.php';

    $id = $_POST['pId'];
    $nombre = $_POST['pNombre'];
    $tipo = $_POST['pTipo'];
    $desc = $_POST['pDesc'];
    $estado = $_POST['pEstado'];

    $sentencia_sql = "CALL pa_actualizar_organizacion" . "('$nombre','$tipo',
    '$desc', $estado, '$id')";

    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    echo json_encode($result);

?>