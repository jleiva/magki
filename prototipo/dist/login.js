/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var storage = {
  put: function(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  },

  get: function(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  erase: function(key) {
    localStorage.removeItem(key);
  },
  
  drop: function() {
    localStorage.clear();
  }
};

module.exports = storage;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var db = __webpack_require__(0);
var loadData = __webpack_require__(2);
var msg = __webpack_require__(3);
var formValidation = __webpack_require__(4);
var user = __webpack_require__(5);

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



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var db = __webpack_require__(0);

var loadData = {
  init: function() {
    var appLS = db.get() || {};

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
};

module.exports = loadData;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var msg = {
  login: {
    emailAndPasswordInvalid: 'Correo electronio o contraseña incorrectos',
    emailAndPasswordRequired: 'Los campos de correo electronico y Contraseña son requeridos'
  }
};

module.exports = msg;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var formValidation = {
  validate: function() {
    
  }
};

module.exports = formValidation;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Encargado de todas las operaciones relacionadas con los usuarios.
 */
 var user = {
  login: function(email, password) {
    var result = {
      success: false,
      message: null
    };

    return result;
  },

  logout: function() {
    var result = {
      success: false,
      message: null
    };

    return result;
  },

  register: function() {
    var result = {
      success: false,
      message: null
    };

    return result;
  },

  isLoggedIn: function() {
    var result = {
      success: false,
      message: null
    };

    return result;
  },

  getCurrentUser: function() {
    var result = {
      email: null,
      fullName: null
    };

    return result;
  }
};

module.exports = user;

/***/ })
/******/ ]);