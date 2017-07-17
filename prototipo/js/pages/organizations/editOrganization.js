$util('#btn-save').on('click', validateChanges);
loadOrganizationData();

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#edit-organization-form .js-form-field:required');

  if (!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('edit-organization-form');

    if (!validForm[1].length) {
      getUpdateData();
    
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
          .html('Este código ya existe, no se realizó el registro');
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert alert-failure js-login-msg">Este código ya existe, no se realizó el registro</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

function loadOrganizationData() {
  var organizationCode = localStorage.getItem('entityCode');
  var organizationInfo = {};
  organizationInfo = findOrgByCode(organizationCode);
  var formInputs = document.querySelectorAll('#edit-organization-form .js-form-field');

  document.querySelector('#code').value = organizationInfo.codeNumber;
  document.querySelector('#organizationName').value = organizationInfo.organization;
  document.querySelector('#organizationType').value = organizationInfo.organizationType;
  document.querySelector('#description').value = organizationInfo.description;
  
  if (organizationInfo.status) {
    misc.enabledFieldsOnEdit(formInputs);
    document.querySelector('#code').disabled = true;
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function getUpdateData() {
  var formInputs = document.querySelectorAll('#edit-organization-form .js-form-field');
  var organizationData = misc.buildDataObject(formInputs);
  var status = document.querySelector('#able').checked;
  organizationData.status = status;
  
  if (status) {
    misc.enabledFieldsOnEdit(formInputs);
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }

  updateOrgInformation(organizationData);
}
