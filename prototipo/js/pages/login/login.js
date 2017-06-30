'use strict';

var login = (function(window, $, db) {
  var appLS = {};
  var messages = {
    emailAndPasswordInvalid: 'Correo electronio o contraseña incorrectos',
    emailAndPasswordRequired: 'Los campos de Correo Electronico y Contraseña son requeridos'
  };

  function initLogin() {
    $('#submit-login').on('click', validateForm);

    initLS();
  }

  function initLS() {
    appLS.users = [{
      id: 503240386,
      name: 'Jose',
      lastName: 'Leiva',
      email: 'leivajd@gmail.com',
      password: '2105'
    },
    {
      id: 103240386,
      name: 'Juan',
      lastName: 'Patas',
      email: 'patasd@gmail.com',
      password: '2106'
    },
    {
      id: 111710816,
      name: 'Maria',
      lastName: 'Martinez',
      email: 'maria@gmail.com',
      password: '2107'
    }];

    db.put('appUsersLs', appLS);
  }

  function validateForm(e) {
    e.preventDefault();
    var valid = $('form').valid();
    var inputs = document.querySelectorAll('input:required');

    inputs.removeClass('error');

    if (valid[1].length) {
      valid[1].forEach(function(element) {
        element.addClass('error');
      });
    } else {
      validate();
    }
  }

  function validate(e) {
    var username = $('#username').val();
    var password = $('#password').val();
    var $alertBox = $('.js-login-msg');

    if (validateCredentials(username, password)) {
      window.location.replace('dashboard.html');
    } else {
      if ($alertBox) {
        $alertBox.html(messages.emailAndPasswordInvalid);
      } else {
        $('.js-login-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert-failure js-login-msg">' + messages.emailAndPasswordInvalid + '</span>');
      }
    }

    //   $('#username').addClass('error');
    //   $('#password').addClass('error');

    //   if ($alertBox) { 
    //   $alertBox.html(messages.emailAndPasswordRequired);
    //   } else {
    //     $('.js-login-form').insertAdjacentHTML('afterbegin', 
    //     '<span class="note alert-failure js-login-msg">' + messages.emailAndPasswordRequired + '</span>');
    //   }
  }

  function validateCredentials(userMail, userPassword) {
    var usersLS = getUsersInfo();
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

      db.put('appUsersLs', appLS);

      isValid = true;
    }

    return isValid;
  }

  function getUsersInfo() {
    var usersInfo = db.get('appUsersLs');

    if (usersInfo === null) {
        usersInfo = [];
    };

    return usersInfo;
  }

  return {
    initLS: initLS,
    initLogin: initLogin
  }

})(window, $util, app.storage);


(function(document, window, domIsReady, undefined) {
  domIsReady(function() {
    login.initLogin();
  });
})(document, window, domIsReady);

