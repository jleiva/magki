document.addEventListener('DOMContentLoaded', function() {
  function init() {
    loadEventData();
    bindEventsPageUI();
  }

  function loadEventData() {
    events.populateSelects();
    events.fillEditForm();
  }

  function storageEditEventData(data) {
    var appLS = storage.get('appLS') || {};
    var events = appLS.events || [];
    
    events[appLS.eventToEdit] = data;
    appLS.events = events;
    storage.put('appLS', appLS);
  }

  function publishEditEvent(e) {
    e.preventDefault();
    var formInputs = document.querySelectorAll('#event-form .js-event-field:required');
    var $alertBox = $util('.js-login-msg');
    var eventData = {};
    var validForm;

    if (!validate.emptyFields(formInputs)) {
      validForm = validate.fieldsValue('event-form');

      if (!validForm[1].length) {
        eventData = events.buildEventDataObject(formInputs);
        eventData.isPublish = true;
        storageEditEventData(eventData);

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

  function saveEventEditData(e) {
    var formInputs = document.querySelectorAll('#event-form .js-event-field');
    var eventNameInput = $util('.js-event-rs');
    var $alertBox = $util('.js-login-msg');
    var eventData = {};

    if (eventNameInput.value) {
      eventData = events.buildEventDataObject(formInputs);
      eventData.isPublish = false;
      storageEditEventData(eventData);

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
        input.removeClass('error');
      });

      document.querySelector('#btn-save-edit').disabled = true;
      document.querySelector('#btn-publish-edit').disabled = true;
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

  function bindEventsPageUI() {
    document.querySelector('#btn-save-edit').addEventListener('click',function(e) {
      e.preventDefault();
      saveEventEditData(e);
    });

    document.querySelector('#btn-publish-edit').addEventListener('click',function(e) {
      e.preventDefault();
      publishEditEvent(e);
    });

    document.querySelector('select[name="tipoEvento"').addEventListener('change', function(e) {
      events.changeEventType(e);
    });

    document.querySelector('select[name="sponsor"').addEventListener('change', function(e) {
      events.showSponsorInfo(e);
    });

    document.querySelector('select[name="orgName"]').addEventListener('change', function(e) {
      events.createSelectedOrganizations(e);
    });

    document.querySelector('select[name="venue"]').addEventListener('change', function(e) {
      events.updateVenueCapacity(e);
    });

    document.querySelector('input[id="ticketQ"]').addEventListener('change', function(e) {
      events.validateTicketsPerVenue(e);
    });

    document.querySelector('#dateEnd').addEventListener('change', function(e) {
      var sDate = document.querySelector('#dateStart');
      var eDate = document.querySelector('#dateEnd');

      var initTimer = setTimeout(function() {
        validate.validateDateRange(sDate, eDate);
        clearTimeout(initTimer);
      }, 2000);
    });

    // document.querySelector('#priceTicket').addEventListener('change', function(e) {
    //   var currentItem = e.currentTarget;

    //   if (events.validateValue()) {

    //   }
    // });

    document.querySelector('#eventName').addEventListener('change', function() {
      var eventName = document.querySelector('#eventName');
      var eventNameValue = document.querySelector('#eventName').value;
      var eventExist = orm.findEventByName(eventNameValue);
      var warningMsg = document.querySelector('.js-event-name-warning');

      if (eventExist) {
        eventName.addClass('warning');
        warningMsg.removeClass('is-hidden');
      } else {
        eventName.removeClass('warning');
        warningMsg.addClass('is-hidden');
      }
    });
  }

  init();
});