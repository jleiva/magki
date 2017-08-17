'use strict';

var events = (function(window) {
  function publishEvent(e) {
    e.preventDefault();
    var formInputs = document.querySelectorAll('#event-form .js-event-field:required');
    var $alertBox = $util('.js-login-msg');
    var eventData = {};
    var validForm;

    if (!validate.emptyFields(formInputs)) {
      validForm = validate.fieldsValue('event-form');

      if (!validForm[1].length) {
        eventData = misc.buildDataObject(formInputs);
        eventData.status = true;
        eventData.isPublish = true;
        storageEventData(eventData);

        if ($alertBox) {
          $alertBox.removeClass('alert-failure')
            .addClass('alert-success')
            .html(msg.key.publishEventSuccess);
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert alert-success js-login-msg">' + msg.key.publishEventSuccess+ '</span>');
        }

        formInputs.forEach(function(input) {
          input.setAttribute('disabled', true);
        });
      }
    }

    window.scrollTo(0, 0);
  }

  function saveEventData(e) {
    var formInputs = document.querySelectorAll('#event-form .js-event-field');
    var eventNameInput = $util('.js-event-rs');
    var $alertBox = $util('.js-login-msg');
    var eventData = {};

    if (eventNameInput.value) {
      eventData = misc.buildDataObject(formInputs);
      eventData.status = false;
      eventData.isPublish = false;
      storageEventData(eventData);

      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.registerEventSuccess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert alert-success js-login-msg">' + msg.key.registerEventSuccess+ '</span>');
      }

      formInputs.forEach(function(input) {
        input.setAttribute('disabled', true);
        input.removeClass('error');
      });

      document.querySelector('#btn-save').disabled = true;
      document.querySelector('#btn-publish').disabled = true;
    } else {
      if ($alertBox) {
        $alertBox.html(msg.key.nameFieldRequired);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert alert-failure js-login-msg">' + msg.key.nameFieldRequired + '</span>');
      }
      eventNameInput.addClass('error');
    }

    window.scrollTo(0, 0);
  }

  function changeEventType(e) {
    var guessFieldset = $util('.js-guess');
    var competitionFields = $util('.js-competition-info');
    var entryFee = $util('#entryFee');
    var weightDate = $util('#weightDate');

    if (e.target.value === 'exibicion') {
      guessFieldset.removeClass('is-hidden');
    } else {
      guessFieldset.addClass('is-hidden');
    }

    if (e.target.value === 'torneo' || e.target.value === 'fogueo') {
      competitionFields.removeClass('is-hidden');
      entryFee.required = true;
      weightDate.required = true;
    } else {
      competitionFields.addClass('is-hidden');
      entryFee.required = false;
      weightDate.required = false;
    }
  }

  function createSelectedOrganizations(e) {
    var organizationName = e.target.value;
    var orgList = $util('.js-org-list');

    if (organizationName) {
      var liEl = document.createElement('li');
      var liTxt = document.createTextNode(organizationName);
      var anchorRemove = document.createElement('a');
      var linkText = document.createTextNode('Remover');

      liEl.className = 'js-org-item';
      anchorRemove.appendChild(linkText);
      anchorRemove.className = 'link-remove js-remove-org';

      liEl.appendChild(liTxt);
      liEl.appendChild(anchorRemove);
      orgList.appendChild(liEl);
    }

    document.querySelectorAll('.js-remove-org').forEach(function(btnRemove) {
      btnRemove.addEventListener('click', function(e) {
        var currentItem = e.currentTarget.parentNode;
        currentItem.remove();
      });
    });
  }

  function showSponsorInfo(e) {
    var currentItemId = e.target.value;
    var sponsorFieldset = $util('.js-sponsors-info');

    if (currentItemId) {
      sponsorFieldset.removeClass('is-hidden');
      loadSponsorProducts(currentItemId);
    } else {
      sponsorFieldset.addClass('is-hidden');
    }
  }

  function populateSponsorProduct(currentItemId) {
    var sponsorProducts = orm.findSponsorProducts(currentItemId);

    misc.populateSponsorProducts('sponsorBrand', sponsorProducts, false);
  }

  function updateVenueCapacity(e) {
    var appLS = storage.get('listaLugaresLS') || {};
    var venueCapField = document.querySelector('#venueCap');
    var venueSelected = e.target.value;
    var venueCapacity = 0;

    appLS.find(function(venue) {
      if (venue.nombreLugar.toLowerCase() === venueSelected.toLowerCase()) {
        venueCapacity = venue.capacidadLugar;
      }
    });

    venueCapField.value = venueCapacity;
  }

  function validateTicketsPerVenue(e) {
    var ticketsField = e.target;
    var ticketsFieldValue = Number(e.target.value);
    var venueCapField = Number($util('#venueCap').value);
    var message = $util('.js-ticket-quantity');

    if (Number.isInteger(ticketsFieldValue)) {
      if (ticketsFieldValue > venueCapField) {
        ticketsField.addClass('error');
        message.addClass('alert-failure');
        ticketsField.value = '';
      } else if (ticketsFieldValue < 0) {
        ticketsField.addClass('error');
        message.addClass('alert-failure');
      } else {
        ticketsField.removeClass('error');
        message.removeClass('alert-failure');
      }
    } else {
      ticketsField.addClass('error');
      message.addClass('alert-failure');
    }
    
  }

  function storageEventData(data) {
    var appLS = storage.get('appLS') || {};
    var events = appLS.events || [];
    
    events.push(data);
    appLS.events = events;
    storage.put('appLS', appLS);
  }

  function triggerReserveTicket(e) {
    var currentItem = e.currentTarget;
    var currentItemId = currentItem.dataset.name;

    setEventToReserve(currentItemId);
  }

  function setEventToReserve(currentItemId) {
    var appLS = storage.get('appLS') || {};
    var eventId = currentItemId;

    appLS.eventToReserve = eventId;
    storage.put('appLS', appLS);
  }

  function getEventToEdit() {
    var appLS = storage.get('appLS') || {};
    var eventId = appLS.eventToEdit || {};

    return eventId;
  }

  function fillEditForm() {
    var eventId = getEventToEdit();
    var eventData = orm.findEventbyId(eventId);

    var eventName = $util('#eventName');
    var dateStart = $util('#dateStart');
    var dateEnd = $util('#dateEnd');
    var venue = $util('#venue');
    var venueCap = $util('#venueCap');
    var ticketQ = $util('#ticketQ');
    var priceTicket = $util('#priceTicket');
    var tipoEvento = $util('#tipoEvento');
    var entryFee = $util('#entryFee');
    var weightDate = $util('#weightDate');
    var guess = $util('#guess');
    var guessOrg = $util('#guessOrg');
    var orgName = $util('#orgName');
    var sponsor = $util('#sponsor');
    var sponsorBrand = $util('#sponsorBrand');    
    var sponsorType = $util('#sponsorType');
    var sponsorDesc = $util('#sponsorDesc');
    var sponsorValue = $util('#sponsorValue');

    eventName.value = eventData.eventName;
    dateStart.value = eventData.dateStart;
    dateEnd.value = eventData.dateEnd;
    venue.value =  eventData.venue;
    venueCap.value = eventData.venueCap;
    ticketQ.value = eventData.ticketQ;
    priceTicket.value = eventData.priceTicket;
    tipoEvento.value = eventData.tipoEvento;
    entryFee.value = eventData.entryFee;
    weightDate.value = eventData.weightDate;
    guess.value = eventData.guess;
    guessOrg.value = eventData.guessOrg;
    orgName.value = eventData.orgName;
    sponsor.value = eventData.sponsor;
    sponsorBrand.value = eventData.sponsorBrand;
    sponsorType.value = eventData.sponsorType;
    sponsorDesc.value = eventData.sponsorDesc;
    sponsorValue.value = eventData.sponsorValue;
  }

  function buildEventsList(eventsData) {
    var eventsTable = document.querySelector('#list-events tbody');

    eventsData.forEach(function(data) {
      var eventId = data.id_evento;
      var tr = document.createElement('tr');
      var eventName = document.createElement('td');
      var eventDate = document.createElement('td');
      var eventVenue = document.createElement('td');
      var eventType = document.createElement('td');
      var eventEstado = document.createElement('td');
      var eventActions = document.createElement('td');

      var nameTxt = document.createTextNode(data.nombre);
      var dateTxt = document.createTextNode(misc.modifiedDateFormat(data.fecha_inicio));
      var venueTxt = document.createTextNode(data.lugar);
      var typeTxt = document.createTextNode(data.tipo_evento);
      var estadoTxt = document.createTextNode(data.estado == '1' ? 'Publicado' : 'Sin publicar');

      eventName.appendChild(nameTxt);
      eventDate.appendChild(dateTxt);
      eventVenue.appendChild(venueTxt);
      eventType.appendChild(typeTxt);
      eventEstado.appendChild(estadoTxt);

      var anchorEdit = document.createElement('a');
      var linkText = document.createTextNode('Editar');
      anchorEdit.appendChild(linkText);
      anchorEdit.className = 'btn-action-event js-edit-event';
      anchorEdit.href = 'editar-evento.html';

      var anchorRegister = document.createElement('a');
      var linkText = document.createTextNode('Inscribir atletas');

      anchorRegister.appendChild(linkText);
      anchorRegister.className = 'btn-action-event js-athlete-event';
      anchorRegister.href = 'inscribir-competidores.php' + '?eventId=' + eventId;

      var anchorResults = document.createElement('a');
      var linkText = document.createTextNode('Registrar resultados');
      anchorResults.appendChild(linkText);
      anchorResults.className = 'btn-action-event';
      anchorResults.href = 'registrar-resultados.php' + '?eventId=' + eventId;

      var anchorPesaje = document.createElement('a');
      var linkText = document.createTextNode('Registrar pesaje');
      anchorPesaje.appendChild(linkText);
      anchorPesaje.className = 'btn-action-event';
      anchorPesaje.href = 'pesaje.php' + '?eventId=' + eventId;
      
      eventActions.appendChild(anchorEdit);
      eventActions.appendChild(anchorRegister);
      eventActions.appendChild(anchorPesaje);
      eventActions.appendChild(anchorResults);

      tr.appendChild(eventName);
      tr.appendChild(eventDate);
      tr.appendChild(eventVenue);
      tr.appendChild(eventType);
      tr.appendChild(eventEstado);
      tr.appendChild(eventActions);

      eventsTable.appendChild(tr);
    });
  }

  function buildEventsListHome(eventsData) {
    var eventsTable = document.querySelector('#next-events tbody');

    for (var i = 1; i < eventsData.length; i++) {
      if (eventsData[i].estado) {
        var $noData = document.querySelector('.no-data');
        var tr = document.createElement('tr');
        var eventName = document.createElement('td');
        var eventDate = document.createElement('td');
        var eventVenue = document.createElement('td');
        var eventType = document.createElement('td');
        var eventActions = document.createElement('td');

        var nameTxt = document.createTextNode(eventsData[i].nombre);
        var dateTxt = document.createTextNode(misc.modifiedDateFormat(eventsData[i].fecha_inicio));
        var venueTxt = document.createTextNode(eventsData[i].nombre_lugar);
        var typeTxt = document.createTextNode(eventsData[i].tipo_evento);

        $noData.hide();

        eventName.appendChild(nameTxt);
        eventDate.appendChild(dateTxt);
        eventVenue.appendChild(venueTxt);
        eventType.appendChild(typeTxt);

        var anchorTicket = document.createElement('a');
        var linkText = document.createTextNode('Reservar Entradas');
        anchorTicket.appendChild(linkText);
        anchorTicket.className = 'btn-action-event js-book-event';
        anchorTicket.dataset.name = eventsData[i].nombre;
        anchorTicket.href = 'reserve.php' + '?id=' + eventsData[i].id_evento;
        
        eventActions.appendChild(anchorTicket);

        tr.appendChild(eventName);
        tr.appendChild(eventDate);
        tr.appendChild(eventVenue);
        tr.appendChild(eventType);
        tr.appendChild(eventActions);

        eventsTable.appendChild(tr);
      }
    }

    document.querySelectorAll('.js-book-event').forEach(function(btnEdit) {
      btnEdit.addEventListener('click', function(e) {
        triggerReserveTicket(e);
      });
    });
  }

  function fillEventData(nextEventData) {
    $util('.promo-box__title').innerHTML = nextEventData.nombre;
    $util('#place').innerHTML = nextEventData.nombre_lugar;
    $util('#date').innerHTML = misc.modifiedDateFormat(nextEventData.fecha_inicio);
    $util('#type').innerHTML = nextEventData.tipo_evento;
    $util('#price').innerHTML = nextEventData.valor_entrada;
    $util('#inscDate').innerHTML = misc.modifiedDateFormat(nextEventData.limite_inscripcion);
    $util('#weightDate').innerHTML = misc.modifiedDateFormat(nextEventData.limite_inscripcion);
    $util('#cost').innerHTML = nextEventData.costo_inscripcion;

    document.querySelector('#btn-register').addEventListener('click',function(e){location.href = 'reserve.php' + '?id=' + nextEventData.id_evento});
  }

  function populateSelects() {
    var selectOrg = $util('#orgName');
    var selectVenue = $util('#venue');
    var selectSponsor = $util('#sponsor');
    var orgList = orm.findActiveOrgs();
    var venueList = orm.findActiveVenues();
    var sponsorList = orm.findActiveSponsors();

    misc.populateOrgSelect('orgName', orgList, true);
    misc.populateSelect('venue', venueList, false);
    misc.populateSponsorSelect('sponsor', sponsorList, false);
  }

  function loadSponsors() {
    var sponsorList = orm.findSponsors();

    sponsorList.forEach(function(element) {
      document.querySelector("#sponsor").innerHTML+="<option value='"+element["id_patrocinador"]+"'>"+element["nombre_comercial"]+"</option>";
    })
  }

  function loadOrgn() {
    var sponsorList = orm.findOrgs();

    sponsorList.forEach(function(element){
      document.querySelector("#orgName").innerHTML+="<option value='"+element["id_organizacion"]+"'>"+element["nombre"]+"</option>";
    })
  }

  function loadPlaces() {
    var placesList = orm.findVenues();

    placesList.forEach(function(element){
      document.querySelector("#venue").innerHTML+="<option value='"+element["id_lugar"]+"'>"+element["nombre_lugar"]+"</option>";
    })
  }

  function loadSponsorProducts(pId) {
    var productsList = orm.getProductBySponsor(pId);
    document.querySelector("#sponsorBrand").innerHTML = "";
    document.querySelector("#sponsorBrand").innerHTML = "<option selected>Seleccione un producto</option>";
    productsList.forEach(function(element) {
      document.querySelector("#sponsorBrand").innerHTML+="<option value='"+element["Id_producto"]+"'>"+element["nombre_producto"]+"</option>";
    })
  }

  return {
    saveEventData: saveEventData,
    fillEventData: fillEventData,
    publishEvent: publishEvent,
    changeEventType: changeEventType,
    updateVenueCapacity: updateVenueCapacity,
    buildEventsList: buildEventsList,
    buildEventsListHome: buildEventsListHome,
    fillEditForm: fillEditForm,
    validateTicketsPerVenue: validateTicketsPerVenue,
    showSponsorInfo: showSponsorInfo,
    createSelectedOrganizations: createSelectedOrganizations,
    populateSelects: populateSelects,
    loadSponsors: loadSponsors,
    loadOrgn: loadOrgn,
    loadPlaces: loadPlaces,
    loadSponsorProducts: loadSponsorProducts
  }
})(window);