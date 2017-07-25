document.addEventListener('DOMContentLoaded', function() {
  var eventsData;
  var currentEvent;
  findEvent();
  $util('#saveBttn').on('click',validateReserve);

  function findEvent() {
    eventsData = storage.get('appLS');
    var events = eventsData.events;
    var idEventReserve = eventsData.eventToReserve;


    for (var i = 0; i < events.length; i++) {
      if(events[i].eventName == idEventReserve){
        currentEvent = events[i];
      }
    }

    $util(".promo-box__title").innerHTML = currentEvent.eventName;
    $util("#place").innerHTML = currentEvent.venue;
    $util("#date").innerHTML = currentEvent.dateStart;
    $util("#typeEvent").innerHTML = currentEvent.tipoEvento;
  }

  function setTicketQ(pNewTicketQ){
    eventsData = storage.get('appLS');
    var events = eventsData.events;
    var idEventReserve = eventsData.eventToReserve;

    for (var i = 0; i < eventsData.events.length; i++) {
      if(eventsData.events[i].eventName == idEventReserve){
        eventsData.events[i].ticketQ = pNewTicketQ;
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
        if (tickets < currentEvent.ticketQ) {
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
            $alertBox.removeClass('alert-success').addClass('alert-failure').html('Quedan '+ currentEvent.ticketQ +' campos disponibles');
            if(currentEvent.ticketQ <= 0){
              disableFields();
              document.querySelector('#saveBttn').disabled = true;
            }
          } else {
            $util('.js-form').insertAdjacentHTML('afterbegin',
            '<span class="note alert-failure js-login-msg">Quedan '+ currentEvent.ticketQ +' campos disponibles</span>');
            if(currentEvent.ticketQ <= 0){
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
    var infoReserve = {id: $util('#id').value,
                      name: $util('#name').value,
                      firstName: $util('#firstName').value,
                      lastName: $util('#lastName').value,
                      email: $util('#email').value,
                      tickets: $util('#tickets').value,
                      eventName: currentEvent.eventName };
    var deductTickets = currentEvent.ticketQ- $util('#tickets').value;
    
    saveReserve(infoReserve);
    setTicketQ(deductTickets);
  }
});