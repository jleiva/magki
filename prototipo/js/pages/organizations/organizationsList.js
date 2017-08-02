fillTable();

function fillTable() {
  var organizationsList = orm.findOrgs();
  var $error = document.querySelector('.no-data');

  if (organizationsList.length) {
    var tbody = document.querySelector('#tblOrganizations tbody');
    $error.style.display = 'none';
    tbody.innerHTML = '';

    organizationsList.forEach(function(data, index) {
      var row = tbody.insertRow();
      var codeColumn = row.insertCell();
      var nameColumn = row.insertCell();
      var contactColumn = row.insertCell();
      var statusColumn = row.insertCell();
      var editColumn = row.insertCell();
      var editLink = document.createElement('a');
      var linkName = document.createTextNode('Editar');

      codeColumn.innerHTML = data.id_organizacion;
      nameColumn.innerHTML = data.nombre;
      contactColumn.innerHTML = data.tipo;
      statusColumn.innerHTML = Number(data.estado) ? 'Habilitado' : 'Deshabilitado';

      editLink.appendChild(linkName);
      editLink.href = 'editar-organizacion.php' + '?id=' + data.id_organizacion;
      editLink.className = 'btn-action-event js-edit-event';
      editLink.name = data.id_organizacion;
      editColumn.appendChild(editLink);
    });
  } else {
    $error.style.display = 'block';
  }
}
