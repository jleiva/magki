var getValidBday = misc.debounce(function() {
  validateDateBday();
}, 1000);

$util('#btn-save').on('click', validateChanges);
document.querySelector('#bday').addEventListener('change', getValidBday);

fillAcademies();
loadProfData();

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#edit-proft-form .js-form-field:required');

  if (!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('edit-proft-form');

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
          .html('Ya hay un usuario registrado con la identificación indicada; no se realizó el registro');
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin',
        '<span class="note alert alert-failure js-login-msg">Ya hay un usuario registrado con la identificación indicada; no se realizó el registro</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

function loadProfData() {
  var profId = localStorage.getItem('profCode');
  var profInfo = findById(profId);
  var formInputs = document.querySelectorAll('#edit-proft-form .js-form-field');

  document.querySelector('#id').value = profInfo.id;
  document.querySelector('#name').value = profInfo.name;
  document.querySelector('#sec-name').value = profInfo.name2;
  document.querySelector('#last-name').value = profInfo.lastname;
  document.querySelector('#sec-last-name').value = profInfo.lastname2;
  document.querySelector('#bday').value = profInfo.bday;
  document.querySelector('#email').value = profInfo.email;
  document.querySelector('#phone').value = profInfo.phone;
  document.querySelector('#gender').value = profInfo.genero;
  document.querySelector('#age').value = profInfo.age;
  document.querySelector('#academy').value =  profInfo.academy;
  document.querySelector('#belt').value = profInfo.beltGrade;

  if (profInfo.status) {
    misc.enabledFieldsOnEdit(formInputs);
    document.querySelector('#able').checked = true;
    document.querySelector('#id').disabled = true;
    document.querySelector('#age').disabled = true;
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function getUpdateData() {
  var formInputs = document.querySelectorAll('#edit-proft-form .js-form-field');
  var profInfo = misc.buildDataObject(formInputs);
  var status = document.querySelector('#able').checked;

  profInfo.status = status;

  if (status){
    misc.enabledFieldsOnEdit(formInputs);
    document.querySelector('#id').disabled = true;
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }

  updateProfInfo(profInfo);
}

function fillAcademies() {
 var academiesList = obtenerListaRegistros();
 var academiesField = document.querySelector('#academy');

 for (var i = 0; i < academiesList.length; i++) {
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
}

function validateDateBday() {
  var bDate = document.querySelector('#bday');
  var ageField = document.querySelector('#age');
  var bDateValue = document.querySelector('#bday').value;
  var today= new Date();
  var bdayMsg = $util('.js-bday-error');

  if ((Date.parse(bDateValue) < Date.parse(today))) {
    bdayMsg.addClass('is-hidden');
    calculateAge();
  } else {
    bdayMsg.removeClass('is-hidden').addClass('alert-failure');
    bDate.value = '';
    ageField.value = '';
  }
}
