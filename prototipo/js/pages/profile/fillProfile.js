document.addEventListener('DOMContentLoaded', function() {
  var logguedInUser = orm.findLogguedUser();
  var userId = logguedInUser.id;
  var userRol = logguedInUser.rol;
  var userData = {};

  switch (userRol) {
    case '3':
      userData = orm.findProfesorById(userId);
      fillProfessorForm(userData);
      break;
    case '4':
      userData = orm.findStudentById(userId);
      fillAlumForm(userData);
      break;
    default:
  }

  function fillAlumForm(userData) {
    var alumProf = orm.findProfesorById(userData.id_profesor);

    $util('#academia').innerHTML = userData.nombre_academia;
    $util('#profesor').innerHTML = alumProf.primer_nombre + ' ' + alumProf.segundo_nombre + ' ' + alumProf.primer_apeliido + ' ' + alumProf.segundo_apellido;
    $util('#grado').innerHTML = userData.nombre_cinturon;
    $util('#edad').innerHTML = userData.edad;
    $util('#peso').innerHTML = userData.peso;
    $util('#altura').innerHTML = userData.altura;
    $util('#correo').innerHTML = userData.correo;
  }

  function fillProfessorForm(userData) {
    $util('#academia').innerHTML = userData.nombre_academia;
    $util('#grado').innerHTML = userData.nombre_cinturon;
    $util('#edad').innerHTML = userData.edad;
    $util('#correo').innerHTML = userData.correo;
  }
});