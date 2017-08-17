<?php
    require_once 'conexion.php';

    $id = $_GET['id'];
    $firstName = $_GET['firstName'];
    $secondName = $_GET['secondName'];
    $firstLastName = $_GET['firstLastName'];
    $secondLastName = $_GET['secondLastName'];
    $email = $_GET['email'];

    $sentencia_sql = "CALL pa_actualizarInfo_usuario" . "('$id','$firstName',
    '$secondName', '$firstLastName', '$secondLastName','$email')";

    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    echo json_encode($result);
?>