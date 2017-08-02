<?php
    require_once 'conexion.php';

    $sentencia_sql = "CALL pa_listar_organizaciones";
    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    $filas = array();

    while ($registro = mysqli_fetch_assoc($result)) {
        $filas[] = $registro;
    }

    echo json_encode($filas);

?>