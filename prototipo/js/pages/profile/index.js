document.addEventListener('DOMContentLoaded', function() {
  function init() {
    var logguedIn = orm.findLogguedUser();
    var profileNameContainer = document.querySelector('.js-profile-display-name');

    if (logguedIn) {
      var displayName = logguedIn.name + ' ' + logguedIn.lastName;
      profileNameContainer.html(displayName);
      initEventsProfile();
    }
  }

  function initEventsProfile() {
    var appLS = storage.get('appLS') || {};
    var eventsList = appLS.events || [];
    var $noData = document.querySelector('.no-data');

    if (eventsList.length) {
      $noData.hide();
      events.buildEventsListProfile(eventsList);
    }
  }

  init();
});