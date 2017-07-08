$util('#save').on('click', validateChanges);
loadPlaceData();

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var validForm;
    
  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('editPlace-form');
    
    // no hay errores
    if (!validForm[1].length) {
      datosEdit();
      
      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.placeUpdate);
          loadPlaceData();
          
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert-success js-login-msg">' + msg.key.placeUpdate+ '</span>');
          loadPlaceData();
      }
        
    }
  }
  window.scrollTo(0, 0);
}

function datosEdit(){
	var formInputs = document.querySelectorAll('#editPlace-form .js-event-field');
	var placeData = buildEventDataObject(formInputs);
	getUpdateData(placeData);
	
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

function disableFields(){
  var elems = document.getElementsByTagName('input');
  var len = elems.length;
  
  for (var i = 0; i < len; i++) {
    elems[i].disabled = true;
  }
}

function enabledFields(){
  var elems = document.getElementsByTagName('input');
  var len = elems.length;
  
  for (var i = 0; i < len; i++) {
    elems[i].disabled = false;
  }
}

function loadPlaceData() {
  var index = localStorage.getItem('placeID');
  var placeList = obtenerListaRegistros();
	var count = index - 1;
    
    // Setear Inputs
	document.querySelector('#nombreLugar').value = placeList[count]['nombreLugar'];
	document.querySelector('#direccionLugar').value = placeList[count]['direccionLugar'];
  document.querySelector('#latitudLugar').value = placeList[count]['latitudLugar'];
  document.querySelector('#longitudLugar').value = placeList[count]['longitudLugar'];
  document.querySelector('#telefonoEncargado').value = placeList[count]['telefonoEncargado'];
  document.querySelector('#horarioLugar').value = placeList[count]['horarioLugar'];
  document.querySelector('#capacidadLugar').value = placeList[count]['capacidadLugar'];
    
  if(placeList[count]['status']) {
		document.querySelector('#able').checked = true;
    enabledFields();
	} else {
		disableFields();
	}
}

function getUpdateData() {
  var placeList = obtenerListaRegistros();
  var index = localStorage.getItem('placeID') - 1;

	nombreLugar = document.querySelector('#nombreLugar').value;
	direccionLugar = document.querySelector('#direccionLugar').value;
	latitudLugar = document.querySelector('#latitudLugar').value;
	longitudLugar = document.querySelector('#longitudLugar').value;
  telefonoEncargado = document.querySelector('#telefonoEncargado').value;
  horarioLugar = document.querySelector('#horarioLugar').value;
  capacidadLugar = document.querySelector('#capacidadLugar').value;
  var status = document.querySelector('#able').checked;

  var entry = {
    "nombreLugar": nombreLugar,
    "direccionLugar": direccionLugar,
    "latitudLugar": latitudLugar,
    "longitudLugar": longitudLugar,
    "telefonoEncargado": telefonoEncargado,
    "horarioLugar": horarioLugar,
    "capacidadLugar": capacidadLugar,
    "status": status
  };

  placeList[index] = entry;
	localStorage.setItem('listaLugaresLS', JSON.stringify(placeList));
}

function disableFields() {
  document.querySelector('#disable').checked = true;
  document.querySelector('#nombreLugar').disabled = true;
  document.querySelector('#direccionLugar').disabled = true;
  document.querySelector('#latitudLugar').disabled = true;
  document.querySelector('#longitudLugar').disabled = true;
  document.querySelector('#telefonoEncargado').disabled = true;
  document.querySelector('#horarioLugar').disabled = true;
  document.querySelector('#capacidadLugar').disabled = true;
}