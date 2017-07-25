$util('#btn-save').on('click', validateChanges);

loadAssistData();

function validateChanges(e) {
  var $alertBox = $util('.js-login-msg');
  e.preventDefault();
  var formInputs = document.querySelectorAll('#edit-assist-form .js-form-field:required');

  if (!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('edit-assist-form');

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
        '<span class="note alert alert-failure js-login-msg">Ya hay un usuario registrado con la identificación indicada; no se realizó el registro</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

function loadAssistData() {
  var formInputs = document.querySelectorAll('#edit-assist-form .js-form-field');
	var assistId = localStorage.getItem('assistCode');
	var assistInfo = findById(assistId);

  document.querySelector('#id').value = assistInfo.id;
  document.querySelector('#name').value = assistInfo.name;
  document.querySelector('#secName').value = assistInfo.name2;
  document.querySelector('#lastName').value = assistInfo.lastname;
  document.querySelector('#secLastName').value = assistInfo.lastname2;
  document.querySelector('#email').value = assistInfo.email;

  if (assistInfo.status == true) {
    misc.enabledFieldsOnEdit(formInputs);
    document.querySelector('#able').checked = true;
    document.querySelector('#id').disabled = true;
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function getUpdateData() {
  var formInputs = document.querySelectorAll('#edit-assist-form .js-form-field');
  var userInfo = misc.buildDataObject(formInputs);
  var status = document.querySelector('#able').checked;

  userInfo.status = status;

	if (status) {
    misc.enabledFieldsOnEdit(formInputs);
    document.querySelector('#able').checked = true;
    document.querySelector('#id').disabled = true;
	} else {
    misc.disableFieldsOnEdit(formInputs);
	}

  updateAsistInfo(userInfo);
}
