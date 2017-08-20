var queryUrl = misc.getQueryParams(document.location.search);
var eventId = queryUrl.id;
fillEventData();
initMap();
var map;
var tickets;
var ticketsSold;
var ticketsTotal
var eventInfo;

$util('#btn-save').on('click', validateReserve); 

function fillEventData() {
  eventInfo = orm.findEventbyId(eventId);

  $util('.promo-box__title').innerHTML = eventInfo[0].nombre;
  $util('#place').innerHTML = eventInfo[0].nombre_lugar;

  var fecha_inicio = misc.modifiedDateFormat(eventInfo[0].fecha_inicio);
  $util('#date').innerHTML = fecha_inicio;
  $util('#typeEvent').innerHTML = eventInfo[0].tipo_evento;
  $util('#price').innerHTML = eventInfo[0].valor_entrada;
  tickets = (parseInt(eventInfo[0].entradas_disponibles) -  parseInt(eventInfo[0].entradas_vendidas));
  
  if (tickets === 0) {
    document.querySelector('.js-reserve-tickets-enable').addClass('is-hidden');
    document.querySelector('.js-reserve-tickets-disable').removeClass('is-hidden');
  }

  var ticketsInfo = $util('#availableTickets').innerHTML;
  $util('#availableTickets').innerHTML = tickets;
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
              .html(msg.key.reserveSucess);
          } else {
            $util('.js-form').insertAdjacentHTML('afterbegin',
            '<span class="note alert alert-success js-login-msg">' + msg.key.reserveSucess + '</span>');
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
            '<span class="note alert alert-success js-login-msg">' + msg.key.reserveSucess + '</span>');
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
  
  userInfo.eventId = eventId;
  orm.saveReserve(userInfo);
  orm.modifyTicketsAmount(eventId, soldTickets);
  misc.disableFieldsOnSave(formInputs);

  var emailInfo = {
    email: userInfo.email,
    tickets: userInfo.amountTickets,
    eventDate: $util('#date').innerHTML,
    eventName: eventInfo[0].nombre,
    place: eventInfo[0].nombre_lugar
  }

  orm.sendEmailReservation(emailInfo);
}

function initMap() {
  var places = orm.findVenues();
  var venue = places.find(function(pcl) {
        return pcl.nombre_lugar === eventInfo[0].nombre_lugar;
      });

  var lat = parseFloat(venue.latitud);
  var long = parseFloat(venue.longitud);
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: long},
    zoom: 18,
    mapTypeId: 'hybrid',
  });


  marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    visible: false
  });
}


