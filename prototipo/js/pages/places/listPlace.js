fillTable();

function fillTable() {
  var placesList = orm.findVenues();
  var tbody = document.querySelector('#tblPLaces tbody');
  tbody.innerHTML = '';

  if (placesList.length) {
    document.querySelector('.no-data').hide();

    for (var i=0; i<placesList.length; i++) {
      var row = tbody.insertRow(i);

      row.insertCell().innerHTML = placesList[i].id_lugar;
      row.insertCell().innerHTML = placesList[i].nombre_lugar;
      row.insertCell().innerHTML = placesList[i].telefono;
      row.insertCell().innerHTML = placesList[i].capacidad;
      var status = row.insertCell();

      if(placesList[i].estado == '1') {
        status.innerHTML = 'Habilitado';
      } else {
        status.innerHTML = 'Deshabilitado';
      }

      var editLink = document.createElement('a');
      var linkName = document.createTextNode('Editar');
      editLink.appendChild(linkName);
      editLink.href = 'editar-lugar.php' + '?id=' + placesList[i].id_lugar;
      editLink.className = 'btn-action-event js-btn-edit';

      row.insertCell().appendChild(editLink);
    }
  }
}
