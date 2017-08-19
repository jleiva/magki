fillTable();

function fillTable() {
  var assistantList = orm.findAssist();

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

    idColumn.innerHTML = assistantList[i].id_usuario;
    nameColumn.innerHTML = assistantList[i].primer_nombre +" "+ assistantList[i].primer_apeliido;
    emailColumn.innerHTML = assistantList[i].correo;

    if(assistantList[i].estado === '1') {
      statuslColumn.innerHTML = 'Habilitado';
    } else {
      statuslColumn.innerHTML = 'Deshabilitado';
    }

    var editLink = document.createElement('a');
    var linkName = document.createTextNode('Editar');
    editLink.appendChild(linkName);
    editLink.href = 'editar-asistente.php' + '?id=' + assistantList[i].id_usuario;
    editLink.className = 'btn-action-event js-edit-event';
    editColumn.appendChild(editLink);
  }
}
