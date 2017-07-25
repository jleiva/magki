$util('#btn-save').on('click', validarAcademy);

function validarAcademy(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#register-academy .js-form-field:required');
  var validForm;
    
  if (!validate.emptyFields(formInputs)) {
    validForm = validate.fieldsValue('register-academy');

    // no hay errores
    if (!validForm[1].length) {
      datosRegistro();

      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.academySucess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert alert-success js-login-msg">' + msg.key.academySucess+ '</span>');
      }   
    }
  }

  window.scrollTo(0, 0);
}

function datosRegistro(){
  var formInputs = document.querySelectorAll('#register-academy .js-form-field'); // Change js-event-field by js-form-field
  var academyData = misc.buildDataObject(formInputs);

  academyData.status = true;
  registrar(academyData);
  misc.disableFieldsOnSave(formInputs);
}
