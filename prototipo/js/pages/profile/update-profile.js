document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#btn-save').addEventListener('click', validateChanges);

  var logguedInUser = orm.findLogguedUser();
  var userId = logguedInUser.id;
  var userRol = logguedInUser.rol;
  var userData = {};

  switch (userRol) {
    case '1':
    case '2':
      userData = orm.findAdminUserById(userId);
      fillAdminForm(userData);
      break;
    case '3':
      userData = orm.findProfesorById(userId);
      fillProfessorForm(userData);
      break;
    case '4':
      userData = orm.findStudentById(userId);
      fillAlumForm(userData);
      break;
    default:
      break;
  }

  function fillAdminForm(userData) {
    $util('#id').value = userData.id_usuario;
    $util('#name').value = userData.primer_nombre;
    $util('#sec-name').value = userData.segundo_nombre;
    $util('#last-name').value = userData.primer_apeliido;
    $util('#sec-last-name').value = userData.segundo_apellido;
    $util('#email').value = userData.correo;
  }

  function fillProfessorForm(userData) {
    $util('#id').value = userData.id_usuario;
    $util('#name').value = userData.primer_nombre;
    $util('#sec-name').value = userData.segundo_nombre;
    $util('#last-name').value = userData.primer_apeliido;
    $util('#sec-last-name').value = userData.segundo_apellido;
    $util('#email').value = userData.correo;
  }

  function fillAlumForm(userData) {
    $util('#id').value = userData.id_usuario;
    $util('#name').value = userData.primer_nombre;
    $util('#sec-name').value = userData.segundo_nombre;
    $util('#last-name').value = userData.primer_apeliido;
    $util('#sec-last-name').value = userData.segundo_apellido;
    $util('#email').value = userData.correo;
    $util('#weight').value = userData.peso;
    $util('#height').value = userData.altura;
  }

  function validateChanges(e) {
    e.preventDefault();
    var formInputs = document.querySelectorAll('#edit-student-form .js-form-field:required');

    if(!validate.emptyFields(formInputs)) {
      var validForm = validate.fieldsValue('edit-student-form');

      if (!validForm[1].length) {
        saveData();
      }
    }

    window.scrollTo(0, 0);
  }

  function saveDataByUser(puserInfo) {
    var appLS = storage.get('appLS') || {};

    switch (userRol) {
      case '1':
      case '2':
      case '3':
        orm.updateUserInfo(puserInfo);
        break;

      case '4':
        orm.updateUserInfo(puserInfo);
        orm.updateAlumInfo(puserInfo.weight,puserInfo.height,puserInfo.identification);
        break;
    }

    appLS.logguedInUser = {
      id: logguedInUser.id,
      name: puserInfo.firstName,
      lastName: puserInfo.firstLastName,
      email: puserInfo.email,
      rol: logguedInUser.rol
    };

    storage.put('appLS', appLS);
  }

  function saveData() {
    var formInputs = document.querySelectorAll('#edit-student-form .js-form-field');
    var messageBox = document.querySelector('.js-login-msg');
    var userInfo = misc.buildDataObject(formInputs);
    saveDataByUser(userInfo);

    messageBox.classList.remove('is-hidden');
    messageBox.classList.remove('alert-failure');
    messageBox.classList.add('alert-success');
    messageBox.innerHTML = msg.key.saveSuccess;

    formInputs.forEach(function(input) {
      input.classList.remove('error');
    });
  }
});