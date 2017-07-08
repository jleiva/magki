$util('#save').on('click', validateChanges);

loadAcademyData();

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var validForm;
    
  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('editAcademy-form');
    
    // no hay errores
    if (!validForm[1].length) {
      datosEdit();
      
      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.academyUpdate);
          loadAcademyData();
          
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert-success js-login-msg">' + msg.key.academyUpdate+ '</span>');
          loadAcademyData();
      }
        
    }
  }
  
  window.scrollTo(0, 0);
}

function datosEdit() {
	var formInputs = document.querySelectorAll('#editAcademy-form .js-event-field');
	var academyData = buildEventDataObject(formInputs);
	getUpdateData(academyData);
}

function buildEventDataObject(formInputs) {
  var eventData = {};

  formInputs.forEach(function(input) {
    var fName = input.name;
    var fValue = input.value;

    eventData[fName] = fValue;
  });

  return eventData;
}

function disableFields() {
  var elems = document.getElementsByTagName('input');
  var len = elems.length;
  
  for (var i = 0; i < len; i++) {
    elems[i].disabled = true;
  }
}

function enabledFields() {
  var elems = document.getElementsByTagName('input');
  var len = elems.length;
  
  for (var i = 0; i < len; i++) {
    elems[i].disabled = false;
  }
}

function loadAcademyData() {
  var index = localStorage.getItem('academyID');
  var academyList = obtenerListaRegistros();
	var count = index - 1;

  // Setear Inputs
	document.querySelector('#nombreAcademia').value = academyList[count]['nombreAcademia'];
	document.querySelector('#telefonoAcademia').value = academyList[count]['telefonoAcademia'];
  document.querySelector('#emailAcademia').value = academyList[count]['emailAcademia'];
  document.querySelector('#NombreEncargado').value = academyList[count]['NombreEncargado'];
  document.querySelector('#primerApellidoEncargado').value = academyList[count]['primerApellidoEncargado'];
  document.querySelector('#segundoApellidoEncargado').value = academyList[count]['segundoApellidoEncargado'] || '';
  document.querySelector('#direccionAcademia').value = academyList[count]['direccionAcademia'];
  document.querySelector('#latitudAcademia').value = academyList[count]['latitudAcademia'];
  document.querySelector('#longitudAcademia').value = academyList[count]['longitudAcademia'];
    
  if (academyList[count]['status']) {
		document.querySelector('#able').checked = true;
    enabledFields();
	} else {
		disableFields();
	}
}

function getUpdateData() {
  var academyList = obtenerListaRegistros();
  var index = localStorage.getItem('academyID') - 1;

	nombreAcademia = document.querySelector('#nombreAcademia').value;
	telefonoAcademia = document.querySelector('#telefonoAcademia').value;
	emailAcademia = document.querySelector('#emailAcademia').value;
	NombreEncargado = document.querySelector('#NombreEncargado').value;
  primerApellidoEncargado = document.querySelector('#primerApellidoEncargado').value;
  segundoApellidoEncargado = document.querySelector('#segundoApellidoEncargado').value || '';
  direccionAcademia = document.querySelector('#direccionAcademia').value;
  latitudAcademia = document.querySelector('#latitudAcademia').value;
  longitudAcademia = document.querySelector('#longitudAcademia').value;
  var status = document.querySelector('#able').checked;

  var entry = {
    "nombreAcademia": nombreAcademia,
    "telefonoAcademia": telefonoAcademia,
    "emailAcademia": emailAcademia,
    "NombreEncargado": NombreEncargado,
    "primerApellidoEncargado": primerApellidoEncargado,
    "segundoApellidoEncargado": segundoApellidoEncargado,
    "direccionAcademia": direccionAcademia,
    "latitudAcademia": latitudAcademia,
    "longitudAcademia": longitudAcademia,
    "status": status
  };

  academyList[index] = entry;
	localStorage.setItem('listaAcademiasLS', JSON.stringify(academyList));
	//window.location.href = 'academias.html';
}

function disableFields() {
	document.querySelector('#disable').checked = true;
	document.querySelector('#nombreAcademia').disabled = true;
	document.querySelector('#telefonoAcademia').disabled = true;
	document.querySelector('#emailAcademia').disabled = true;
	document.querySelector('#NombreEncargado').disabled = true;
  document.querySelector('#primerApellidoEncargado').disabled = true;
  document.querySelector('#segundoApellidoEncargado').disabled = true;
  document.querySelector('#direccionAcademia').disabled = true;
  document.querySelector('#latitudAcademia').disabled = true;
  document.querySelector('#longitudAcademia').disabled = true;
}