$util('#btn-save').on('click', validateChanges);
loadPlaceData();

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#editPlace-form .js-form-field:required');
  var validForm;
    
  if (!validate.emptyFields(formInputs)) {
    validForm = validate.fieldsValue('editPlace-form');
    
    // no hay errores
    if (!validForm[1].length) {
      datosEdit();
      
      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.placeUpdate);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert alert-success js-login-msg">' + msg.key.placeUpdate+ '</span>');
      } 
    }
  }
  
  window.scrollTo(0, 0);
}

function datosEdit(){
  var formInputs = document.querySelectorAll('#editPlace-form .js-form-field');
  var placeData = misc.buildDataObject(formInputs);
  var status = document.querySelector('#able').checked;

  if (status) {
    misc.enabledFieldsOnEdit(formInputs);
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }

  placeData.status = status;
  getUpdateData(placeData);
}

function loadPlaceData() {
  var index = localStorage.getItem('placeID');
  var placeList = obtenerListaRegistros();
  var formInputs = document.querySelectorAll('#editPlace-form .js-form-field');
  var count = index - 1;

  document.querySelector('#nombreLugar').value = placeList[count]['nombreLugar'];
  document.querySelector('#direccionLugar').value = placeList[count]['direccionLugar'];
  document.querySelector('#latitudLugar').value = placeList[count]['latitudLugar'];
  document.querySelector('#longitudLugar').value = placeList[count]['longitudLugar'];
  document.querySelector('#telefonoEncargado').value = placeList[count]['telefonoEncargado'];
  document.querySelector('#horarioLugar').value = placeList[count]['horarioLugar'];
  document.querySelector('#capacidadLugar').value = placeList[count]['capacidadLugar'];
    
  if (placeList[count]['status']) {
    document.querySelector('#able').checked = true;
    misc.enabledFieldsOnEdit(formInputs);
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function getUpdateData(placeData) {
  var placeList = obtenerListaRegistros();
  var index = localStorage.getItem('placeID') - 1;

  placeList[index] = placeData;
  localStorage.setItem('listaLugaresLS', JSON.stringify(placeList));
}