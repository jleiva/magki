fillTable();

function fillTable() {
  var placeList = obtenerListaRegistros();
  var tbody = document.querySelector('#tblPLaces tbody');
  
  if(placeList == '') {
    document.querySelector(".no-data").style.display = "block";
  } else {
    document.querySelector(".no-data").style.display = "none";
  }

  tbody.innerHTML = '';
  
  for (var i=0; i<placeList.length; i++) {
    var table = document.getElementById("tblPLaces");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = placeList[i]['nombreLugar'];
    var editColumn = row.insertCell();

    var editLink = document.createElement('a');
    var linkName = document.createTextNode("Editar");
    editLink.appendChild(linkName);
    editLink.href = "editar-lugares.html";
    editLink.className = 'btn-action-event js-btn-edit';
    editLink.dataset.index = rowCount;
    editColumn.appendChild(editLink);
  }

  var btnEdit = document.querySelectorAll('.js-btn-edit');
  
  btnEdit.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var currentItem = e.currentTarget;
      console.log(currentItem);
      var placeID = currentItem.getAttribute('data-index');
      localStorage.setItem('placeID', placeID); 
    }); 
  }); 
}

function editAcademy(rowNum) {
  var placeList = obtenerListaRegistros();
  var count = rowNum - 1;

  document.getElementById("nombreLugar").value = placeList[count]['nombreLugar'];
  document.getElementById("direccionLugar").value = placeList[count]['direccionLugar'];
  document.getElementById("latitudLugar").value = placeList[count]['latitudLugar'];
  document.getElementById("longitudLugar").value = placeList[count]['longitudLugar'];
  document.getElementById("telefonoEncargado").value = placeList[count]['telefonoEncargado'];
  document.getElementById("horarioLugar").value = placeList[count]['horarioLugar'];
  document.getElementById("capacidadLugar").value = placeList[count]['capacidadLugar'];
  document.getElementsByClassName("popup")[0].className = "popup shown";
  document.getElementById("button1").dataset.index = count;
  localStorage.setItem('telEncargado', organizationId);
}

function saveEditedValues() {
  var placeList = obtenerListaRegistros();
  var nombreLugar = document.getElementById("nombreLugar").value;
  var direccionLugar = document.getElementById("direccionLugar").value;
  var latitudLugar = document.getElementById("latitudLugar").value;
  var longitudLugar = document.getElementById("longitudLugar").value;
  var telefonoEncargado = document.getElementById("telefonoEncargado").value;
  var horarioLugar = document.getElementById("horarioLugar").value;
  var capacidadLugar = document.getElementById("capacidadLugar").value;
  var index = document.getElementById("button1").dataset.index;
  var entry = {
    "nombreLugar": nombreLugar,
    "direccionLugar": direccionLugar,
    "latitudLugar": latitudLugar,
    "longitudLugar": longitudLugar,
    "telefonoEncargado": telefonoEncargado,
    "horarioLugar": horarioLugar,
    "capacidadLugar": capacidadLugar,
    };

  placeList[index] = entry;
  localStorage.setItem('listaLugaresLS', JSON.stringify(placeList));
    //document.getElementsByClassName("popup")[0].className = "popup";
    //window.location.reload();
}
