document.addEventListener('DOMContentLoaded', function() {
  var logguedInUser = orm.findLogguedUser();
  var userId = logguedInUser.id;
  var userRol = logguedInUser.rol;
  var userData = {};

  switch (userRol) {
    case '1':
    case '2':
      userData = orm.findAdminUserById(userId);
      fillEditForm(userData);
      break;
    case '3':
      userData = orm.findProfesorById(userId);
      fillEditForm(userData);
      break;
    case '4':
      userData = orm.findStudentById(userId);
      fillEditForm(userData);
      break;
    default:
  }

  function fillEditForm(userData) {

  }
});