document.querySelector('#save').addEventListener('click', registerProfe);
document.querySelector('#bday').addEventListener('change', calculateAge);

fillAcademies();

function registerProfe(e) {
  e.preventDefault();

  var formInputs = document.querySelectorAll('#register-user .js-event-field:required');

  if(!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('register-user');

    if (!validForm[1].length) {
      validateForm();
    }
  }

  window.scrollTo(0, 0);
}

function getRegisterData(){
  var id = '';
  var firstName = '';
  var secName = '';
  var lastName= '';
  var secLastName = '';
  var bday = '';
  var email = '';
  var phone = '';
  var gender = '';
  var age = '';
  var academy = '';
  var belt = '';
  var profe = 'Profesor';
  var professorInfo = [];

  id = document.querySelector('#id').value;
  firstName = document.querySelector('#name').value;
  secName = document.querySelector('#secName').value;
  lastName = document.querySelector('#lastName').value;
  secLastName = document.querySelector('#secLastName').value;
  bday = document.querySelector('#bday').value;
  email = document.querySelector('#email').value;
  phone = document.querySelector('#phone').value;
  gender= document.querySelector('#gender').value;
  age = document.querySelector('#age').value;
  academy = document.querySelector('#academy').value;
  belt = document.querySelector('#belt').value;

  professorInfo.push(id,firstName,secName,lastName,secLastName,bday,email,phone,gender,age,academy,belt,profe);
  registrar(professorInfo);

}

function validateForm() {
  var idField = document.querySelector('#id');
  var codeValue = idField.value;
  var $alertBox = $util('.js-login-msg');

  if (findById(codeValue) == null) {
    getRegisterData();

    if ($alertBox) {
      $alertBox.removeClass('alert-failure')
        .addClass('alert-success')
        .html(msg.key.saveSuccess);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin',
      '<span class="note alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
    }

  } else {
    if ($alertBox) {
      $alertBox
        .removeClass('alert-success')
        .addClass('alert-failure')
        .html('Esta Identificacion ya existe, no se realizó el registro');
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin',
        '<span class="note alert-failure js-login-msg">Esta Identificacion ya existe, no se realizó el registro</span>');
    }
  }
}

function fillAcademies() {
 var academiesList = obtenerListaRegistros();
 var academiesField = document.querySelector('#academy');


 for(var i = 0; i < academiesList.length; i++) {
   var options = document.createElement("option");
     var academyName = academiesList[i]['nombreAcademia'];
     options.text = academyName;
     options.className = 'btn-action-event js-edit-event';
     academiesField.add(options);
 }
}

function calculateAge() {
  var bday = document.querySelector('#bday').value;
  var today = new Date();
  var birthDate = new Date(bday);
  var age = today.getFullYear() - birthDate.getFullYear();
  document.querySelector('#age').value = age;
  document.querySelector('#age').disabled = true;
}
