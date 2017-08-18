document.addEventListener('DOMContentLoaded', function() {
  var logguedIn = orm.findLogguedUser();

  init();

  function init() {
    var profileNameContainer = document.querySelector('.js-profile-display-name');

    if (logguedIn) {
      var displayName = logguedIn.name + ' ' + logguedIn.lastName;
      var updatePassMesg = document.querySelector('.js-change-password');
      profileNameContainer.html(displayName);

      if (logguedIn.isFirstAccess === '1') {
        updatePassMesg.classList.remove('is-hidden');
        updatePassMesg.innerHTML = '<h3 class="change-password__title">¡Hola! Este es su primer acceso a Makgi.</h3><p>Por razones de seguridad, es necesario que <a href="perfil-cambiar-contrasena.php">cambie su contraseña</a>.</p>';
      }

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
      eventsList = orm.findNextActiveEventsUser(logguedIn.id);
    }

    if (eventsList.length) {
      $noData.hide();

      if (logguedIn.rol === '1' || logguedIn.rol === '2') {
        eventRole.buildEventsListProfile(eventsList);
      }

      if (logguedIn.rol === '3') {
        eventRole.buildEventsListProfileProfesor(eventsList);
      }

      if (logguedIn.rol === '4') {
        eventRole.buildEventsListProfileStudent(eventsList);
      }
    }
  }
});