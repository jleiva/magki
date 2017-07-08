document.querySelector('#save').addEventListener('click', registerStudent);
document.querySelector('#bday').addEventListener('change', calculateAge);
fillAcademies();
fillProfessor();

function registerStudent(e) {
  e.preventDefault();
  var formInputs = document.querySelectorAll('#register-user .js-event-field:required');

  if(!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('register-user');

    if (!validForm[1].length) {
      validateForm();
    }
  }

  window.scrollTo(0, 0);
}

function getRegisterData(){

  var id = '';
  var firstName ='';
  var secName = '';
  var lastName = '';
  var secLastName = '';
  var bday = '';
  var email ='';
  var weight = 0;
  var height = 0;
  var gender = '';
  var age = '';
  var pTournament = '';
  var wTournament = '';
  var exhibition = '';
  var academy = '';
  var professor = '';
  var belt = '';
  var student = 'Estudiante';
  var condition = '';

  var studentsInfo =[];

  id = document.querySelector('#id').value;
  firstName = document.querySelector('#name').value;
  secName  = document.querySelector('#sec-name').value;
  lastName  = document.querySelector('#last-name').value;
  secLastName  = document.querySelector('#sec-last-name').value;
  bday = document.querySelector('#bday').value;
  email  = document.querySelector('#email').value;
  weight = document.querySelector('#weight').value;
  height = document.querySelector('#height').value;
  gender = document.querySelector('#gender').value;
  age = document.querySelector('#age').value;
  pTournament  = document.querySelector('#part-tournament').value;
  wTournament  = document.querySelector('#win-tournament').value;
  exhibition  = document.querySelector('#exhibition').value;
  academy  = document.querySelector('#academy').value;
  professor  = document.querySelector('#professor').value;
  belt = document.querySelector('#belt').value;


  studentsInfo.push(id,firstName,secName,lastName,secLastName,bday,email,weight,height,gender,age,pTournament,wTournament,exhibition,academy,professor,belt,true);
  registrar(studentsInfo);
}

function validateForm() {
  var idField = document.querySelector('#id');
  var codeValue = idField.value;
  var $alertBox = $util('.js-login-msg');

  if (findById(codeValue) == null) {
    getRegisterData();
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
        .html('Esta Identificacion ya existe, no se realizó el registro');
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin',
        '<span class="note alert-failure js-login-msg">Esta Identificacion ya existe, no se realizó el registro</span>');
    }
  }
}

function fillAcademies() {

 var academiesList = obtenerListaRegistros();
 var academiesField = document.querySelector('#academy');

 for(var i = 0; i < academiesList.length; i++) {
   var options = document.createElement("option");
     var academyName = academiesList[i]['nombreAcademia'];
     options.text = academyName;
     options.className = 'btn-action-event js-edit-event';
     academiesField.add(options);
 }
}

function fillProfessor() {

 var professorList = getProfList();
 var professorField = document.querySelector('#professor');

 for(var i = 0; i < professorList.length; i++) {
   var options = document.createElement("option");
     var professorName = professorList[i][1]+" "+professorList[i][3];
     options.text = professorName;
     options.className = 'btn-action-event js-edit-event';
     professorField.add(options);
 }
}

function calculateAge() {
  var bday = document.querySelector('#bday').value;
  var today = new Date();
  var birthDate = new Date(bday);
  var age = today.getFullYear() - birthDate.getFullYear();
  document.querySelector('#age').value = age;
  document.querySelector('#age').disabled = true;
}

