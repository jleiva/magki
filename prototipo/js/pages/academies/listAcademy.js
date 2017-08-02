fillTable();

function fillTable() {
  var academyList = getAcademyList();
  var tbody = document.querySelector('#tblAcademies tbody');
  tbody.innerHTML = '';

  if (academyList.length) {
    document.querySelector('.no-data').hide();

    for (var i=0; i<academyList.length; i++) {
      var row = tbody.insertRow(i);

      row.insertCell().innerHTML = academyList[i].id_academia;
      row.insertCell().innerHTML = academyList[i].nombre_academia;
      row.insertCell().innerHTML = academyList[i].telefono;
      row.insertCell().innerHTML = academyList[i].nombre_encargado + ' ' + academyList[i].primer_apellido_encargado;
      var status = row.insertCell();

      if(academyList[i].estado == '1') {

        status.innerHTML = 'Habilitado';
      } else {

        status.innerHTML = 'Deshabilitado';
      }

      var editLink = document.createElement('a');
      var linkName = document.createTextNode('Editar');
      editLink.appendChild(linkName);
      editLink.href = 'editar-academia.html' + '?id=' + academyList[i].id_academia;
      editLink.className = 'btn-action-event js-btn-edit';

      row.insertCell().appendChild(editLink);
    }
  }
}
