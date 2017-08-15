fillTable();

function fillTable() {
  var assistantList = getAsistList();

  if (assistantList.length) {
    document.querySelector('.no-data').style.display = 'none';
    buildTable(assistantList);
  }
}

function buildTable(assistantList) {
  var tbody = document.querySelector('#tblAssist tbody');
  tbody.innerHTML = '';

  for(var i=0; i<assistantList.length; i++) {
    var row = tbody.insertRow(i);
    var idColumn = row.insertCell();
    var nameColumn = row.insertCell();
    var emailColumn = row.insertCell();
    var statuslColumn = row.insertCell();
    var editColumn = row.insertCell();

    idColumn.innerHTML = assistantList[i].id;
    nameColumn.innerHTML = assistantList[i].name +" "+ assistantList[i].lastname;
    emailColumn.innerHTML = assistantList[i].email;

    if(assistantList[i].status){
      statuslColumn.innerHTML = 'Habilitado';
    }else{
      statuslColumn.innerHTML = 'Deshabilitado';
    }

    var editLink = document.createElement('a');
    var linkName = document.createTextNode('Editar');
    editLink.appendChild(linkName);
    editLink.href = 'editar-asistente.php';
    editLink.className = 'btn-action-event js-edit-event';
    editLink.name = assistantList[i].id;
    editColumn.appendChild(editLink);
  }

  var btnEdit = document.querySelectorAll('.js-edit-event');
  btnEdit.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var currentItem = e.currentTarget;
      var assistId = currentItem.getAttribute('name');
      localStorage.setItem('assistCode', assistId);
    })
  });
}
