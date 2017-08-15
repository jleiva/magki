<?php
    require_once 'conexion.php';

    $id = $_GET['id_alumno'];
    
    $sentencia_sql = "CALL pa_buscar_administrador_por_id" . "('$id')";
    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    $registro = mysqli_fetch_assoc($result);

    echo json_encode($registro);

?>