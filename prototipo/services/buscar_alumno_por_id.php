<?php
    require_once 'conexion.php';

    $id = $_GET['id_alumno'];
    
    $sentencia_sql = "CALL pa_buscar_alumno_por_id" . "('$id')";
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