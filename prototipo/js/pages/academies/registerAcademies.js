$util('#save').on('click', validarAcademy);

function validarAcademy(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var validForm;
    
  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('register-academy');

    // no hay errores
    if (!validForm[1].length) {
      datosRegistro();
      
      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.academySucess);
          disableFields();
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert-success js-login-msg">' + msg.key.academySucess+ '</span>');
          disableFields();
      }
    }
  }

  window.scrollTo(0, 0);
}

//interface
function datosRegistro(){
	var formInputs = document.querySelectorAll('#register-academy .js-event-field');
	var academyData = buildEventDataObject(formInputs);
	registrar(academyData);
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



