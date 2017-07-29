<?php
    require_once 'conexion.php';

    //$id = '503240387';
    $nombre1 = $_POST['pnombre1'];
    $nombre2 = $_POST['pnombre2'];
    $apellido1 = $_POST['papellido1'];
    $apellido2 = $_POST['papellido2'];
    $bday = $_POST['pfecha_nacimiento'];
    $genero = $_POST['pgenero'];
    $estado = 1;


    $sentencia_sql = "CALL pa_registrar_org" . "('$nombre1', 
    '$nombre2','$apellido1','$apellido2','$bday', '$genero', $estado)";

    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    echo json_encode($result);

?>