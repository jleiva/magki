$util('#btn-save').on('click', saveData);

/*
fillHeader();*/
loadData();

function loadData() {
  var queryUrl = misc.getQueryParams(document.location.search);
  var userId = queryUrl.id;
  var userData = orm.findStudentById(userId);

  document.querySelector('#academy').disabled = true;
  document.querySelector('#teacher').disabled = true;
  document.querySelector('#academy').value = userData[0].nombre_academia;
  fillTeacher(userData[0].id_profesor);
  //document.querySelector('#teacher').value = userData[0].id_profesor;
}

function saveData() {
   var a = document.querySelector('#academy').value;
   var b = document.querySelector('#teacher').value;
   var c = document.querySelector('#category').value;
   var d = document.querySelector('#weight').value;

   var data = [];

   data.push(a, b, d, c );
   localStorage.setItem('fightersList', JSON.stringify(data));
}

function fillHeader() {
  var appLS = storage.get('appLS') || {};
  var eventId = appLS.eventToEdit || {};
  var eventData = orm.findEventbyId(eventId);
  var athleteName = document.querySelector('.js-athlete-name');
  var eventName = document.querySelector('.js-event-name');
  
  eventName.innerHTML = eventData.eventName;

  var fighterID = localStorage.getItem('fighterID');
  var fighterInfo = findById(fighterID);
  var fighterHeader = document.querySelector('.js-athlete-name');
  fighterHeader.innerHTML = fighterHeader.innerHTML + fighterInfo[1] + ' ' + fighterInfo[2] + ' ' + fighterInfo[3] + ' ' + fighterInfo[4] ;
}

function fillTeacher(idUser) {
  var professor = document.querySelector('#teacher');
  var profData = orm.findProfesorById(idUser);
  
}

function validateChanges(e) {
  var $alertBox = $util('.js-login-msg');

  e.preventDefault();
  var formInputs = document.querySelectorAll('#inscription-form .js-event-field:required');

  if(!validate.emptyFields(formInputs)) {
     var validForm = validate.fieldsValue('inscription-form');

    if(!validForm[1].length) {
      registerFighter();
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

function registerFighter() {
  var academy = '';
  var weight = '';
  var teacher = '';
  var category;
  var fighterInformation = [];

  academy = document.querySelector('#academy').value;
  weight = document.querySelector('#weight').value;
  teacher  = document.querySelector('#teacher').value;
  category = document.querySelector('#category');
  var selectedCategory = category.options[category.selectedIndex].text;

  fighterInformation.push(academy, weight, teacher, selectedCategory);
  localStorage.setItem('fighterInfo', JSON.stringify(fighterInformation));
}




