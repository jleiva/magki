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
        eventData = buildEventDataObject(formInputs);
        eventData.isPublish = true;
        storageEventData(eventData);

        if ($alertBox) {
          $alertBox.removeClass('alert-failure')
            .addClass('alert-success')
            .html(msg.key.publishEventSuccess);
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert-success js-login-msg">' + msg.key.publishEventSuccess+ '</span>');
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
      eventData = buildEventDataObject(formInputs);
      eventData.isPublish = false;
      storageEventData(eventData);

      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.registerEventSuccess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert-success js-login-msg">' + msg.key.registerEventSuccess+ '</span>');
      }

      formInputs.forEach(function(input) {
        input.setAttribute('disabled', true);
      });
    } else {
      if ($alertBox) {
        $alertBox.html(msg.key.nameFieldRequired);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert-failure js-login-msg">' + msg.key.nameFieldRequired + '</span>');
      }
      eventNameInput.addClass('error');
    }

    window.scrollTo(0, 0);
  }

  function buildEventDataObject(formInputs) {
    var eventData = {};

    formInputs.forEach(function(input) {
      var fName = input.name;
      var fValue = input.value;

      eventData[fName] = fValue;
    });

    return eventData;
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
    var sponsorFieldset = $util('.js-sponsors-info');

    if (e.target.value) {
      sponsorFieldset.removeClass('is-hidden');
    } else {
      sponsorFieldset.addClass('is-hidden');
    }
  }

  function updateVenueCapacity(e) {
    var appLS = storage.get('listaRegistrosPlaceLS') || {};
    var venueCapField = $util('#venueCap');
    var venueSelected = e.target.value;
    var venueCapacity = 0;

    appLS.find(function(venue) {
      if (venue.nombreLugar.toLowerCase() === venueSelected.toLowerCase()) {
        venueCapacity = venue.capacidadLugar;
      }
    });

    venueCapField.setAttribute('value', venueCapacity);
  }

  function validateTicketsPerVenue(e) {
    var ticketsField = e.target;
    var ticketsFieldValue = e.target.value;
    var venueCapField = $util('#venueCap').value;
    var message = $util('.js-ticket-quantity');

    if (ticketsFieldValue > venueCapField) {
      ticketsField.addClass('error');
      message.addClass('alert-failure');
    } else if (ticketsFieldValue < 0) {
      ticketsField.addClass('error');
    } else {
      ticketsField.removeClass('error');
      message.removeClass('alert-failure');
    }
  }

  function storageEventData(data) {
    var appLS = storage.get('appLS') || {};
    var events = appLS.events || [];
    
    events.push(data);

    appLS.events = events;

    storage.put('appLS', appLS);
  }

  function triggerEditAction(e) {
    var currentItem = e.currentTarget;
    var currentItemId = currentItem.dataset.index;

    setEventToEdit(currentItemId);
  }

  function setEventToEdit(currentItemId) {
    var appLS = storage.get('appLS') || {};
    var eventId = currentItemId;

    appLS.eventToEdit = eventId;
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
    var formInputstoFill = document.querySelectorAll('#event-form .js-event-field');

    formInputstoFill.forEach(function(fillInput) {
      var inputName = fillInput.name;
      var inputValue = eventData[inputName];

      if (fillInput.type === 'checkbox' && inputValue === 'on') {
        fillInput.setAttribute('checked', 'checked')
      } else {
        fillInput.value = inputValue;
      }
    });
  }

  function buildEventsList(eventsData) {
    var eventsTable = document.querySelector('#list-events tbody');

    eventsData.forEach(function(data, index) {
      var tr = document.createElement('tr');
      var eventName = document.createElement('td');
      var eventDate = document.createElement('td');
      var eventVenue = document.createElement('td');
      var eventType = document.createElement('td');
      var eventActions = document.createElement('td');

      var nameTxt = document.createTextNode(data.eventName);
      var dateTxt = document.createTextNode(data.dateStart);
      var venueTxt = document.createTextNode(data.venue);
      var typeTxt = document.createTextNode(data.tipoEvento);

      eventName.appendChild(nameTxt);
      eventDate.appendChild(dateTxt);
      eventVenue.appendChild(venueTxt);
      eventType.appendChild(typeTxt);

      var anchorEdit = document.createElement('a');
      var linkText = document.createTextNode('Editar');
      anchorEdit.appendChild(linkText);
      anchorEdit.className = 'btn-action-event js-edit-event';
      anchorEdit.dataset.index = index;
      anchorEdit.href = 'editar-evento.html';

      var anchorRegister = document.createElement('a');
      var linkText = document.createTextNode('Inscribir atletas');
      anchorRegister.appendChild(linkText);
      anchorRegister.className = 'btn-action-event js-athlete-event';
      anchorRegister.href = 'dashboard.html';
      
      eventActions.appendChild(anchorEdit);
      eventActions.appendChild(anchorRegister);

      tr.appendChild(eventName);
      tr.appendChild(eventDate);
      tr.appendChild(eventVenue);
      tr.appendChild(eventType);
      tr.appendChild(eventActions);

      eventsTable.appendChild(tr);
    });

    document.querySelectorAll('.js-edit-event').forEach(function(btnEdit) {
      btnEdit.addEventListener('click', function(e) {
        triggerEditAction(e);
      });
    });
  }

  function populateSelects() {
    var selectOrg = $util('#orgName');
    var selectVenue = $util('#venue');
    var orgList = orm.findOrgs();
    var venueList = orm.findVenues();

    orm.populateSelect('orgName', orgList, true);
    orm.populateSelect('venue', venueList, false);
  }

  return {
    saveEventData: saveEventData,
    publishEvent: publishEvent,
    changeEventType: changeEventType,
    updateVenueCapacity: updateVenueCapacity,
    buildEventsList: buildEventsList,
    fillEditForm: fillEditForm,
    validateTicketsPerVenue: validateTicketsPerVenue,
    showSponsorInfo: showSponsorInfo,
    createSelectedOrganizations: createSelectedOrganizations,
    populateSelects: populateSelects
  }
})(window);