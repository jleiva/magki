document.querySelector('#save').addEventListener('click', registerAssist);
document.querySelector('#bday').addEventListener('change', calculateAge);

function registerAssist(e) {
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
  var lastName = '';
  var secLastName = '';
  var bday = '';
  var email = '';
  var phone = '';
  var gender = '';
  var age = '';
  var asistente = 'Asistente';

  var assistentInfo =[];

  id = document.querySelector('#id').value;
  firstName = document.querySelector('#name').value;
  secName  = document.querySelector('#secName').value;
  lastName  = document.querySelector('#lastName').value;
  secLastName  = document.querySelector('#secLastName').value;
  bday = document.querySelector('#bday').value;
  email  = document.querySelector('#email').value;
  phone = document.querySelector('#phone').value;
  gender = document.querySelector('#gender').value;
  age = document.querySelector('#age').value;

  assistentInfo.push(id,firstName,secName,lastName,secLastName,bday,email,phone,gender,age,asistente);
  registrar(assistentInfo);

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

function calculateAge() {
  var bday = document.querySelector('#bday').value;
  var today = new Date();
  var birthDate = new Date(bday);
  var age = today.getFullYear() - birthDate.getFullYear();
  document.querySelector('#age').value = age;
  document.querySelector('#age').disabled = true;
}
