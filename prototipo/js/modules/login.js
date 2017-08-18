'use strict';

var login = (function(window) {
  var appLS = {};

  function initLogin() {
    document.querySelector('#submit-login').addEventListener('click', validateForm);
  }

  function initRecover() {
    $util('#submit-login').on('click', validateEmail);
  }

  function validateEmail(e) {
    e.preventDefault();
    var validForm;
    var formInputs = document.querySelectorAll('#login-form .js-form-field');

    if (!validate.emptyFields(formInputs)) {
      validForm = validate.fieldsValue('login-form');

      // no hay errores
      if (!validForm[1].length) {
        var username = $util('#username').val();
        var $alertBox = $util('.js-login-msg');

        if (validateRecoverEmail(username)) {
          $util('#username').removeClass('error');
          
          if ($alertBox) {
            $alertBox.removeClass('alert-failure')
              .addClass('alert-success')
              .html(msg.key.successRecover);
          } else {
            $util('.js-form').insertAdjacentHTML('afterbegin', 
            '<span class="note alert-success js-login-msg">' + msg.key.successRecover+ '</span>');
          }
        } else {
          if ($alertBox) {
            $alertBox.html(msg.key.failRecover);
          } else {
            $util('.js-form').insertAdjacentHTML('afterbegin', 
            '<span class="note alert-failure js-login-msg">' + msg.key.failRecover + '</span>');
          }
        }
      }
    }
  }

  function validateForm(e) {
    e.preventDefault();
    var validForm;
    var formInputs = document.querySelectorAll('#login-form .js-form-field');

    if (!validate.emptyFields(formInputs)) {
      validForm = validate.fieldsValue('login-form');

      if (!validForm[1].length) {
        var username = document.querySelector('#username').value;
        var password = document.querySelector('#password').value;
        var $alertBox = $util('.js-login-msg');

        if (validateCredentials(username, password)) {
          window.location.replace('perfil-usuario.php');
        } else {
          if ($alertBox) {
            $alertBox.html(msg.key.emailAndPasswordInvalid);
          } else {
            $util('.js-form').insertAdjacentHTML('afterbegin', 
            '<span class="note alert-failure js-login-msg">' + msg.key.emailAndPasswordInvalid + '</span>');
          }
        }
      }
    }
  }

  function validateRecoverEmail(userMail) {
    var appLS = storage.get('appLS') || {};
    var usersLS = getUsersInfo(appLS);
    var validCredentials;
    var isValid;

    validCredentials = usersLS.users.find(function findUser(user) {
      if (user.email === userMail) {
        isValid = true;
      }
    });

    return isValid;
  }

  function validateCredentials(userMail, userPassword) {
    var appLS = storage.get('appLS') || {};
    var userData = findUserCredentials(userPassword, userMail);
    var validCredentials;
    var isValid;

    if (userData) {
      appLS.logguedInUser = {
        id: userData.id_usuario,
        name: userData.primer_nombre,
        lastName: userData.primer_apeliido,
        email: userData.correo,
        rol: userData.id_tipo,
        isFirstAccess: userData.primer_acceso
      };

      storage.put('appLS', appLS);
      isValid = true;
    }

    return isValid;
  }

  function findUserCredentials(userPass, userEmail) {
    var userData = [];
    var request = $.ajax({
      url: 'services/iniciar_sesion.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'userPass': userPass,
        'userEmail': userEmail
      }      
    });

    request.done(function(data){
      userData = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return userData;
  }

  return {
    initLogin: initLogin,
    initRecover: initRecover
  }

})(window);

