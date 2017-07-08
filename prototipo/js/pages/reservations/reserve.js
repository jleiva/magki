document.addEventListener('DOMContentLoaded', function() {
var nombre = "Evento prueba";
var eventsData;
var currentEvent;
findEvent();
$util('#saveBttn').on('click',validateReserve);

function findEvent(){
  eventsData = storage.get('appLS');
  var events = eventsData.events;

  for (var i = 0; i < events.length; i++) {
    if(events[i].eventName == nombre){
      currentEvent = events[i];
    }
  }

  $util(".promo-box__title").innerHTML = currentEvent.eventName;
  $util("#place").innerHTML = currentEvent.place;
  $util("#date").innerHTML = currentEvent.dateStart;
  $util("#typeEvent").innerHTML = currentEvent.tipoEvento;
}

function setVenueCap(pNewVenueCap){
  eventsData = storage.get('appLS');
  var events = eventsData.events;

  for (var i = 0; i < eventsData.events.length; i++) {
    if(eventsData.events[i].eventName == nombre){
      eventsData.events[i].venueCap = pNewVenueCap;
    }
  }
  setAppLS(eventsData);
}

function validateReserve(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var validForm;
  var tickets = $util('#tickets').value;

  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('reserve');

    if (!validForm[1].length) {
      if (tickets < currentEvent.venueCap) {
        getReserveData();

        if ($alertBox) {
          $alertBox.removeClass('alert-failure').addClass('alert-success').html(msg.key.reserveSucess);
          disableFields()
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin',
          '<span class="note alert-success js-login-msg">' + msg.key.reserveSucess+ '</span>');
          disableFields()
        }
      } else {
        if ($alertBox) {
          $alertBox.removeClass('alert-success').addClass('alert-failure').html('Quedan '+ currentEvent.venueCap +' campos disponibles');
          if(currentEvent.venueCap <= 0){
            disableFields();
            document.querySelector('#saveBttn').disabled = true;
          }
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin',
          '<span class="note alert-failure js-login-msg">Quedan '+ currentEvent.venueCap +' campos disponibles</span>');
          if(currentEvent.venueCap <= 0){
            disableFields();
            document.querySelector('#saveBttn').disabled = true;
          }
        }
      }
    }
  }
}

function disableFields() {
  document.querySelector('#name').disabled = true;
  document.querySelector('#firstName').disabled = true;
  document.querySelector('#lastName').disabled = true;
  document.querySelector('#id').disabled = true;
  document.querySelector('#tickets').disabled = true;
  document.querySelector('#email').disabled = true;
}

function getReserveData(){
  var $alertBox = $util('.js-login-msg');
  var infoReserve = [];
  var nombre = $util('#name').value;
  var firstName = $util('#firstName').value;
  var lastName = $util('#lastName').value;
  var id = $util('#id').value;
  var tickets = $util('#tickets').value;
  var email = $util('#email').value;

  infoReserve.push(id,nombre,firstName,lastName,email,tickets,currentEvent.eventName);
  saveReserve(infoReserve);
  setVenueCap(currentEvent.venueCap-tickets);
}
});