$util('#btn-save').on('click', validateChanges);
loadAcademyData();

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#editAcademy-form .js-form-field:required');
  var validForm;
    
  if (!validate.emptyFields(formInputs)) {
    validForm = validate.fieldsValue('editAcademy-form');
    
    if (!validForm[1].length) {
      datosEdit();
      
      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.academyUpdate);          
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert alert-success js-login-msg">' + msg.key.academyUpdate+ '</span>');
      } 
    }
  }
  
  window.scrollTo(0, 0);
}

function datosEdit() {
  var formInputs = document.querySelectorAll('#editAcademy-form .js-form-field');
  var academyData = misc.buildDataObject(formInputs);
  var status = document.querySelector('#able').checked;

  if (status) {
    misc.enabledFieldsOnEdit(formInputs);
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }

  academyData.status = status;
  getUpdateData(academyData);
}

function loadAcademyData() {
  var index = localStorage.getItem('academyID');
  var academyList = obtenerListaRegistros();
  var formInputs = document.querySelectorAll('#editAcademy-form .js-form-field');
  var count = index - 1;

  document.querySelector('#nombreAcademia').value = academyList[count]['nombreAcademia'];
  document.querySelector('#telefonoAcademia').value = academyList[count]['telefonoAcademia'];
  document.querySelector('#emailAcademia').value = academyList[count]['emailAcademia'];
  document.querySelector('#NombreEncargado').value = academyList[count]['NombreEncargado'];
  document.querySelector('#primerApellidoEncargado').value = academyList[count]['primerApellidoEncargado'];
  document.querySelector('#segundoApellidoEncargado').value = academyList[count]['segundoApellidoEncargado'];
  document.querySelector('#direccionAcademia').value = academyList[count]['direccionAcademia'];
  document.querySelector('#latitudAcademia').value = academyList[count]['latitudAcademia'];
  document.querySelector('#longitudAcademia').value = academyList[count]['longitudAcademia'];

  if (academyList[count]['status']) {
    document.querySelector('#able').checked = true;
    misc.enabledFieldsOnEdit(formInputs);
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function getUpdateData(academyData) {
  var academyList = obtenerListaRegistros();
  var index = localStorage.getItem('academyID') - 1;

  academyList[index] = academyData;
	localStorage.setItem('listaAcademiasLS', JSON.stringify(academyList));
}