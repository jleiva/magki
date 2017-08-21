document.addEventListener('DOMContentLoaded', function() {
  var logguedIn = orm.findLogguedUser();

  if (logguedIn.rol === '1' || logguedIn.rol === '2') {
    fillAdminTable();
  } else if (logguedIn.rol === '3') {
    fillUserTable();
  }

  function fillUserTable() {
    var userData = orm.findProfesorById(logguedIn.id);
    var studentsList = orm.findActiveStudentsByAcademy(userData.id_academia);
    var $error = document.querySelector('.no-data');

    if (studentsList.length) {
      $error.hide();

      var tbody = document.querySelector('#tblStudents tbody');
      tbody.innerHTML = '';

      studentsList.forEach(function(data, index) {
        var row = tbody.insertRow();
        var codeColumn = row.insertCell();
        var nameColumn = row.insertCell();
        var lastNameColumn = row.insertCell();
        var beltColumn = row.insertCell();
        var academyColumn = row.insertCell();
        var editColumn = row.insertCell();

        var editLink = document.createElement('a');
        var linkName = document.createTextNode('Editar');
        var detailLink = document.createElement('a');
        var detialLinkName = document.createTextNode('Detalles');

        codeColumn.innerHTML = data.id_usuario;
        nameColumn.innerHTML = data.primer_nombre + ' ' + data.segundo_nombre;
        lastNameColumn.innerHTML = data.primer_apeliido + ' ' + data.segundo_apellido;
        beltColumn.innerHTML = data.nombre_cinturon;
        academyColumn.innerHTML= data.nombre_academia;

        editLink.appendChild(linkName);
        editLink.href = 'editar-alumno.php' + '?id=' + data.id_usuario;
        editLink.className = 'btn-action-event';
        
        detailLink.appendChild(detialLinkName);
        detailLink.href = 'detalle-usuario.php' + '?id=' + data.id_usuario;
        detailLink.className = 'btn-action-event';
        detailLink.name = data.id_usuario;

        editColumn.appendChild(detailLink);
        editColumn.appendChild(editLink);
      }); 

    } else {
      $error.show();
    }
  }

  function fillAdminTable() {
    var studentsList = orm.findStudents();
    var $error = document.querySelector('.no-data');

    if (studentsList.length) {
      $error.hide();

      var tbody = document.querySelector('#tblStudents tbody');
      tbody.innerHTML = '';

      studentsList.forEach(function(data, index) {
        var row = tbody.insertRow();
        var codeColumn = row.insertCell();
        var nameColumn = row.insertCell();
        var lastNameColumn = row.insertCell();
        var beltColumn = row.insertCell();
        var academyColumn = row.insertCell();
        var statusColumn = row.insertCell();
        var editColumn = row.insertCell();
        var editLink = document.createElement('a');
        var linkName = document.createTextNode('Editar');
        var detailLink = document.createElement('a');
        var detialLinkName = document.createTextNode('Detalles');

        codeColumn.innerHTML = data.id_usuario;
        nameColumn.innerHTML = data.primer_nombre + ' ' + data.segundo_nombre;
        lastNameColumn.innerHTML = data.primer_apeliido + ' ' + data.segundo_apellido;
        beltColumn.innerHTML = data.nombre_cinturon;
        academyColumn.innerHTML= data.nombre_academia;
        statusColumn.innerHTML = Number(data.estado) ? 'Habilitado' : 'Deshabilitado';

        editLink.appendChild(linkName);
        editLink.href = 'editar-alumno.php' + '?id=' + data.id_usuario;
        editLink.className = 'btn-action-event js-edit-event';
        editLink.name = data.id_usuario;

        detailLink.appendChild(detialLinkName);
        detailLink.href = 'detalle-usuario.php' + '?id=' + data.id_usuario;
        detailLink.className = 'btn-action-event';
        detailLink.name = data.id_usuario;

        editColumn.appendChild(detailLink);
        editColumn.appendChild(editLink);
      });

      var btnEdit = document.querySelectorAll('.js-edit-event');

      btnEdit.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          var currentItem = e.currentTarget;
          var studentId = currentItem.getAttribute('name');
          localStorage.setItem('studentCode', studentId);
        })
      }); 

    } else {
      $error.show();
    }
  }
});
