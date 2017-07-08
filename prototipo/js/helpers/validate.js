var validate = (function(window, undefined) {
  function checkPassword(str) {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(str);
  }

  function validateDateRange(sDate, eDate) {
    var startDate = sDate.value;
    var endDate = eDate.value;
    var endDateMsg = $util('.js-end-date-error');

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
    var formInputs = inputs || document.querySelectorAll('input:required');
    var $alertBox = $util('.js-login-msg');
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
        $alertBox.html(msg.key.fieldsRequired);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert-failure js-login-msg">' + msg.key.fieldsRequired + '</span>');
      }
    }

    return hasEmpty;
  }

  function formatErrorMessage(errors) {
    var $alertBox = $util('.js-login-msg');

    if ($alertBox) {
      $alertBox.html(msg.key.wrongFormat);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin', 
      '<span class="note alert-failure js-login-msg">' + msg.key.wrongFormat + '</span>');
    }
  }

  function fieldsValue(formId) {
    var form = document.getElementById(formId);
    var formInputs = document.querySelectorAll('input:required');

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
    validateDateRange: validateDateRange
  };
})(window);