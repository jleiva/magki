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

function getRegisterData() {
  var formInputs = document.querySelectorAll('#register-user .js-form-field');
  var assistantData = misc.buildDataObject(formInputs);
  orm.registrarAsist(assistantData);
  orm.registrarAsistTblAsistente(assistantData);
  misc.disableFieldsOnSave(formInputs);
}

function validateForm() {
  var codeValue = document.querySelector('#id').value;
  //var codeValue = codeField.value;
  var $alertBox = $util('.js-login-msg');
  console.log(codeValue);
  var assistantInfo = orm.findAssistById(codeValue);

  if (!assistantInfo) {
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
        .html(msg.key.assistDuplicate);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert alert-failure js-login-msg">' + msg.key.assistDuplicate +'</span>');
    }

    document.querySelector('#code').addClass('error');
  }
}