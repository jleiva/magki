var validate = (function(window, undefined) {
  function checkPassword(str) {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.*[!@#\$%\^&\*])(?=.{6,})");
    var secLevel = 0;

    if (strongRegex.test(str)) {
      secLevel = 10;
    } else if (mediumRegex.test(str)) {
      secLevel = 5;
    }

    return secLevel;
  }

  function dateEqualOrGreatThanToday() {
    var today = new Date();
  }

  function getToday() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd<10) {
      dd = '0'+dd
    }

    if (mm<10) {
      mm = '0'+mm
    }

    today = yyyy + '-' + mm + '-' + dd;

    return today;
  }

  function validateBday(bday) {
    var startDate = bday.value;
    var endDate = new Date().toISOString().slice(0,10);
    var endDateMsg = document.querySelector('.js-end-date-error');
    var invalid = false;

    if ((Date.parse(endDate) < Date.parse(startDate))) {
      endDateMsg.removeClass('is-hidden').addClass('alert-failure');
      bday.addClass('error');
      endDate.value = '';
      invalid = true;
    } else {
      
    } 

    return invalid;
  }

  function getToday() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd<10) {
      dd = '0'+dd
    } 

    if (mm<10) {
      mm = '0'+mm
    } 

    today = yyyy + '-' + mm + '-' + dd;

    return today;
  }

  function validateStartDate(sDate) {
    var startDate = sDate.value;
    var today = getToday();
    var startDateMsg = document.querySelector('.js-start-date-error');

    if ((Date.parse(startDate) < Date.parse(today))) {
      startDateMsg.removeClass('is-hidden').addClass('alert-failure');
      sDate.addClass('error');
      sDate.value = '';
    } else {
      startDateMsg.addClass('is-hidden');
      sDate.removeClass('error');
    }
  }

  function validateDateRange(sDate, eDate) {
    var startDate = sDate.value;
    var endDate = eDate.value;
    var endDateMsg = document.querySelector('.js-end-date-error');

    if ((Date.parse(endDate) < Date.parse(startDate))) {
      endDateMsg.removeClass('is-hidden').addClass('alert-failure');
      eDate.addClass('error');
      eDate.value = '';
    } else {
      endDateMsg.addClass('is-hidden');
      eDate.removeClass('error');
    }
  }

  function greatThanZero(value) {
    return value >= 0;
  }

  function emptyFields(inputs) {
    var formInputs = inputs;
    var $alertBox = document.querySelector('.js-login-msg');
    var emptyInputs = [];
    var hasEmpty = false;

    formInputs.forEach(function(formInput) {
      if(formInput.value === '') {
        formInput.addClass('error');
        hasEmpty = true;
      } else {
        formInput.removeClass('error');
      }
    });

    if (hasEmpty) {
      if ($alertBox) {
        $alertBox.html(msg.key.fieldsRequired)
          .removeClass('is-hidden')
          .removeClass('warning')
          .removeClass('alert-success')
          .addClass('alert-failure');
      } else {
        document.querySelector('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert alert-failure js-login-msg">' + msg.key.fieldsRequired + '</span>');
      }
    }

    return hasEmpty;
  }

  function formatErrorMessage(errors) {
    var $alertBox = document.querySelector('.js-login-msg');

    errors.forEach(function(errorInput) {
      errorInput.addClass('error');
    });

    if ($alertBox) {
      $alertBox.html(msg.key.wrongFormat);
    } else {
      document.querySelector('.js-form').insertAdjacentHTML('afterbegin', 
      '<span class="note alert alert-failure js-login-msg">' + msg.key.wrongFormat + '</span>');
    }
  }

  function fieldsValue(formId) {
    var form = document.getElementById(formId);
    var formInputs = document.querySelectorAll('#' + formId + ' .js-form-field:required');

    if (!form || form.nodeName !== "FORM") {
      return;
    }
    var i, j, e = [], q = [];
    for (i = formInputs.length - 1; i >= 0; i = i - 1) {
      if (formInputs[i].name === "") {
        continue;
      }

      //Valid
      if(formInputs[i].required) {
        switch (formInputs[i].nodeName) {
          case 'INPUT':
            switch (formInputs[i].type) {
              case 'email':
                var re = /\S+@\S+\.\S+/;
                if(!re.test(formInputs[i].value)) {
                  e.push(formInputs[i]);
                }
                q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                break;
              case 'tel': 
              case 'number':
                var numb = parseInt(formInputs[i].value);
                if ( typeof numb !== 'number' | isNaN(numb)) {
                  e.push(formInputs[i]);
                }
                q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                break;
                case 'text':
                case 'hidden':
                case 'password':
                case 'button':
                case 'reset':
                case 'submit':
                    q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                    break;
                case 'checkbox':
                case 'radio':
                  if (formInputs[i].checked) {
                    q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                  }                       
                  break;
                case 'file':
                  break;
            }
          break;           
          case 'TEXTAREA':
            q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
          break;
          case 'SELECT':
            switch (formInputs[i].type) {
            case 'select-one':
              q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
              break;
            case 'select-multiple':
              for (j = formInputs[i].options.length - 1; j >= 0; j = j - 1) {
                if (formInputs[i].options[j].selected) {
                  q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].options[j].value));
                }
              }
              break;
            }
            break;
          case 'BUTTON':
            switch (formInputs[i].type) {
              case 'reset':
              case 'submit':
              case 'button':
                q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
              break;
            }
          break;
        }
      }
    }

    if (e.length) {
      formatErrorMessage(e);
    }
    return [q,e];
}
  
  return {
    emptyFields: emptyFields,
    fieldsValue: fieldsValue,
    checkPassword: checkPassword,
    validateDateRange: validateDateRange,
    validateStartDate: validateStartDate,
    validateBday: validateBday,
    getToday: getToday
  };
})(window);