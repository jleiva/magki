fillTable();

function fillTable() {
  var studentsList = getStudentsList();
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
      var linkName = document.createTextNode("Editar");

      codeColumn.innerHTML = data.identification;
      nameColumn.innerHTML = data.firstName + ' ' + data.secondName;
      lastNameColumn.innerHTML = data.firstLastName + ' ' + data.secondLastName;
      beltColumn.innerHTML = data.beltGrade;
      academyColumn.innerHTML= data.academy;
      statusColumn.innerHTML = data.status ? 'Habilitado' : 'Deshabilitado';

      editLink.appendChild(linkName);
      editLink.href = 'editar-alumno.html';
      editLink.className = 'btn-action-event js-edit-event';
      editLink.name = data.identification;
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
