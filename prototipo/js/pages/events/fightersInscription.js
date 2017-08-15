document.addEventListener('DOMContentLoaded', function() {
  var queryUrl = misc.getQueryParams(document.location.search);
  var eventId = queryUrl.eventId;
  var eventInfo = orm.findEventbyId(eventId);

  fillEventData(eventInfo);
  fillAcademiesSelect();
  fillGeneralUsersTable();

  function fillEventData(eventInfo) {
    var tournamentName = document.querySelector('.js-event-name');
    tournamentName.innerHTML = eventInfo[0].nombre;
  }

  function fillAcademiesSelect() {
    var academiesList = orm.findActiveAcad();
    var academiesField = document.querySelector('#academy-name');
    var tournamentName = document.querySelector('.js-event-name');
    var noAcademiesOpt = document.querySelector('.js-empty-academy');

    for(var i = 0; i < academiesList.length; i++) {
       var options = document.createElement('option');        
       var academyName = academiesList[i]['nombre_academia'];

       noAcademiesOpt.text = 'Seleccione una Academia...';
       options.value = academyName;
       options.innerHTML = options.value;
       academiesField.add(options); 
    }

    document.querySelector('select[name="academy-name"]').addEventListener('change', function(e) {
      fillUsersByAcademyTable(e);
    });
  }

  function fillGeneralUsersTable() {
    var alumList = orm.findActiveStudents();

    if (alumList.length) {
      fillTable(alumList);
    }
  }

  function fillUsersByAcademyTable(e) {
    var pacademyName = e.target.value;
    var tbody = document.querySelector('#tblFighters tbody');
    var $error = document.querySelector('.no-data');
    var alumList;

    if (pacademyName) {
      alumList = orm.findActiveStudentsByAcademy(pacademyName);
      
      if (alumList.length) {
        fillTable(alumList);
      } else {
        tbody.innerHTML = '';
        $error.style.display = 'block';
      }
    } else {
      fillGeneralUsersTable();
    }
  }

  function fillTable(alumList) {
    var tbody = document.querySelector('#tblFighters tbody');
    var $error = document.querySelector('.no-data');

    $error.style.display = 'none';
    tbody.innerHTML = '';

    for (var i=0; i < alumList.length; i++) {
      var row = tbody.insertRow();
      var idColumn = row.insertCell();
      var nameColumn = row.insertCell();
      var beltColumn = row.insertCell();
      var estadoColumn = row.insertCell();
      var editColumn = row.insertCell();
      var isRegUser = orm.findEventoPorAlumno(eventId, alumList[i].id_usuario);
      var userEstado = 'No inscrito';

      if (isRegUser.length) {
        switch(isRegUser[0].estado) {
          case '0':
            userEstado = 'No inscrito';
          break;

          case '1':
            userEstado = 'Inscrito';
          break;

          case '2':
            userEstado = 'Desinscrito';
          break;

          case '3':
            userEstado = 'Descalificado';
          break;

          default:
            userEstado = 'No inscrito';
            break;
        }
      }
      
      idColumn.innerHTML = alumList[i].id_usuario;
      nameColumn.innerHTML = alumList[i].primer_nombre + ' ' + alumList[i].segundo_nombre + ' ' + alumList[i].primer_apeliido + ' ' + alumList[i].segundo_apellido;
      beltColumn.innerHTML = alumList[i].nombre_cinturon;
      estadoColumn.innerHTML = userEstado;

      var editLink = document.createElement('a');
      var unsbLink = document.createElement('a');
      var linkName = document.createTextNode('Inscribir');
      var unsbName = document.createTextNode('Desinscribir');
      editLink.appendChild(linkName);
      unsbLink.appendChild(unsbName);
      editLink.href = 'formulario-inscripcion.php' + '?id=' + alumList[i].id_usuario + '&' + 'eventId=' + eventId;
      unsbLink.href = '#';
      editLink.className = 'btn-action-event';
      unsbLink.className = 'btn-action-event link-disable';
      editColumn.appendChild(editLink);
      editColumn.appendChild(unsbLink);

      if (isRegUser.length) {
        editLink.classList.add('link-disable');
        editLink.href = '#';
        unsbLink.classList.remove('link-disable');
        unsbLink.href = 'formulario-desinscripcion.php' + '?id=' + alumList[i].id_usuario + '&' + 'eventId=' + eventId;
      }
    }
  }
});