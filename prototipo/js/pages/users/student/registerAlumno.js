var getValidBday = misc.debounce(function() {
  validateDateBday();
}, 1000);

fillAcademies();
setTournamentValidations();

document.querySelector('#btn-save').addEventListener('click', registerStudent);
document.querySelector('#bday').addEventListener('change', getValidBday);

document.querySelector('#academy').addEventListener('change', function(e) {
  fillProfessor(e);
});

function registerStudent(e) {
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

function setTournamentValidations() {
  var inputs = document.querySelectorAll('.js-tourn-input');

  inputs.forEach(function(btn) {
    var error = document.createElement('p');
    error.innerHTML = 'Número debe ser mayor o igual cero'; 
    error.classList.add('alert-failure');
    error.hide();
    btn.appendChild(error);

    btn.addEventListener('keypress', function(e){
      if(e.keyCode == 13){
        if(btn.value < 0);
        error.show;
      }
    })
  })
}

function getRegisterData() {
  var formInputs = document.querySelectorAll('#register-user .js-form-field');
  var studentsInfo = misc.buildDataObject(formInputs);
  studentsInfo.status = true;
  
  registrar(studentsInfo);
  misc.disableFieldsOnSave(formInputs);
}

function validateForm() {
  var idField = document.querySelector('#id');
  var codeValue = idField.value;
  var $alertBox = $util('.js-login-msg');
  var studentInfo = findById(codeValue);

  if (!studentInfo) {
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
        '<span class="Ya hay un usuario registrado con la identificación indicada; no se realizó el registro</span>');
    }
  }

  window.scrollTo(0, 0);
}

function fillAcademies() {
 var academiesList = obtenerListaRegistros();
 var academiesField = document.querySelector('#academy');

 for(var i = 0; i < academiesList.length; i++) {
    var options = document.createElement('option');
    var academyName = academiesList[i]['nombreAcademia'];
    options.text = academyName;
    academiesField.add(options);
 }
}

function fillProfessor(e) {
  var pacademyName = e.currentTarget.value;
  var professorList = orm.findActiveProfesor();
  var professorField = document.querySelector('#professor');
  var options = document.createElement('option');

  professorField.options.length = 0;
  options.text = 'Seleccionar';
  options.value = '';
  professorField.add(options);

  for (var i = 0; i < professorList.length; i++) {
    if(professorList[i].academy === pacademyName) {
      var options = document.createElement('option');
      var professorName = professorList[i].name + ' ' + professorList[i].lastname + ' ' + professorList[i].lastname2;
      options.value = professorList[i].id;
      options.text = professorName;
      professorField.add(options);
    }
  }
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
