fillTable();

function fillTable() {
  var sponsorList = orm.findSponsors();
  var tbody = document.querySelector('#tblSponsors tbody');

  if(sponsorList.length != 0) {
    document.querySelector('.no-data').hide();

    for(var i = 0; i < sponsorList.length; i++) {
      var row = tbody.insertRow(i);
      var colID = row.insertCell();
      var colName = row.insertCell();
      var colBusinessName  = row.insertCell();
      var colStatus  = row.insertCell();
      var colEdit = row.insertCell();
      var editLink = document.createElement('a');
      var linkName = document.createTextNode("Editar");

      colID.innerHTML = sponsorList[i].nombre_comercial;
      colName.innerHTML = sponsorList[i].razon_social;
      colBusinessName.innerHTML = sponsorList[i].id_patrocinador;

      if(sponsorList[i].estado == 1) {
				colStatus.innerHTML = 'Habilitado';
			}else{
				colStatus.innerHTML = 'Deshabilitado';
			}

      editLink.appendChild(linkName);
      editLink.href = 'editar-patrocinador.php'+ '?id=' + sponsorList[i].id_patrocinador;
      editLink.className = 'btn-action-event js-edit-event';
      colEdit.appendChild(editLink);
    }
  }
}