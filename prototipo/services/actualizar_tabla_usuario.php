<?php

    require_once 'conexion.php';

    $idStudent = $_POST['id_usuario'];
    $firstName = $_POST['primer_nombre'];
    $secondName = $_POST['segundo_nombre'];
    $firstLastName = $_POST['primer_apeliido'];
    $secondLastName = $_POST['segundo_apellido'];
    $bday = $_POST['fecha_nacimiento'];
    $age = $_POST['edad'];
    $gender = $_POST['genero'];
    $email = $_POST['correo'];
    $status = $_POST['estado'];

    $query = "CALL pa_actualizar_tabla_usuario" . "('$firstName', '$secondName', '$firstLastName', 
    '$secondLastName', '$bday', $age, '$gender', '$email', $status, '$idStudent')";

    $result = $conexion->query($query);
    if (!$result)die($conexion->error);

    echo json_encode($result);

?>
