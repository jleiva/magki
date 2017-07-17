fillTable();

function fillTable() {
  var placeList = obtenerListaRegistros();
  
  if(placeList.length) {
    document.querySelector('.no-data').style.display = 'none';
    buildTable(placeList);
  } 
}

function buildTable(placeList) {
  var tbody = document.querySelector('#tblPLaces tbody');
  tbody.innerHTML = '';

  for (var i=0; i<placeList.length; i++) {
    var table = document.getElementById('tblPLaces');
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = placeList[i]['nombreLugar'];
    row.insertCell(1).innerHTML = placeList[i]['status'] ? 'Habilitado' : 'Deshabilitado';
    
    var editColumn = row.insertCell();
    var editLink = document.createElement('a');
    var linkName = document.createTextNode('Editar');
    
    editLink.appendChild(linkName);
    editLink.href = 'editar-lugar.html';
    editLink.className = 'btn-action-event js-btn-edit';
    editLink.dataset.index = rowCount;
    editColumn.appendChild(editLink);
  }

  var btnEdit = document.querySelectorAll('.js-btn-edit');
  btnEdit.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var currentItem = e.currentTarget;
      var placeID = currentItem.getAttribute('data-index');
      localStorage.setItem('placeID', placeID); 
    }); 
  });
}
