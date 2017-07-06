document.addEventListener('DOMContentLoaded', function() {
  var btnLogOut = document.querySelector('.js-logout');
  var profileNameContainer = document.querySelector('.js-profile-name');
  var logguedIn = orm.findLogguedUser();

  if (logguedIn) {
    var displayName = logguedIn.name + ' ' + logguedIn.lastName;
    profileNameContainer.html(displayName);
  }

  btnLogOut.addEventListener('click', function() {
    var appLS = storage.get('appLS');
    appLS.logguedInUser = null;
    storage.put('appLS', appLS);
    window.location.replace('index.html');
  });
});