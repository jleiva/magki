<?php
    require_once 'conexion.php';

    $id = $_POST['id_alumno'];
    $idCategoria = $_POST['id_categoria'];
    $idPeso = $_POST['id_peso'];
    $idEvento = $_POST['id_evento'];
    $idAcademia = $_POST['id_academia'];
    $estado = $_POST['estado'];

    $sentencia_sql = "CALL pa_registrar_alumno_en_evento" . "('$id', 
    '$idCategoria','$idPeso',$idEvento, '$idAcademia', $estado)";

    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    echo json_encode($result);

?>