document.addEventListener('DOMContentLoaded', function() {
  var queryUrl = misc.getQueryParams(window.location.search);
  var userId = queryUrl.id;
  var userGeneral = orm.findUserById(userId);
  var userRole = userGeneral[0].id_tipo;
  var profileNameContainer = document.querySelector('.js-profile-display-name');
  var displayName;
  var nextEventsPage = document.querySelector('#list-events');
  var $noData = document.querySelector('.no-data');
  var userData;
  var eventsListData;


  if (userRole === '3') {
    userData = orm.findProfesorById(userId);
    fillProfData(userData);
  } else if (userRole === '4') {
    userData = orm.findStudentById(userId);
    fillAlumData(userData);
  }

  displayName = userData.primer_nombre + ' ' + userData.segundo_nombre + ' ' + userData.primer_apeliido + ' ' + userData.segundo_apellido;
  profileNameContainer.html(displayName);

  if (nextEventsPage) {
    eventsListData = orm.findNextActiveEventsUser(userId);
    
    if (eventsListData.length) {
      $noData.hide();
      fillEventTable(eventsListData);
    }
  }

  function fillAlumData(userData) {
    var alumProf = orm.findProfesorById(userData.id_profesor);
    var alumnData = document.querySelectorAll('.js-alum-data');

    alumnData.forEach(function(item) {
      item.classList.remove('is-hidden');
    });

    $util('#academia').innerHTML = userData.nombre_academia;
    $util('#profesor').innerHTML = alumProf.primer_nombre + ' ' + alumProf.segundo_nombre + ' ' + alumProf.primer_apeliido + ' ' + alumProf.segundo_apellido;
    $util('#grado').innerHTML = userData.nombre_cinturon;
    $util('#edad').innerHTML = userData.edad + ' años';
    $util('#peso').innerHTML = userData.peso + ' kg';
    $util('#altura').innerHTML = userData.altura + ' cm';
    $util('#correo').innerHTML = userData.correo;
  }

  function fillProfData(userData) {
    $util('#academia').innerHTML = userData.nombre_academia;
    $util('#grado').innerHTML = userData.nombre_cinturon;
    $util('#edad').innerHTML = userData.edad + ' años';
    $util('#correo').innerHTML = userData.correo;
  }

  function fillEventTable(eventsData) {
    var eventsTable = document.querySelector('#list-events tbody');

    eventsData.forEach(function(data) {
      var eventId = data.id_evento;
      var userCategory = orm.findUserEventCategory(eventId, userId);
      var tr = document.createElement('tr');
      var col1 = document.createElement('td');
      var col2 = document.createElement('td');
      var col3 = document.createElement('td');
      var col4 = document.createElement('td');
      var anchorName = document.createElement('a');
      var nameTxt = document.createTextNode(data.nombre);

      anchorName.appendChild(nameTxt);
      anchorName.href = 'detalle-evento.php' + '?eventId=' + eventId;

      var col2Txt = document.createTextNode(misc.modifiedDateFormat(data.fecha_inicio));
      var col3Txt = document.createTextNode(data.nombre_lugar);
      var col4Txt = document.createTextNode(userCategory[0].description);

      col1.appendChild(anchorName);
      col2.appendChild(col2Txt);
      col3.appendChild(col3Txt);
      col4.appendChild(col4Txt);

      tr.appendChild(col1);
      tr.appendChild(col2);
      tr.appendChild(col3);
      tr.appendChild(col4);

      eventsTable.appendChild(tr);
    });
  }
});