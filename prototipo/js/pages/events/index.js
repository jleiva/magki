document.addEventListener('DOMContentLoaded', function() {
  var getValidDatesRange = misc.debounce(function() {
    var sDate = document.querySelector('#dateStart');
    var eDate = document.querySelector('#dateEnd');
      
    validate.validateDateRange(sDate, eDate);
  }, 1000);

  var getValidStartDate = misc.debounce(function() {
    var sDate = document.querySelector('#dateStart');
      
    validate.validateStartDate(sDate);
  }, 1000);

  function init() {
    var isEventsPage = document.querySelector('#events-page');
    var isRegisterEventPage = document.querySelector('#event-register');

    if (isEventsPage) {
      loadEventsData();
    }

    if (isRegisterEventPage) {
      bindEventsPageUI();
      events.populateSelects();
    }
  }

  function bindEventsPageUI() {
    document.querySelector('#dateEnd').addEventListener('change', getValidDatesRange);

    document.querySelector('#dateStart').addEventListener('change', getValidStartDate);

    document.querySelector('#btn-save').addEventListener('click',function(e) {
      e.preventDefault();
      events.saveEventData(e);
    });

    document.querySelector('#btn-publish').addEventListener('click',function(e) {
      e.preventDefault();
      getValidDatesRange();
      events.publishEvent(e);
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

    document.querySelector('#ticketQ').addEventListener('change', function(e) {
      events.validateTicketsPerVenue(e);
    });

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

  function initEventsList() {
    var appLS = storage.get('appLS') || {};
    var eventsList = appLS.events || [];
    var $noData = document.querySelector('.no-data');

    if (eventsList.length) {
      $noData.hide();
      events.buildEventsList(eventsList);
    }
  }

  // Events List page
  function loadEventsData() {
    initEventsList();
  }

  init();
});