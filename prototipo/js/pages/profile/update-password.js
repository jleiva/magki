document.addEventListener('DOMContentLoaded', function() {
  var logguedInUser = orm.findLogguedUser();
  var $alertBox = document.querySelector('.js-login-msg');
  var goodPassword;

  document.querySelector('#btn-save').addEventListener('click', updatePassword);

  newPassword.onblur = function() {
    var newPassword = document.querySelector('#newPassword');
    var newPasswordVal = newPassword.value;
    var secLevel = validate.checkPassword(newPasswordVal);
    var passwordNotes = document.querySelector('.js-password-notes');
    var passwordInputs = document.querySelectorAll('.js-form-field');

    $alertBox.classList.remove('is-hidden');

    if (secLevel == 10) {
      $alertBox.classList.remove('warning');
      $alertBox.classList.remove('alert-failure');
      $alertBox.classList.add('alert-success');
      passwordInputs.forEach(function(input) {
        input.classList.remove('error');
      });
      $alertBox.innerHTML = msg.key.passwordStrong;
      goodPassword = true;
    } else if (secLevel == 5) {
      $alertBox.classList.add('warning');
      passwordNotes.classList.remove('alert-failure');
      passwordInputs.forEach(function(input) {
        input.classList.remove('error');
      });
      $alertBox.innerHTML = msg.key.passwordMedium;
      goodPassword = true;
    } else {
      $alertBox.classList.add('alert-failure');
      passwordNotes.classList.add('alert-failure');
      $alertBox.innerHTML = msg.key.passwordWrongSec;
    }
  };

  function updatePassword(e) {
    e.preventDefault();
    var newPasswordVal = document.querySelector('#newPassword').value;
    var isValidForm = validateForm();

    if (isValidForm && goodPassword) {
      $alertBox.classList.remove('alert-failure');
      $alertBox.classList.add('alert-success');
      $alertBox.innerHTML = msg.key.passwordUpdate;
      orm.updateUserPassword(logguedInUser.id, newPasswordVal);
    }
  }

  function validateForm() {
    var formInputs = document.querySelectorAll('#update-password-form .js-form-field');
    var isValid = false;

    if (!validate.emptyFields(formInputs)) {
      var newPassword = document.querySelector('#newPassword');
      var newPasswordVal = newPassword.value;
      var confirmPassword = document.querySelector('#confirmPassword');
      var confirmPasswordVal = confirmPassword.value;

      if (newPasswordVal === confirmPasswordVal) {
        isValid = true;
      } else {
        $alertBox.innerHTML = msg.key.passwordMatch;
        $alertBox.classList.remove('warning');
        $alertBox.classList.add('alert-failure');
        newPassword.classList.add('error');
        confirmPassword.classList.add('error');
      }
    }

    return isValid;
  }
});