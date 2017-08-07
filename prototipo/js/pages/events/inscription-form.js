document.addEventListener('DOMContentLoaded', function() {
  $util('#btn-save').on('click', validateChanges);
  var queryUrl = misc.getQueryParams(document.location.search);
  var userId = queryUrl.id;
  var eventId = queryUrl.eventId;
  var userData = orm.findStudentById(userId);
  var eventData = orm.findEventbyId(eventId);

  fillEventData(eventData)
  loadUserData(userData);

  function fillEventData(eventData) {
    var eventCategories = orm.findEventCategories(eventId);
    var eventName = document.querySelector('.js-event-name');
    var userCategories;

    userCategories = eventCategories.filter(function(cat) {
      return userData[0].genero === cat.genero;
    });

    populateCategorySelect(userCategories);
    eventName.innerHTML = eventData[0].nombre;
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

  function loadUserData(userData) {
    document.querySelector('#academy').value = userData[0].nombre_academia;
    document.querySelector('#athleteName').value = userData[0].primer_nombre + ' ' + userData[0].segundo_nombre + ' ' + userData[0].primer_apeliido + ' ' + userData[0].segundo_apellido;
    document.querySelector('#athleteId').value = userData[0].id_usuario;
    fillTeacher(userData[0].id_profesor);
  }

  function saveAthleteData() {
    var userId = document.querySelector('#athleteId').value;
    var academy = document.querySelector('#academy').value;
    var category = document.querySelector('#category').value;
    var weight = document.querySelector('#weight').value;
    var userInfo = {};
    userInfo.id_alumno = userId;
    userInfo.id_categoria = category;
    userInfo.id_peso = weight;
    userInfo.id_evento = eventId;
    userInfo.id_academia = userData[0].id_academia;

    orm.registerAthleteEvent(userInfo);
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

      if(!validForm[1].length) {
        saveAthleteData();

        if ($alertBox) { 
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.saveSuccess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin', 
        '<span class="note alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
      }

      } else {
        if ($alertBox) { 
          $alertBox
          .removeClass('alert-success')
          .addClass('alert-failure')
          .html('Este código ya existe, no se realizó el registro');
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert-failure js-login-msg">Este código ya existe, no se realizó el registro</span>');
        }
      }
    }

    window.scrollTo(0, 0);
  }
});