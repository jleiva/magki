var logguedIn = orm.findLogguedUser();
var academySelect = document.querySelector('#academy');
var professorList = orm.findActiveProfs();
var getValidBday = misc.debounce(function() {
  validateDateBday();
}, 1000);

fillAcademies();
loadStudentData();

if (logguedIn.rol === '3') {
  var activeProfData = orm.findActiveProfesorById(logguedIn.id);
  academySelect.value = activeProfData.id_academia;
  academySelect.disabled = true;
  prePopulateProfessor();
  document.querySelector('#professor').value = activeProfData.id_usuario;
  document.querySelector('#professor').disabled = true;
}

document.querySelector('#btn-save').addEventListener('click', registerStudent);
document.querySelector('input[id="weight"]').addEventListener('change', validateNumbers);
document.querySelector('input[id="height"]').addEventListener('change', validateNumbers);
document.querySelector('.js-part-tournament-number').hide();
document.querySelector('.js-win-tournament-number').hide();
document.querySelector('.js-exhibitions-number').hide();
document.querySelector('.js-weight-number').hide();
document.querySelector('.js-height-number').hide();
document.querySelector('input[id="part-tournament"]').addEventListener('change', validateNumbers);
document.querySelector('input[id="win-tournament"]').addEventListener('change', validateNumbers);
document.querySelector('input[id="exhibition"]').addEventListener('change', validateNumbers);
document.querySelector('#bday').addEventListener('change', getValidBday);
document.querySelector('#academy').addEventListener('change', function(e) {
  fillProfessor(e);
});

function loadStudentData() {
  var queryUrl = misc.getQueryParams(window.location.search);
  var studentId = queryUrl.id;
  var studentInfo = orm.findStudentById(studentId);
  var formInputs = document.querySelectorAll('#edit-student-form .js-form-field');

  document.querySelector('#id').value = studentInfo.id_usuario;
  document.querySelector('#name').value = studentInfo.primer_nombre;
  document.querySelector('#sec-name').value = studentInfo.segundo_nombre;
  document.querySelector('#last-name').value = studentInfo.primer_apeliido;
  document.querySelector('#sec-last-name').value = studentInfo.segundo_apellido;
  document.querySelector('#bday').value = studentInfo.fecha_nacimiento;
  document.querySelector('#email').value = studentInfo.correo;
  document.querySelector('#weight').value = studentInfo.peso;
  document.querySelector('#height').value = studentInfo.altura;
  document.querySelector('#gender').value = studentInfo.genero;
  document.querySelector('#age').value = studentInfo.edad;
  document.querySelector('#part-tournament').value = parseInt(studentInfo.torneos_participados);
  document.querySelector('#win-tournament').value = parseInt(studentInfo.torneos_ganados);
  document.querySelector('#exhibition').value = parseInt(studentInfo.exhibiciones_participadas);
  document.querySelector('#belt').value = studentInfo.nombre_cinturon; 
  document.querySelector('#academy').value = studentInfo.id_academia;
  

  var professorSelect = document.querySelector('#professor');
  
  for (var i = 0; i < professorList.length; i++) {
    if (professorList[i].nombre_academia == studentInfo.nombre_academia) {

      professorSelect.innerHTML +="<option value='" + professorList[i].id_profesor + "'>"+
      professorList[i].primer_nombre +' '+	professorList[i].primer_apeliido +"</option>";
    }
  }

  var profInfo = orm.findProfesorById(studentInfo.id_profesor);
  for (var i = 0; i < professorSelect.length; i++) {
    if (professorSelect[i].text == profInfo.primer_nombre +' '+	profInfo.primer_apeliido) {
      professorSelect[i].selected = true;
    }
  }

  if (Number(studentInfo.estado) == 1) {
    document.querySelector('#able').checked = true;
    misc.enabledFieldsOnEdit(formInputs);
    document.querySelector('#age').disabled = true;
    document.querySelector('#id').disabled = true;
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function registerStudent(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#edit-student-form .js-form-field:required');

  if(!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('edit-student-form');

    if (!validForm[1].length) {
      getRegisterData();

      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.saveSuccess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin',
        '<span class="note alert alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

function getRegisterData() {
  var formInputs = document.querySelectorAll('#edit-student-form .js-form-field');
  var studentInfo = misc.buildDataObject(formInputs);
  var status = document.querySelector('#able').checked;

  if (status) {
    misc.enabledFieldsOnEdit(formInputs);
    studentInfo.status = 1;
    document.querySelector('#id').disabled = true;
  } else {
    misc.disableFieldsOnEdit(formInputs);
    studentInfo.status = 0;
  }

  orm.updateUserTblInfo(studentInfo);
  orm.updateStudentInfo(studentInfo);
}

function fillAcademies() {
 var academiesList = orm.findActiveAcad();
 var academiesSelect = document.querySelector('#academy');

 for(var i = 0; i < academiesList.length; i++) {
    var options = document.createElement('option');
    var academyName = academiesList[i].nombre_academia;
    options.text = academyName;
    options.value = academiesList[i].id_academia;
    academiesSelect.add(options);
 }
}

function fillProfessor(e) {
  var academySelect = $util('#academy');
  var pacademyName = academySelect.options[academySelect.selectedIndex].innerText;
  var professorList = orm.findActiveProfs();
  var professorField = document.querySelector('#professor');

  professorField.innerHTML = ""
  professorField.innerHTML = '<option value="">Seleccione un profesor...</option>'

  for (var i = 0; i < professorList.length; i++) {
    if (professorList[i].nombre_academia == pacademyName) {

      professorField.innerHTML +="<option value='" + professorList[i].id_profesor + "'>"+
      professorList[i].primer_nombre +' '+	professorList[i].primer_apeliido +"</option>";
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

function validateNumbers(e) {
  var idField = e.target.id;
  var field = e.target;
  var fieldValue = Number(e.target.value);
  var message;

  if (idField == 'weight') {

    message = $util('.js-weight-number');
  } else if (idField == 'height') {

    message = $util('.js-height-number');
  } else if (idField == 'part-tournament') {

    message = $util('.js-part-tournament-number');
  } else if (idField == 'win-tournament') {

    message = $util('.js-win-tournament-number');
  } else {

    message = $util('.js-exhibitions-number');
  }

  if (fieldValue < 0) {

    message.show();
    field.addClass('error');
    message.addClass('alert-failure');
    field.value = 0;
  } else {

    message.hide();
    field.removeClass('error');
    message.removeClass('alert-failure');
  }
}

function prePopulateProfessor() {
    var academySelect = $util('#academy');
    var pacademyName = academySelect.options[academySelect.selectedIndex].innerText;
    var professorField = document.querySelector('#professor');
    var options = document.createElement('option');

    professorField.options.length = 0;
    options.text = 'Seleccionar';
    options.value = '';
    professorField.add(options);

    for (var i = 0; i < professorList.length; i++) {
      if (professorList[i].nombre_academia === pacademyName) {
        var options = document.createElement('option');
        var professorName = professorList[i].primer_nombre + ' ' + professorList[i].primer_apeliido + ' ' + professorList[i].segundo_apellido;
        options.value = professorList[i].id_usuario;
        options.text = professorName;
        professorField.add(options);
      }
    }
  }
