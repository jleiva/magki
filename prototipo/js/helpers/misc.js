var misc = (function(window, undefined) {
  // var query = getQueryParams(document.location.search);
  // query.foo
  function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
  }

  // Espera un Array de Inputs
  function buildDataObject(formInputs) {
    var data = {};

    formInputs.forEach(function(input) {
      var fName = input.name;
      var fValue = input.value;

      data[fName] = fValue;
    });

    return data;
  }

  // https://davidwalsh.name/javascript-debounce-function
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // Espera un Array de Inputs
  // Recorre cada Input y pone el atributo
  // disabled en true
  function disableFields(pFormInputs) {
    pFormInputs.forEach(function(input) {
      input.setAttribute('disabled', true);
    });
  }

  // Deshabilita Inputs y boton de Guardar
  function disableFieldsOnSave(pFormInputs) {
    disableFields(pFormInputs);
    document.querySelector('#btn-save').disabled = true;
  }

  // Deshabilita Inputs y boton de Guardar
  function disableFieldsOnEdit(pFormInputs) {
    disableFields(pFormInputs);
    document.querySelector('#disable').checked = true;
  }

  // Espera un Array de Inputs
  // Recorre cada Input y pone el atributo
  // disabled en false
  function enabledFields(pFormInputs) {
    pFormInputs.forEach(function(input) {
      input.disabled = false;
    });

    document.querySelector('#able').checked = true;
  }

  function enabledFieldsOnEdit(pFormInputs) {
    enabledFields(pFormInputs);
    document.querySelector('#able').checked = true;
  }

  // Lo idea es tener solo uno, pero tenemos problemas de datos
  function populateOrgSelect(target, optList, array) {
    if (!target){
      return false;
    }
    else if(array) {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item.nombre;
        opt.innerHTML = opt.value;
        opt.setAttribute('id', item.id_organizacion);
        select.appendChild(opt);
      });
    } else {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item.nombre;
        opt.innerHTML = opt.value;
        opt.setAttribute('id', item.id_organizacion);
        select.appendChild(opt);
      });
    }
  }

  function populateSponsorSelect(target, optList, array) {
    if (!target){
      return false;
    }
    else if(array) {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item[1];
        opt.innerHTML = opt.value;
        select.appendChild(opt);
      });
    } else {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item.id;
        opt.innerHTML = item.name;
        opt.setAttribute('id', item.id);
        select.appendChild(opt);
      });
    }
  }

  function populateSponsorProducts(target, optList, array) {
    if (!target){
      return false;
    }
    else if(array) {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item[1];
        opt.innerHTML = opt.value;
        select.appendChild(opt);
      });
    } else {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item.id;
        opt.innerHTML = item.name;
        opt.setAttribute('id', item.id);
        select.appendChild(opt);
      });
    }
  }

  // Populate SELECT
  // Usage: populateSelect('selectElementId', arrayItems);
  function populateSelect(target, optList, array) {
    if (!target){
      return false;
    }
    else if(array) {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item[1];
        opt.innerHTML = opt.value;
        select.appendChild(opt);
      });
    } else {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item.nombreLugar;
        opt.innerHTML = opt.value;
        select.appendChild(opt);
      });
    }
  }

  function modifiedDateFormat(pdate) {
    var date = new Date(pdate);
    var day = Number(date.getDate() + 1);
    var month = Number(date.getMonth() + 1);
    var year = date.getFullYear();
    if(day < 10){
      day = '0' + day;
    }
    
    if(month < 10){
      month = '0' + month;
    }

    var newFormat = day + '-' + month + '-' + year;
    
    return newFormat;
  }

  return {
    buildDataObject: buildDataObject,
    debounce: debounce,
    disableFieldsOnEdit: disableFieldsOnEdit,
    disableFieldsOnSave: disableFieldsOnSave,
    enabledFieldsOnEdit: enabledFieldsOnEdit,
    populateSelect: populateSelect,
    populateOrgSelect: populateOrgSelect,
    populateSponsorSelect: populateSponsorSelect,
    populateSponsorProducts: populateSponsorProducts,
    getQueryParams: getQueryParams,
    modifiedDateFormat: modifiedDateFormat
  };
})(window);
