$util('#save').on('click',validarLugar);

function validarLugar(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var validForm;

  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('register-place');

    // no hay errores
    if (!validForm[1].length) {
      datosRegistro();
    
       if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.placeSucess);
          disableFields();
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert-success js-login-msg">' + msg.key.placeSucess+ '</span>');
          disableFields();
          
      }
    }

  }
}
//interface

function datosRegistro(){
	var formInputs = document.querySelectorAll('#register-place .js-event-field');
	var placeData = buildEventDataObject(formInputs);
	registrar(placeData);
	
	}

function buildEventDataObject(formInputs){
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
function disableFields(){
        var elems = document.getElementsByTagName('input');
        var len = elems.length;
        for (var i = 0; i < len; i++) {
        elems[i].disabled = true;
        }
    }

	
