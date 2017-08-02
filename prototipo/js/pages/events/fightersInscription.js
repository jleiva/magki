document.addEventListener('DOMContentLoaded', function() {
  fillAcademiesSelect();
  fillGeneralUsersTable();
});

function fillAcademiesSelect() {
  var appLS = storage.get('appLS') || {};
  var eventId = appLS.eventToEdit || {};
  var eventInfo = orm.findEventbyId(eventId);
  var academiesList = orm.findActiveAcad();
  var academiesField = document.querySelector('#academy-name');
  var tournamentName = document.querySelector('.js-event-name');
  var noAcademiesOpt = document.querySelector('.js-empty-academy');

  tournamentName.innerHTML = eventInfo.eventName;

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
  var alumList = orm.findActiveStudentsByAcademy(pacademyName);

  if (alumList.length) {
    fillTable(alumList);
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
    var editColumn = row.insertCell();

    idColumn.innerHTML = alumList[i].id_usuario;
    nameColumn.innerHTML = alumList[i].primer_nombre + ' ' + alumList[i].segundo_nombre + ' ' + alumList[i].primer_apeliido + ' ' + alumList[i].segundo_apellido;
    beltColumn.innerHTML = alumList[i].nombre_cinturon;

    var editLink = document.createElement('a');
    var linkName = document.createTextNode('Inscribir');
    editLink.appendChild(linkName);
    editLink.href = 'formulario-inscripcion.php' + '?id=' + alumList[i].id_usuario;
    editLink.className = 'btn-action-event js-edit-event';
    editLink.name = alumList[i].id_usuario;
    editColumn.appendChild(editLink);
  }
}