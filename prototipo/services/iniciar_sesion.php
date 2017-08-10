<?php
    require_once 'conexion.php';
    $password = $_GET['userPass'];
    $email = $_GET['userEmail'];

    $sentencia_sql = "CALL pa_iniciar_sesion" . "('$password','$email')";
    $result = $conexion->query($sentencia_sql);

    if ($result) {
        $registro = mysqli_fetch_assoc($result);
        
        session_start();
        $_SESSION['login'] = TRUE;
        $_SESSION['usuario'] = $registro['correo'];
        $_SESSION['nombre'] = $registro['primer_nombre'];
        $_SESSION['apellido'] = $registro['primer_apeliido'];
        $_SESSION['rol'] = $registro['id_tipo'];
        
        $conexion->close();

        echo json_encode($registro);
    } else {
        die('Fallo la consulta SQL '.$conexion->error);
    }
?>