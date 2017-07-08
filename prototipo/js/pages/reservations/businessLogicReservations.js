function saveReserve(infoReserve){
  var reservations = getReservations();
  reservations.push(infoReserve);
  localStorage.setItem('reservationsLS',JSON.stringify(reservations));
}

function getReservations(){
  var reservations = JSON.parse(localStorage.getItem('reservationsLS'));

  if(reservations == null){
    reservations = [];
  }
  return reservations;
}

function setAppLS(pEventsData){
  localStorage.setItem('appLS',JSON.stringify(pEventsData));
}
