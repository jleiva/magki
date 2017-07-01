'use strict';
var db = require('../../database/storage');
var loadData = require('../../helpers/load-data');
var msg = require('../../helpers/messages');
var formValidation = require('../../helpers/form-validation');
var user = require('../../modules/user');

var login = (function() {
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
})();

function bindEvents() {
  var submitBtn = document.getElementById('submit-login');
  submitBtn.addEventListener('click', validateForm);
}

function validateForm(e) {
  e.preventDefault;
  console.log('validando' + e.currentTarget);
}

// https://www.sitepoint.com/jquery-document-ready-plain-javascript/
document.addEventListener('DOMContentLoaded', function(){
  loadData.init();
  bindEvents();
});

