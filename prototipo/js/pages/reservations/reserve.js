document.addEventListener('DOMContentLoaded', function() {
  var tickets;
  var ticketsSold;
  var ticketsTotal;
  var eventId;
  
  fillEventData();
  $util('#btn-save').on('click', validateReserve); 

  function fillEventData() {
    var queryUrl = misc.getQueryParams(document.location.search);
    var eventId = queryUrl.id;
    var eventInfo = orm.findEventbyId(eventId);
    var placeInfo = orm.findVenue(eventId);

    $util('.promo-box__title').innerHTML = eventInfo[0].nombre;
    $util('#place').innerHTML = placeInfo[0].nombre_lugar;

    var fecha_inicio = modifiedDateFormat(eventInfo[0].fecha_inicio);
    $util('#date').innerHTML = fecha_inicio;
    $util('#typeEvent').innerHTML = eventInfo[0].tipo_evento;
    tickets = (parseInt(eventInfo[0].entradas_disponibles) -  parseInt(eventInfo[0].entradas_vendidas));
    
    if (tickets === 0) {
      document.querySelector('.js-reserve-tickets-enable').addClass('is-hidden');
      document.querySelector('.js-reserve-tickets-disable').removeClass('is-hidden');
    }

    var ticketsInfo = $util('#availableTickets').innerHTML;
    $util('#availableTickets').innerHTML = tickets;
    eventId = eventInfo[0].id_evento;
    ticketsTotal = parseInt(eventInfo[0].entradas_disponibles);
    ticketsSold = parseInt(eventInfo[0].entradas_vendidas);
  }

  function validateReserve(e) {
    e.preventDefault();
    var $alertBox = $util('.js-login-msg');
    var amountTickets = $util('#amountTickets').value;
    var formInputs = document.querySelectorAll('#reserve .js-form-field:required');

    if (!validate.emptyFields(formInputs)) {
      var validForm = validate.fieldsValue('reserve');
      if (!validForm[1].length) {

        if (tickets >= amountTickets) {
            getRegisterData();
            
            if ($alertBox) {
              $alertBox.removeClass('alert-failure')
                .addClass('alert-success')
                .html(msg.key.saveSuccess);
            } else {
              $util('.js-form').insertAdjacentHTML('afterbegin',
              '<span class="note alert alert-success js-login-msg">' + msg.key.reserveSucess+ '</span>');
            }

        } else {
          if (tickets > amountTickets) {
            getRegisterData();

            if ($alertBox) {
              $alertBox.removeClass('alert-failure')
                .addClass('alert-success')
                .html(msg.key.saveSuccess);
            } else {
              $util('.js-form').insertAdjacentHTML('afterbegin',
              '<span class="note alert alert-success js-login-msg">' + msg.key.reserveSucess+ '</span>');
            }

          } else {

            if (tickets == 0) {
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
              document.querySelector('#amountTickets').addClass('error');
              if ($alertBox) {
                $alertBox
                  .removeClass('alert-success')
                  .addClass('alert-failure')
                  .html('Quedan '+ tickets +' entradas, favor ingrese una cifra válida');
              } else {
                $util('.js-form').insertAdjacentHTML('afterbegin',
                  '<span class="note alert alert-failure js-login-msg">Entradas disponibles: '+ tickets +' </span>');
              }
              
            }
          }
        }
      }
    }
  }

  function getRegisterData() {
    var formInputs = document.querySelectorAll('#reserve .js-form-field');
    var userInfo = misc.buildDataObject(formInputs);
    var ticketsBought = parseInt(userInfo.amountTickets);
    var soldTickets = ticketsSold + ticketsBought;
    orm.saveReserve(userInfo);
    orm.modifyTicketsAmount(eventId, soldTickets);
    misc.disableFieldsOnSave(formInputs);
  }

  function modifiedDateFormat(pdate) {
    var date = new Date(pdate);
    var day = Number(date.getDate() + 1);
    var month = Number(date.getMonth() + 1);
    var year = date.getFullYear();
    if(day < 10){
      day = '0' + day;
    }
    
    if(month < 10){
      month = '0' + month;
    }

    var newFormat = day + '-' + month + '-' + year;
    
    return newFormat;
  }
});
