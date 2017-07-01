var validation = (function() {
  //private
  function notEmptyFields() {
    var formInputs = document.querySelectorAll('input:required');
    var emptyInputs = [];
    var hasEmpty = false;

    formInputs.forEach(function(formInput) {
      if(formInput.value === '') {
        inputError(formInputs);
        return;
      }
    });

    return hasEmpty;
  }

  function inputError(inputs) {
    inputs.forEach(function(formInput) {
      if(formInput.value === '') {
        formInput.classList.add('error');
      }
    });
  }

  // todo lo retornado es publico
  return {
    notEmptyFields: notEmptyFields
  }
}());