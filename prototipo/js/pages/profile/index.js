document.addEventListener('DOMContentLoaded', function() {
  var logguedIn = orm.findLogguedUser();

  init();

  function init() {
    var profileNameContainer = document.querySelector('.js-profile-display-name');

    if (logguedIn) {
      var displayName = logguedIn.name + ' ' + logguedIn.lastName;
      profileNameContainer.html(displayName);
      initEventsProfile();
    }
  }

  function initEventsProfile() {
    var $noData = document.querySelector('.no-data');
    var eventsList;

    if (logguedIn.rol === '1' || logguedIn.rol === '2') {
      eventsList = orm.findEvents();
    } else if (logguedIn.rol === '3') {
      eventsList = orm.findNextActiveEvents();
    } else if (logguedIn.rol === '4') {

    }

    if (eventsList.length) {
      $noData.hide();

      if (logguedIn.rol === '1' || logguedIn.rol === '2') {
        eventRole.buildEventsListProfile(eventsList);
      }

      if (logguedIn.rol === '3') {
        eventRole.buildEventsListProfileProfesor(eventsList);
      }
    }
  }
});