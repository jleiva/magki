'use strict';

var login = (function(window) {
  var appLS = {};

  function initLogin() {
    $util('#submit-login').on('click', validateForm);
    loadData.init();
  }

  function initRecover() {
    $util('#submit-login').on('click', validateEmail);
    loadData.init();
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

      // no hay errores
      if (!validForm[1].length) {
        var username = $util('#username').val();
        var password = $util('#password').val();
        var $alertBox = $util('.js-login-msg');

        if (validateCredentials(username, password)) {
          window.location.replace('perfil-admin.php');
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
    var usersLS = getUsersInfo(appLS);
    var validCredentials;
    var isValid;

    validCredentials = usersLS.users.find(function findUser(user) {
      return user.email === userMail;
    });

    if (validCredentials && validCredentials.password === userPassword) {
      appLS.logguedInUser = {
        id: validCredentials.id,
        name: validCredentials.name,
        lastName: validCredentials.lastName
      };

      storage.put('appLS', appLS);

      isValid = true;
    }

    return isValid;
  }

  function getUsersInfo(data) {
    var usersInfo = data;

    if (usersInfo.users === null) {
        usersInfo = [];
    };

    return usersInfo;
  }

  return {
    initLogin: initLogin,
    initRecover: initRecover
  }

})(window);

