var academiesList;//global
var getValidBday = misc.debounce(function() {
  validateDateBday();
}, 1000);

document.querySelector('#btn-save').addEventListener('click', registerProfe);
document.querySelector('#bday').addEventListener('change', getValidBday);

fillAcademies();

function registerProfe(e) {
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

function getRegisterData() {
  var formInputs = document.querySelectorAll('#register-user .js-form-field');
  var profData = misc.buildDataObject(formInputs);
  var idAcademia  = findIdAcademy(profData.academy);
  //profData.status = true;
  //registrar(profData);
  orm.registrarProf(profData);
  orm.registrarProfTblProfesor(profData,idAcademia);
  misc.disableFieldsOnSave(formInputs);
}

function validateForm() {
  var codeValue = document.querySelector('#id').value;
  //var codeValue = codeField.value;
  var $alertBox = $util('.js-login-msg');
  console.log(codeValue);
  var profInfo = orm.findProfesorById(codeValue);

  if (!profInfo) {
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
        .html(msg.key.profDuplicate);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert alert-failure js-login-msg">' + msg.key.profDuplicate +'</span>');
    }

    document.querySelector('#id').addClass('error');
  }
}

function fillAcademies() {
 academiesList = orm.findActiveAcad();
 var academiesField = document.querySelector('#academy');

 for(var i = 0; i < academiesList.length; i++) {
   var options = document.createElement("option");
     var academyName = academiesList[i].nombre_academia;
     options.text = academyName;
     options.className = 'btn-action-event js-edit-event';
     academiesField.add(options);
 }
}

function findIdAcademy(pname_Academia){
  var idAcademia;
  for(var i = 0; i < academiesList.length; i++) {
     var academyName = academiesList[i].nombre_academia;
     if (pname_Academia === academyName){
      idAcademia = academiesList[i].id_academia;
     }
 }
 return idAcademia;

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

function validateDateBday() {
  var bDate = document.querySelector('#bday');
  var ageField = document.querySelector('#age');
  var bDateValue = document.querySelector('#bday').value;
  var today= new Date();
  var bdayMsg = $util('.js-bday-error');

  if ((Date.parse(bDateValue) < Date.parse(today))) {
    bdayMsg.addClass('is-hidden');
    bDate.removeClass('error');
    calculateAge(bDateValue);
  } else {
    bdayMsg.removeClass('is-hidden').addClass('alert-failure');
    bDate.addClass('error');
    bDate.value = '';
    ageField.value = '';
  }
}
