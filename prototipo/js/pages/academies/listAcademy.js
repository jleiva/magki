fillTable();

function fillTable() {
  var academyList = obtenerListaRegistros();

  if (academyList.length) {
    document.querySelector('.no-data').style.display = 'none';
    buildTable(academyList);
  } 
}

function buildTable(academyList) {
  var tbody = document.querySelector('#tblAcademies tbody');

  tbody.innerHTML = '';

  for (var i=0; i<academyList.length; i++) {
    var table = document.getElementById('tblAcademies');
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = academyList[i]['nombreAcademia'];
    row.insertCell(1).innerHTML = academyList[i]['status'] ? 'Habilitado' : 'Deshabilitado';
    
    var editColumn = row.insertCell();
    var editLink = document.createElement('a');
    var linkName = document.createTextNode('Editar');
    editLink.appendChild(linkName);
    editLink.href = 'editar-academia.html';
    editLink.className = 'btn-action-event js-btn-edit';
    editLink.dataset.index = rowCount;
    editColumn.appendChild(editLink);
  }

  var btnEdit = document.querySelectorAll('.js-btn-edit');

  btnEdit.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var currentItem = e.currentTarget;
      var academyID = currentItem.getAttribute('data-index');
      localStorage.setItem('academyID', academyID); 
    }); 
  }); 
}

function editAcademy(rowNum) {
  var academyList = obtenerListaRegistros();
  var count = rowNum - 1;

  document.getElementById("nombreAcademia").value = academyList[count]['nombreAcademia'];
  document.getElementById("telefonoAcademia").value = academyList[count]['telefonoAcademia'];
  document.getElementById("emailAcademia").value = academyList[count]['emailAcademia'];
  document.getElementById("NombreEncargado").value = academyList[count]['NombreEncargado'];
  document.getElementById("primerApellidoEncargado").value = academyList[count]['primerApellidoEncargado'];
  document.getElementById("segundoApellidoEncargado").value = academyList[count]['segundoApellidoEncargado'] || '';
  document.getElementById("direccionAcademia").value = academyList[count]['direccionAcademia'];
  document.getElementById("latitudAcademia").value = academyList[count]['latitudAcademia'];
  document.getElementById("longitudAcademia").value = academyList[count]['longitudAcademia'];
  document.getElementById("button1").dataset.index = count;
  localStorage.setItem('academyEmail', organizationId);
}

function saveEditedValues() {
  var academyList = obtenerListaRegistros();
  var nombreAcademia = document.getElementById("nombreAcademia").value;
  var telefonoAcademia = document.getElementById("telefonoAcademia").value;
  var emailAcademia = document.getElementById("emailAcademia").value;
  var NombreEncargado = document.getElementById("NombreEncargado").value;
  var primerApellidoEncargado = document.getElementById("primerApellidoEncargado").value;
  var segundoApellidoEncargado = document.getElementById("segundoApellidoEncargado").value;
  var direccionAcademia = document.getElementById("direccionAcademia").value;
  var latitudAcademia = document.getElementById("latitudAcademia").value;
  var longitudAcademia = document.getElementById("longitudAcademia").value;
  var index = document.getElementById("button1").dataset.index;
  var entry = {
    "nombreAcademia": nombreAcademia,
    "telefonoAcademia": telefonoAcademia,
    "emailAcademia": emailAcademia,
    "NombreEncargado": NombreEncargado,
    "primerApellidoEncargado": primerApellidoEncargado,
    "segundoApellidoEncargado": segundoApellidoEncargado,
    "direccionAcademia": direccionAcademia,
    "latitudAcademia": latitudAcademia,
    "longitudAcademia": longitudAcademia,
  };

  academyList[index] = entry;
  localStorage.setItem('listaAcademiasLS', JSON.stringify(academyList));
}
