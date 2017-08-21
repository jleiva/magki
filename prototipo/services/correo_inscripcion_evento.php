<?php

	$email = $_POST['email'];
	$eventDate = $_POST['eventDate'];
	$eventName = $_POST['eventName'];
	$eventPlace = $_POST['eventPlace'];
	$academyName = $_POST['academyName'];
	$category = $_POST['category'];
	$belt = $_POST['belt'];
	$weight = $_POST['weight'];

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= 'From: jmadrigals@ucenfotec.ac.cr' . "\r\n" .
     'Reply-To: jmadrigals@ucenfotec.ac.cr' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();
	
	$subject = 'Información de su inscripción';

	$content = "Estimado usuario <br/><br/>";
	$content .= "Le detallamos la información del evento <strong>$eventName</strong> al cual ha sido inscrito recientemente <br/><br/>";
	$content .= "Fecha del evento: $eventDate <br/>";
	$content .= "Lugar del evento: $eventPlace <br/>";
	$content .= "Academia que representa: $academyName <br/>";
	$content .= "Categoría: $category <br/>";
	$content .= "Peso: $weight <br/>";
	$content .=	"Cinta: $belt <br/><br/>";
	$content .= "¡Le esperamos! <br/><br/>";
	$content .= "Federación Costarricense de Taekwondo";

	mail($email, $subject, $content, $headers);
?>
