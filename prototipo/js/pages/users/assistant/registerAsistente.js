document.querySelector('#btn-save').addEventListener('click', registerAssist);

function registerAssist(e) {
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

function validateForm() {
  var idField = document.querySelector('#id');
  var $alertBox = $util('.js-login-msg');

  if (findById(idField) == null) {
    getRegisterData();

    if ($alertBox) {
      $alertBox.removeClass('alert-failure')
        .addClass('alert-success')
        .html(msg.key.saveSuccess);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin',
      '<span class="note alert alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
    }
  } else {
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

function getRegisterData(){
  var formInputs = document.querySelectorAll('#register-user .js-form-field');
  var userInfo = misc.buildDataObject(formInputs);
  userInfo.status = true;
  userInfo.role = 'Asistente';
  register(userInfo);
  misc.disableFieldsOnSave(formInputs);
}
