<?php 
  session_start();
  $isLogguedIn = $_SESSION['login'];
  $userRol = $_SESSION['rol'];

  if (!$isLogguedIn) {
    header("Location: out.php");
    exit;
  }

  echo '<ul><li>Logueado: ' . $_SESSION['login'] . '</li>';
  echo '<li>Email: ' . $_SESSION['usuario'] . '</li>';
  echo '<li>Nombre: ' . $_SESSION['nombre'] . '</li>';
  echo '<li>Apellido: ' . $_SESSION['apellido'] . '</li>';
  echo '<li>Tipo Rol: ' . $_SESSION['rol'] . '</li></ul>';
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Makgi - <?php echo $page_title ?></title>
  <link rel="stylesheet" href="css/styles.css">
<!--   <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet"> -->
</head>
<body>
  <header class="site-header" role="">
    <div class="group">
      <h1 class="logo"><a href="perfil-admin.html">Makgi</a></h1>

      <?php
        switch ($userRol) {
          case 1:
            include("templates/navigation.php");
            break;
          case 2:
            include("templates/asist-navigation.php");
            break;
          case 3:
            include("templates/prof-navigation.php");
            break;
          case 4:
            include("templates/user-navigation.php");
            break;
          default:
              echo "Your favorite color is neither red, blue, nor green!";
            break;
        }
      ?>
      
    </div>
  </header>