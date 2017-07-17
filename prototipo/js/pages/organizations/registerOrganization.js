$util('#btn-save').on('click', registerOrganization);

function registerOrganization(e) {
  e.preventDefault();
  var formInputs = document.querySelectorAll('#organization-form .js-form-field:required');

  if(!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('organization-form');

    if (!validForm[1].length) {
      validateForm();
    }
  }

  window.scrollTo(0, 0);
}

function getRegisterData() {
  var formInputs = document.querySelectorAll('#organization-form .js-form-field');
  var organizationData = misc.buildDataObject(formInputs);
  organizationData.status = true;
  addOrganization(organizationData);
  misc.disableFieldsOnSave(formInputs);
}

function validateForm() {
  var codeField = document.querySelector('#code');
  var codeValue = codeField.value;
  var $alertBox = $util('.js-login-msg');
  var organizationInfo = findOrgByCode(codeValue);

  if (!organizationInfo) {
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
        .html(msg.key.orgDuplicate);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert alert-failure js-login-msg">' +msg.key.orgDuplicate+'</span>');
    }

    document.querySelector('#code').addClass('error');
  }
}
