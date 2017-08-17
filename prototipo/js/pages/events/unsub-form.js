document.addEventListener('DOMContentLoaded', function() {
  $util('#btn-save').on('click', saveAthleteData);
  var queryUrl = misc.getQueryParams(document.location.search);
  var userId = queryUrl.id;
  var eventId = queryUrl.eventId;
  var userData = orm.findStudentById(userId);
  var eventData = orm.findEventbyId(eventId);
  var userCategory = orm.findUserEventCategory(eventId, userId);

  fillEventData()
  loadUserData();

  function fillEventData() {
    var eventName = document.querySelector('.js-event-name');
    var eventWeight = document.querySelector('.js-event-weightDate');
    var eventWeightDate = misc.modifiedDateFormat(eventData[0].fecha_pesaje);

    eventName.innerHTML = eventData[0].nombre;
    eventWeight.innerHTML = eventWeightDate;
  }

  function loadUserData() {
    document.querySelector('#academy').value = userData.nombre_academia;
    document.querySelector('#athleteName').value = userData.primer_nombre + ' ' + userData.segundo_nombre + ' ' + userData.primer_apeliido + ' ' + userData.segundo_apellido;
    document.querySelector('#athleteId').value = userData.id_usuario;
    document.querySelector('#athleteAge').value = userData.edad;
    document.querySelector('#athleteBelt').value = userData.nombre_cinturon;
    document.querySelector('#athleteCatAge').value = userCategory[0].description;
    fillTeacher(userData.id_profesor);
  }

  function saveAthleteData(e) {
    e.preventDefault();
    var userId = document.querySelector('#athleteId').value;
    var unsubDesc = document.querySelector('#description').value;
    var $alertBox = $util('.js-login-msg');
    var data = {};
    data.id_alumno = userId;
    data.id_evento = eventId;
    data.desc = unsubDesc;

    orm.unsubUserFromEvent(data);
    $alertBox.removeClass('is-hidden')
            .removeClass('alert-failure')
            .addClass('alert-success')
            .html(msg.key.saveSuccess);
    window.scrollTo(0, 0);
  }

  function fillTeacher(idUser) {
    var professor = document.querySelector('#teacher');
    var profData = orm.findProfesorById(idUser);
    
    document.querySelector('#teacher').value = profData.primer_nombre + ' ' + profData.segundo_nombre + ' ' + profData.primer_apeliido + ' ' + profData.segundo_apellido;
  }
});