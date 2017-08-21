document.addEventListener('DOMContentLoaded', function() {
  init();

  function init() {
    var isHomePage = document.querySelector('#home-page');
    var isLearnPage = document.querySelector('#academy-page');
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

    if (isLearnPage) {
      initAcademies();
    }
  }

  function initEvents() {
    var eventsList = orm.findNextActiveEvents();

    if (eventsList.length) {
      events.buildEventsListHome(eventsList);
      events.fillEventData(eventsList[0]);
    }
  }

  function initAcademies() {
    var academyList = orm.findActiveAcad();

    if (academyList.length) {
      var tbody = document.querySelector('#tblAcademies tbody');

      document.querySelector('.no-data').hide();
      tbody.innerHTML = '';

      for (var i = 0; i < academyList.length; i++) {
        var row = tbody.insertRow(i);
        row.insertCell().innerHTML = academyList[i].id_academia;
        row.insertCell().innerHTML = academyList[i].nombre_academia;
        row.insertCell().innerHTML = academyList[i].telefono;
        row.insertCell().innerHTML = academyList[i].nombre_encargado + ' ' + academyList[i].primer_apellido_encargado;
      }
    }
  }
});