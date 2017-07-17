fillTable();

function fillTable() {
  var organizationsList = getOrganizationsList();
  var $error = document.querySelector('.no-data');

  if (organizationsList.length) {
    var tbody = document.querySelector('#tblOrganizations tbody');
    $error.hide();
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

      codeColumn.innerHTML = data.codeNumber;
      nameColumn.innerHTML = data.organization;
      contactColumn.innerHTML = data.organizationType;
      statusColumn.innerHTML = data.status ? 'Habilitado' : 'Deshabilitado';

      editLink.appendChild(linkName);
      editLink.href = 'editar-organizacion.html';
      editLink.className = 'btn-action-event js-edit-event';
      editLink.name = data.codeNumber;
      editColumn.appendChild(editLink);
    });

    var btnEdit = document.querySelectorAll('.js-edit-event');
    
    btnEdit.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var currentItem = e.currentTarget;
        var organizationId = currentItem.getAttribute('name');
        localStorage.setItem('entityCode', organizationId);
      }) 
    }); 
  } else {
    $error.show();
  }
}
