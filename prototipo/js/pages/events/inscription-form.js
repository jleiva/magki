document.addEventListener('DOMContentLoaded', function() {
  $util('#btn-save').on('click', validateChanges);
  var queryUrl = misc.getQueryParams(document.location.search);
  var userId = queryUrl.id;
  var eventId = queryUrl.eventId;
  var userData = orm.findStudentById(userId);
  var eventData = orm.findEventbyId(eventId);
  var eventCategories = orm.findEventCategories(eventId);

  fillEventData()
  loadUserData();

  function fillEventData() {
    var eventName = document.querySelector('.js-event-name');
    var eventWeight = document.querySelector('.js-event-weightDate');
    var eventWeightDate = misc.modifiedDateFormat(eventData[0].fecha_pesaje);
    var userCategories;

    userCategories = eventCategories.filter(function(cat) {
      return userData.genero === cat.genero;
    });

    populateCategorySelect(userCategories);
    eventName.innerHTML = eventData[0].nombre;
    eventWeight.innerHTML = eventWeightDate;
  }

  function populateCategorySelect(optList) {
    select = document.getElementById('category');

    optList.forEach(function(item) {
      var opt = document.createElement('option');
      opt.value = item.id_categoria;
      opt.innerHTML = item.description;
      select.appendChild(opt);
    });
  }

  function loadUserData() {
    document.querySelector('#academy').value = userData.nombre_academia;
    document.querySelector('#athleteName').value = userData.primer_nombre + ' ' + userData.segundo_nombre + ' ' + userData.primer_apeliido + ' ' + userData.segundo_apellido;
    document.querySelector('#athleteId').value = userData.id_usuario;
    document.querySelector('#athleteAge').value = userData.edad;
    document.querySelector('#athleteBelt').value = userData.nombre_cinturon;
    fillTeacher(userData.id_profesor);
  }

  function saveAthleteData() {
    var userId = document.querySelector('#athleteId').value;
    var academy = document.querySelector('#academy').value;
    var category = document.querySelector('#category').value;
    var weight = document.querySelector('#weight').value;
    var userInfo = {};
    var isRegUser = orm.findEventoPorAlumno(eventId, userId);
    userInfo.id_alumno = userId;
    userInfo.id_categoria = category;
    userInfo.id_peso = weight;
    userInfo.id_evento = eventId;
    userInfo.id_academia = userData.id_academia;
    userInfo.estado = 1;

    if (isRegUser.length) {
      orm.updateAthleteEvent(userInfo);
    } else {
      orm.registerAthleteEvent(userInfo);
    }
  }

  function fillTeacher(idUser) {
    var professor = document.querySelector('#teacher');
    var profData = orm.findProfesorById(idUser);
    
    document.querySelector('#teacher').value = profData.primer_nombre + ' ' + profData.segundo_nombre + ' ' + profData.primer_apeliido + ' ' + profData.segundo_apellido;
  }

  function validateChanges(e) {
    e.preventDefault();
    var $alertBox = $util('.js-login-msg');
    var formInputs = document.querySelectorAll('#inscription-form .js-form-field:required');

    if(!validate.emptyFields(formInputs)) {
       var validForm = validate.fieldsValue('inscription-form');
       var isValidAge = validateAge();

       if(!validForm[1].length) {
          if (!isValidAge) {
            $alertBox.removeClass('is-hidden')
              .addClass('alert-failure')
              .html('Edad del atleta no se encuentra dentro de un rango válido para la categoría seleccionada.');
            
            window.scrollTo(0, 0);
            
            return;
          }

          saveAthleteData();

          $alertBox.removeClass('is-hidden')
            .removeClass('alert-failure')
            .addClass('alert-success')
            .html(msg.key.saveSuccess);
       }
    }

    window.scrollTo(0, 0);
  }

  function validateAge() {
    var categorySelected = document.querySelector('#category');
    var categorySelectedValue = document.querySelector('#category').value;
    var ageInput = document.querySelector('#athleteAge');
    var userAge = parseInt(userData.edad);
    var categryData = eventCategories.find(function(cat) {
      return categorySelectedValue === cat.id_categoria;
    });
    var minAge = parseInt(categryData.edad_min);
    var maxAge = parseInt(categryData.edad_max);
    var isValidAge = false;

    if (userAge >= minAge && userAge <= maxAge) {
      isValidAge = true;
    }

    if (isValidAge) {
      categorySelected.classList.remove('error');
      ageInput.classList.remove('error');
    } else {
      categorySelected.classList.add('error');
      ageInput.classList.add('error');
    }

    return isValidAge;
  }
});