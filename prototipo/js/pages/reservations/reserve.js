document.addEventListener('DOMContentLoaded', function() {
  var eventsData;
  var currentEvent;
  findEvent();
  $util('#btn-save').on('click',validateReserve);

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

  function validateReserve(e) {

    e.preventDefault();
    var $alertBox = $util('.js-login-msg');
    var amountTickets = $util('#amountTickets').value;
    var formInputs = document.querySelectorAll('#reserve .js-form-field:required');

    if (!validate.emptyFields(formInputs)) {

      var validForm = validate.fieldsValue('reserve');
      if (!validForm[1].length) {

        if (currentEvent.ticketQ >= amountTickets) {

            getRegisterData();

            if ($alertBox) {
              $alertBox.removeClass('alert-failure')
                .addClass('alert-success')
                .html(msg.key.saveSuccess);
            } else {
              $util('.js-form').insertAdjacentHTML('afterbegin',
              '<span class="note alert alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
            }

        } else {

          if (currentEvent.ticketQ > amountTickets) {

            getRegisterData();

            if ($alertBox) {
              $alertBox.removeClass('alert-failure')
                .addClass('alert-success')
                .html(msg.key.saveSuccess);
            } else {
              $util('.js-form').insertAdjacentHTML('afterbegin',
              '<span class="note alert alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
            }

          } else {

            if (currentEvent.ticketQ == 0) {

              if ($alertBox) {
                $alertBox
                  .removeClass('alert-success')
                  .addClass('alert-failure')
                  .html('Entradas agotadas');
                  misc.disableFieldsOnSave(formInputs);
                  $util('#secLastName').disabled = true;
              } else {
                $util('.js-form').insertAdjacentHTML('afterbegin',
                  '<span class="note alert alert-failure js-login-msg">Entradas agotadas</span>');
                  misc.disableFieldsOnSave(formInputs);
                  $util('#secLastName').disabled = true;
              }

            } else {

              if ($alertBox) {
                $alertBox
                  .removeClass('alert-success')
                  .addClass('alert-failure')
                  .html('Quedan '+ currentEvent.ticketQ +' entradas');
              } else {
                $util('.js-form').insertAdjacentHTML('afterbegin',
                  '<span class="note alert alert-failure js-login-msg">Quedan '+ currentEvent.ticketQ +' entradas</span>');
              }
              
            }
          }
        }
      }
    }
  }


  function getRegisterData(){
    var formInputs = document.querySelectorAll('#reserve .js-form-field');
    var userInfo = misc.buildDataObject(formInputs);
    var deductTickets = currentEvent.ticketQ - $util('#amountTickets').value;
    saveReserve(userInfo);
    setTicketQ(deductTickets);
    misc.disableFieldsOnSave(formInputs);
    $util('#secLastName').disabled = true;
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
});
