document.addEventListener('DOMContentLoaded', function() {
  fillTable();

  function fillTable() {
    var professorList = orm.findProfesors();

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

      idColumn.innerHTML = professorList[i]['id_usuario'];
      nameColumn.innerHTML = professorList[i]['primer_nombre'];
      lastNameColumn.innerHTML = professorList[i]['primer_apeliido'];
      academyColumn.innerHTML= professorList[i]['nombre_academia'];
      beltColumn.innerHTML = professorList[i]['nombre_cinturon'];
      statusColumn.innerHTML = professorList[i]['estado'] === '1' ? 'Habilitado' : 'Deshabilitado';

      var detailLink = document.createElement('a');
      var detialLinkName = document.createTextNode('Detalles');
      var editLink = document.createElement('a');
      var linkName = document.createTextNode('Editar');

      detailLink.appendChild(detialLinkName);
      detailLink.href = 'detalle-usuario.php' + '?id=' + professorList[i]['id_usuario'];
      detailLink.className = 'btn-action-event';
      detailLink.name = professorList[i]['id_usuario'];

      editLink.appendChild(linkName);
      editLink.href = 'editar-profesor.php' + '?id=' + professorList[i]['id_usuario'];
      editLink.className = 'btn-action-event js-edit-event';

      editColumn.appendChild(detailLink);
      editColumn.appendChild(editLink);
    }
  }
});