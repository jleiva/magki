fillTable();

function fillTable() {
  var professorList = getProfList();

  if (professorList.length) {
    document.querySelector('.no-data').style.display = 'none';
    buildTable(professorList);
  }
}

function buildTable(professorList) {
  var tbody = document.querySelector('#tblProfessor tbody');
  tbody.innerHTML = '';

  for(var i=0; i<professorList.length; i++) {
    var row = tbody.insertRow(i);
    var idColumn = row.insertCell();
    var nameColumn = row.insertCell();
    var lastNameColumn = row.insertCell();
    var beltColumn = row.insertCell();
    var academyColumn = row.insertCell();
    var statusColumn = row.insertCell();
    var editColumn = row.insertCell();

    idColumn.innerHTML = professorList[i]['id'];
    nameColumn.innerHTML = professorList[i]['name'];
    lastNameColumn.innerHTML = professorList[i]['lastname'];
    academyColumn.innerHTML= professorList[i]['academy'];
    beltColumn.innerHTML = professorList[i]['beltGrade'];
    statusColumn.innerHTML = professorList[i]['status'] ? 'Habilitado' : 'Deshabilitado';

    var editLink = document.createElement('a');
    var linkName = document.createTextNode('Editar');
    editLink.appendChild(linkName);
    editLink.href = 'editar-profesor.php';
    editLink.className = 'btn-action-event js-edit-event';
    editLink.name = professorList[i]['id'];
    editColumn.appendChild(editLink);
  }

  var btnEdit = document.querySelectorAll('.js-edit-event');
  btnEdit.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var currentItem = e.currentTarget;
      var professorId = currentItem.getAttribute('name');
      localStorage.setItem('profCode', professorId);
    })
  });
}
