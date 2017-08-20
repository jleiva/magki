document.addEventListener('DOMContentLoaded', function() {
  var logguedIn = orm.findLogguedUser();
  var pastEvents = document.querySelector('#profile-past-events');
  var wonEvents = document.querySelector('#profile-won-events');

  init();

  function init() {
    var profileNameContainer = document.querySelector('.js-profile-display-name');

    if (logguedIn) {
      var displayName = logguedIn.name + ' ' + logguedIn.lastName;
      var updatePassMesg = document.querySelector('.js-change-password');
      profileNameContainer.html(displayName);

      if (logguedIn.isFirstAccess === '1') {
        updatePassMesg.classList.remove('is-hidden');
        updatePassMesg.innerHTML = '<h3 class="change-password__title">¡Hola! Recuerde actualizar su contraseña.</h3><p>Por razones de seguridad, es necesario que <a href="perfil-cambiar-contrasena.php">cambie su contraseña</a>.</p>';
      }

      initPastEvents();
    }
  }

  function initPastEvents() {
    var $noData = document.querySelector('.no-data');
    var eventsList;

    if (pastEvents) {
      eventsList = orm.findPastEventsUser(logguedIn.id);

      if (eventsList.length) {
        $noData.hide();
        eventRole.buildEventsListProfileStudent(eventsList);
      }
    } else if (wonEvents) {
      eventsList = orm.findWonEventsUser(logguedIn.id);

      if (eventsList.length) {
        $noData.hide();
        eventRole.buildEventsListWonProfileStudent(eventsList);
      }
    }
  }
});