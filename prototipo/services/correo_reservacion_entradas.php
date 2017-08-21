<?php

	$email = $_POST['email'];
	$numTickets = $_POST['numTickets'];
	$numReservation = $_POST['numReservation'];
	$eventDate = $_POST['eventDate'];
	$eventName = $_POST['eventName'];
	$place = $_POST['place'];

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= 'From: jmadrigals@ucenfotec.ac.cr' . "\r\n" .
     'Reply-To: jmadrigals@ucenfotec.ac.cr' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();
	
	$subject = 'Información de su reservación';

	$content = "Estimado cliente <br/>";
	$content .= "Gracias por adquirir sus entradas para este evento<br/><br/>";
	$content .= "Detalle de su reservación: <br/><br/>";
	$content .= "Nombre del evento: $eventName <br/>";
	$content .= "Lugar: $place <br/>";
	$content .= "Número de reservación: $numReservation <br/>";
	$content .= "Número de boletos adquiridos: $numTickets <br/>";
	$content .= "Fecha del evento: $eventDate <br/><br/>";
	$content .= "¡Le esperamos! <br/><br/>";
	$content .= "Federación Costarricense de Taekwondo";

	mail($email, $subject, $content, $headers);
?>
