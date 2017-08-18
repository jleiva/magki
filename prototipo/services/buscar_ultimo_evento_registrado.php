<?php
    require_once 'conexion.php';
    
    $sentencia_sql = "CALL pa_buscar_ultimo_evento_registrado";
    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    $registro = mysqli_fetch_assoc($result);

    echo json_encode($registro);

?>