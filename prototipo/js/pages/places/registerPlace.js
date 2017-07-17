$util('#btn-save').on('click', validarLugar);

function validarLugar(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#register-place .js-form-field:required');
  var validForm;
    
  if (!validate.emptyFields(formInputs)) {
    validForm = validate.fieldsValue('register-place');

    // no hay errores
    if (!validForm[1].length) {
      datosRegistro();
      
      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.placeSucess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert alert-success js-login-msg">' + msg.key.placeSucess+ '</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

//interface
function datosRegistro() {
  var formInputs = document.querySelectorAll('#register-place .js-form-field');
  var placeData = misc.buildDataObject(formInputs);

  placeData.status = true;
  registrar(placeData);
  misc.disableFieldsOnSave(formInputs);
}
