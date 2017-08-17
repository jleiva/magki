document.addEventListener('DOMContentLoaded', function() {
  var logguedIn = orm.findLogguedUser();

  init();

  function init() {
    var profileNameContainer = document.querySelector('.js-profile-display-name');

    if (logguedIn) {
      var displayName = logguedIn.name + ' ' + logguedIn.lastName;
      profileNameContainer.html(displayName);
      initPastEvents();
    }
  }

  function initPastEvents() {
    var $noData = document.querySelector('.no-data');
    var eventsList = orm.findPastEventsUser(logguedIn.id);

    if (eventsList.length) {
      $noData.hide();
      eventRole.buildEventsListProfileStudent(eventsList);
    }
  }
});