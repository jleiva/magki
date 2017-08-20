<?php
    require_once 'conexion.php';

    $email = $_GET['email'];
    
    $sentencia_sql = "CALL pa_buscar_usuario_por_email" . "('$email')";
    $result = $conexion->query($sentencia_sql);

    if (!$result) {
        die('Fallo la consulta SQL '.$conexion->error);
    }

    $userInfo = array();

    while ($data = mysqli_fetch_assoc($result)) {
        $userInfo[] = $data;
    }

    echo json_encode($userInfo);

?>