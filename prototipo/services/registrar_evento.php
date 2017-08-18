<?php

require_once 'conexion.php';

$name = $_POST['name'];
$startDate = $_POST['startDate'];
$finalDate = $_POST['finalDate'];
$maxRegistDate = $_POST['maxRegistDate'];
$availableTickets = $_POST['availableTickets'];
$ticketsSold = 0;
$priceTickets = $_POST['priceTickets'];
$eventType = $_POST['eventType'];
$idPlace = $_POST['idPlace'];
$isPublished = $_POST['isPublished'];
$registrationPrice = $_POST['registrationPrice'];
$weighingDate = $_POST['weighingDate'];
$guest = $_POST['guest'];
$cuentaNombre = 'costo_evento';

$organizationList = array();
$categoriesSelected = array();
$organizationList = json_decode($_POST['organizationList']);
$categoriesSelected = json_decode($_POST['categoriesSelected']);

$venueCost = $_POST['venueCost'];
$orgBenefited = $_POST['orgBenefited'];
$sponsorId = $_POST['sponsorId'];
$idProduct = $_POST['productId'];
$sponsorshipType = $_POST['sponsorshipType'];
$sponsorshipDesc = $_POST['sponsorshipDesc'];
$sponsorValue = $_POST['sponsorValue'];

echo $orgBenefited;

$query = "CALL pa_registrar_evento" . "('$name','$startDate','$finalDate',
'$availableTickets','$ticketsSold','$priceTickets','$eventType','$idPlace',
$isPublished,'$registrationPrice','$weighingDate','$guest','$maxRegistDate','$orgBenefited')";

$resultEvent = $conexion->query($query);
if (!$resultEvent)die($conexion->error);
echo 'Datos generales del evento guardados: ' . json_encode($resultEvent) . "<br/>";

foreach ($organizationList as $value) {

  $query = "CALL pa_registrar_orgsxevento" . "('$value')";
  $result = $conexion->query($query);
  if (!$result)die($conexion->error);
  echo 'Datos de las organizaciones guardados: ' . json_encode($result) . "<br/>";
}

foreach ($categoriesSelected as $value) {

  $query = "CALL pa_registrar_catsxevento" . "('$value')";
  $result = $conexion->query($query);
  if (!$result)die($conexion->error);
  echo 'Datos de las categorías guardados: ' . json_encode($result) . "<br/>";
}

if (!empty($sponsorId)) {

  $query = "CALL pa_registrar_patsxevento" . "('$sponsorId',
  '$sponsorshipType','$sponsorValue','$sponsorshipDesc','$idProduct')";
  $resultPats = $conexion->query($query);
  if (!$resultPats)die($conexion->error);
  echo 'Datos de los patrocinadores guardados: ' . json_encode($resultPats) . "<br/>";
}

?>
