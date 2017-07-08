$util('#btn-save').on('click',validateChanges);

fillAcademy();
fillTeacher();
fillHeader();

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

function fillAcademy() {
	var academyRelated = localStorage.getItem('academyRelated');
	var infoAcademy = obtenerListaRegistros();
	var academy = document.querySelector('#academy');

	for(var i = 0; i < infoAcademy.length; i++) {
		if(infoAcademy[i]['nombreAcademia'] == academyRelated) {
			
			academy.value = infoAcademy[i]['nombreAcademia'];
			academy.disabled = true; 
		}
	}
}

function fillTeacher() {
	var alumnTeacher = document.querySelector('#teacher');
	var studentList = getStudentsList();
	var studentID = JSON.parse(localStorage.getItem('fighterID'));

	for(var i = 0; i < studentList.length; i++) {
		if(studentList[i][0] == studentID) {
			alumnTeacher.value = studentList[i][15]; 
			alumnTeacher.disabled = true;
		}
	}
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




