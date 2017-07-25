var getValidBday = misc.debounce(function() {
  validateDateBday();
}, 1000);

document.querySelector('#btn-save').addEventListener('click', registerProfe);
document.querySelector('#bday').addEventListener('change', getValidBday);

fillAcademies();

function registerProfe(e) {
  e.preventDefault();
  var formInputs = document.querySelectorAll('#register-user .js-form-field:required');

  if(!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('register-user');

    if (!validForm[1].length) {
      validateForm();
    }
  }

  window.scrollTo(0, 0);
}

function getRegisterData() {
  var formInputs = document.querySelectorAll('#register-user .js-form-field');
  var userData = misc.buildDataObject(formInputs);

  userData.status = true;
  registrar(userData);
  misc.disableFieldsOnSave(formInputs);
}

function validateForm() {
  var idField = document.querySelector('#id');
  var codeValue = idField.value;
  var $alertBox = $util('.js-login-msg');

  if (findById(codeValue) == null) {
    getRegisterData();
    idField.removeClass('error');
    if ($alertBox) {
      $alertBox.removeClass('alert-failure')
        .addClass('alert-success')
        .html(msg.key.saveSuccess);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin',
      '<span class="note alert alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
    }

  } else {
    idField.addClass('error');
    if ($alertBox) {
      $alertBox
        .removeClass('alert-success')
        .addClass('alert-failure')
        .html('Ya hay un usuario registrado con la identificación indicada; no se realizó el registro');
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin',
        '<span class="note alert alert-failure js-login-msg">Ya hay un usuario registrado con la identificación indicada; no se realizó el registro</span>');
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

function calculateAge(bDateValue) {
  var today = new Date();
  var birthDate = new Date(bDateValue);
  var age = today.getFullYear() - birthDate.getFullYear();
  var months = today.getMonth() - birthDate.getMonth();
  
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.querySelector('#age').value = age;
}

function validateDateBday() {
  var bDate = document.querySelector('#bday');
  var ageField = document.querySelector('#age');
  var bDateValue = document.querySelector('#bday').value;
  var today= new Date();
  var bdayMsg = $util('.js-bday-error');

  if ((Date.parse(bDateValue) < Date.parse(today))) {
    bdayMsg.addClass('is-hidden');
    calculateAge(bDateValue);
  } else {
    bdayMsg.removeClass('is-hidden').addClass('alert-failure');
    bDate.value = '';
    ageField.value = '';
  }
}
