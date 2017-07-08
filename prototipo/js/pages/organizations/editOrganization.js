$util('#btn-save').on('click', validateChanges);

loadOrganizationData();

function validateChanges(e) {
  var $alertBox = $util('.js-login-msg');

  e.preventDefault();
  var formInputs = document.querySelectorAll('#edit-organization-form .js-event-field:required');

  if (!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('edit-organization-form');

    if (!validForm[1].length) {
      getUpdateData();
      window.scrollTo(0, 0);
    
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
}

function loadOrganizationData() {
  var organizationCode = localStorage.getItem('entityCode');
  var organizationInfo = findOrgByCode(organizationCode);

  document.querySelector('#code').value = organizationInfo[0];
  document.querySelector('#code').disabled = true;
  document.querySelector('#organization-name').value = organizationInfo[1];
  document.querySelector('#organization-type').value = organizationInfo[2];
  document.querySelector('#description').value = organizationInfo[3];

  if (organizationInfo[4]) {
    document.querySelector('#able').checked = true;
    enableFields();
  } else {
    disableFields();
  }
}

function getUpdateData() {
  var code = '';
  var organizationName = '';
  var organizationType = '';
  var description = '';
  var condition = '';
  var organizationInfo = [];

  code = document.querySelector('#code').value;
  organizationName = document.querySelector('#organization-name').value;
  organizationType  = document.querySelector('#organization-type');
  var selected = organizationType.options[organizationType.selectedIndex].text;
  description = document.querySelector('#description').value;
  var status = document.querySelector('#able').checked;

  organizationInfo.push(code, organizationName, selected, description,status);
  updateOrgInformation(organizationInfo);
  
  if (organizationInfo[4]) {
      document.querySelector('#able').checked = true;
      enableFields();
  } else {
      disableFields();
  }
}

function disableFields() {
  document.querySelector('#disable').checked = true;
  document.querySelector('#code').disabled = true;
  document.querySelector('#organization-name').disabled = true;
  document.querySelector('#organization-type').disabled = true;
  document.querySelector('#description').disabled = true;
}

function enableFields() {
  document.querySelector('#able').checked = true;
  document.querySelector('#organization-name').disabled = false;
  document.querySelector('#organization-type').disabled = false;
  document.querySelector('#description').disabled = false;
}

