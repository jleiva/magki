fillAcademiesSelect();

function fillAcademiesSelect() {
  var appLS = storage.get('appLS') || {};
  var eventId = appLS.eventToEdit || {};
  var eventInfo = orm.findEventbyId(eventId);
  var academiesList = obtenerListaRegistros();
  var academiesField = document.querySelector('#academy-name');
  var tournamentName = document.querySelector('.js-event-name');
  var noAcademiesOpt = document.querySelector('.js-empty-academy');

  tournamentName.innerHTML = eventInfo.eventName;

  for(var i = 0; i < academiesList.length; i++) {
     var options = document.createElement('option');        
     var academyName = academiesList[i]['nombreAcademia'];

     noAcademiesOpt.text = 'Seleccione una Academia...';
     options.value = academyName;
     options.innerHTML = options.value;
     academiesField.add(options); 
  }

  document.querySelector('select[name="academy-name"]').addEventListener('change', function(e) {
    fillUsersTable(e);
  });
}

function fillUsersTable(e) {
  var pacademyName = e.target.value;
  var alumList = getStudentsList();
  var $error = document.querySelector('.no-data');

  if (alumList.length) {
    $error.hide();
    var tbody = document.querySelector('#tblFighters tbody');

    tbody.innerHTML = '';

    for (var i=0; i < alumList.length; i++) {
      if (alumList[0][14] == pacademyName) {
        var row = tbody.insertRow(i);
        var nameColumn = row.insertCell();
        var editColumn = row.insertCell();

        nameColumn.innerHTML = alumList[i][1] + ' ' + alumList[i][2] + ' ' + alumList[i][3] + ' ' + alumList[i][4] ;


        var editLink = document.createElement('a');
        var linkName = document.createTextNode('Inscribir');
        editLink.appendChild(linkName);
        editLink.href = 'formulario-inscripcion.html';
        editLink.className = 'btn-action-event js-edit-event';
        editLink.name = alumList[i][0];
        editColumn.appendChild(editLink);
      }
    }

    var btnEdit = document.querySelectorAll('.js-edit-event');
    btnEdit.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var currentItem = e.currentTarget;
        var fighterID = currentItem.getAttribute('name');
        localStorage.setItem('academyRelated', pacademyName);
        localStorage.setItem('fighterID', fighterID);
      }) 
    }); 
  }else {
    $error.show();
  }
}