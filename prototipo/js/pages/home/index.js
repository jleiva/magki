document.addEventListener('DOMContentLoaded', function() {
  function init() {
    var isHomePage = document.querySelector('#home-page');
    var logguedIn = orm.findLogguedUser();
    var logguedInSel = document.querySelector('.js-logguedIn-visitor');
    var logguedOutSel = document.querySelector('.js-guess-visitor');

    if (logguedIn.id) {
      logguedOutSel.addClass('is-hidden');
      logguedInSel.removeClass('is-hidden');
    } else {
      logguedOutSel.removeClass('is-hidden');
      logguedInSel.addClass('is-hidden');
    }

    if (isHomePage) {
      initEvents();
    }
  }

  function initEvents() {
    var eventsList = orm.findNextActiveEvents();

    if (eventsList.length) {
      events.buildEventsListHome(eventsList);
    }
  }

  init();
});