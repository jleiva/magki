<?php
    require_once 'conexion.php';

    $id = $_POST['pId'];
    $nombre = $_POST['pNombre'];
    $tipo = $_POST['pTipo'];
    $desc = $_POST['pDesc'];
    $estado = 1;

    $sentencia_sql = "CALL pa_registrar_organizacion" . "('$id', 
    '$nombre','$tipo','$desc', $estado)";

    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    echo json_encode($result);

?>