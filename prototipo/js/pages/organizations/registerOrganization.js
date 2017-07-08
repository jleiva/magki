$util('#btn-save').on('click', registerOrganization);

function registerOrganization(e) {
  e.preventDefault();
  var formInputs = document.querySelectorAll('#organization-form .js-event-field:required');

  if(!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('organization-form');

    if (!validForm[1].length) {
      validateForm();
    }
  }

  window.scrollTo(0, 0);
}

function getRegisterData() {
  var code = '';
  var organizationName = '';
  var organizationType = '';
  var description = '';
  var condicion = '';
  var organizationInfo = [];


  code = document.querySelector('#code').value;
  organizationName = document.querySelector('#organization-name').value;
  organizationType  = document.querySelector('#organization-type');
  var selected = organizationType.options[organizationType.selectedIndex].text;
  description = document.querySelector('#description').value;

  organizationInfo.push(code, organizationName, selected, description, true);
  addOrganization(organizationInfo);
  disableFields();
  document.querySelector('#btn-save').disabled = true;
}

function validateForm() {
  var codeField = document.querySelector('#code');
  var codeValue = codeField.value;
  var $alertBox = $util('.js-login-msg');

  if (findOrgByCode(codeValue) == null) {
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
        .html('Este código ya existe, no se realizó el registro');
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert-failure js-login-msg">Este código ya existe, no se realizó el registro</span>');
    }
  }
}

function disableFields() {
  document.querySelector('#code').disabled = true;
  document.querySelector('#organization-name').disabled = true;
  document.querySelector('#organization-type').disabled = true;
  document.querySelector('#description').disabled = true;
}



