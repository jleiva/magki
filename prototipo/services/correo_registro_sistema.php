<?php

	$email = $_POST['userEmail'];
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= 'From: jmadrigals@ucenfotec.ac.cr' . "\r\n" .
     'Reply-To: jmadrigals@ucenfotec.ac.cr' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();
	
	$subject = 'Bienvenido a Makgi';

	$content = "Estimado $firstName $lastName <br/><br/>";
	$content .= "La creación de su cuenta en Makgi ha sido exitosa <br/>";
	$content .= "Su contraseña temporal es 12345<br/><br/>";
	$content .= "Recuerde cambiarla por una más segura cuando ingrese por primera vez<br/><br/>";
	$content .= "Federación Costarricense de Taekwondo";

	mail($email, $subject, $content, $headers);
?>
