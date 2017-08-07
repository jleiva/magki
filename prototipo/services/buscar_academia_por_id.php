<?php
    require_once 'conexion.php';

    $id = $_GET['idAcademy'];

    $query = "CALL pa_buscar_academia_por_id" . "('$id')";

    $result = $conexion->query($query);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    $filas = array();

    while ($registro = mysqli_fetch_assoc($result)) {
        $filas[] = $registro;
    }

    echo json_encode($filas);
?>
