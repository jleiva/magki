<?php
	$password = $_POST['newPassword'];
	$email = $_POST['email'];

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= 'From: jmadrigals@ucenfotec.ac.cr' . "\r\n" .
     'Reply-To: jmadrigals@ucenfotec.ac.cr' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();
	
	$subject = 'Nueva contraseña ingreso a Makgi';

	$content = "Estimado usuario <br/><br/>";
	$content .= "Su contraseña temporal es: $password <br/><br/>";
	$content .= "Recuerde cambiarla al ingresar por una más segura <br/><br/>";
	$content .= "Federación Costarricense de Taekwondo";

	mail($email, $subject, $content, $headers);
?>