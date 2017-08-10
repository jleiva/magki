document.addEventListener('DOMContentLoaded', function() {
  var btnLogOut = document.querySelector('.js-logout');
  var profileNameContainer = document.querySelector('.js-profile-name');
  var logguedIn = orm.findLogguedUser();

  if (logguedIn) {
    var displayName = logguedIn.name + ' ' + logguedIn.lastName;
    profileNameContainer.innerHTML = displayName;
  }

  btnLogOut.addEventListener('click', function() {
    var appLS = storage.get('appLS') || {};
    appLS.logguedInUser = null;

    storage.put('appLS', appLS);
    closeSession();
    window.location.replace('index.html');
  });

  function closeSession() {
    var request = $.ajax({
      url: 'services/cerrar_sesion.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {}      
    });

    request.done(function(data){});

    request.fail(function(){
      console.log('Conexion error');
    });
  }
});