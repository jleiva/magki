$util('#btn-save').on('click', validateChanges);
document.querySelector('#bday').addEventListener('change', calculateAge);
document.querySelector('#academy').addEventListener('change', function(e) {
  fillProfessor(e);
});

fillAcademies();
loadStudentData();

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#edit-student-form .js-form-field:required');

  if (!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('edit-student-form');

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

function loadStudentData() {
  var studentId = localStorage.getItem('studentCode');
  var studentInfo = findById(studentId);
  var formInputs = document.querySelectorAll('#edit-student-form .js-form-field');
  var profesorInfo = orm.findProfesorById(studentInfo.professor);

  fillProfessor();

  document.querySelector('#id').value = studentInfo.identification;
  document.querySelector('#name').value = studentInfo.firstName;
  document.querySelector('#sec-name').value = studentInfo.secondName;
  document.querySelector('#last-name').value = studentInfo.firstLastName;
  document.querySelector('#sec-last-name').value = studentInfo.secondLastName;
  document.querySelector('#bday').value = studentInfo.bday;
  document.querySelector('#email').value = studentInfo.mail;
  document.querySelector('#weight').value = studentInfo.weight;
  document.querySelector('#height').value = studentInfo.height;
  document.querySelector('#gender').value = studentInfo.gender;
  document.querySelector('#age').value = studentInfo.age;
  document.querySelector('#part-tournament').value = studentInfo.tournaments;
  document.querySelector('#win-tournament').value = studentInfo.winTournaments;
  document.querySelector('#exhibition').value = studentInfo.exhibitions;
  document.querySelector('#academy').value = studentInfo.academy;
  document.querySelector('#professor').text = profesorInfo.name;
  document.querySelector('#belt').value = studentInfo.beltGrade;

  if (studentInfo.status) {
    misc.enabledFieldsOnEdit(formInputs);
    document.querySelector('#id').disabled = true; 
    document.querySelector('#age').disabled = true;
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function getUpdateData() {
  var formInputs = document.querySelectorAll('#edit-student-form .js-form-field');
  var studentInfo = misc.buildDataObject(formInputs);
  var status = document.querySelector('#able').checked;
  studentInfo.status = status;
  
  if (status) {
    misc.enabledFieldsOnEdit(formInputs);
    document.querySelector('#id').disabled = true;
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }

  updateStudentInfo(studentInfo); 
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
  var professorList = getProfList();
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

function calculateAge() {
  var bday = document.querySelector('#bday').value;
  var today = new Date();
  var birthDate = new Date(bday);
  var age = today.getFullYear() - birthDate.getFullYear();
  document.querySelector('#age').value = age;
}
