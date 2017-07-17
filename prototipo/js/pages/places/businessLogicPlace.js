function registrar(pLugar) {
  var listaRegistros = obtenerListaRegistros();
  listaRegistros.push(pLugar);
  localStorage.setItem('listaLugaresLS', JSON.stringify(listaRegistros));
}

function obtenerListaRegistros() {
  var listaRegistros = JSON.parse(localStorage.getItem('listaLugaresLS'));

  if (listaRegistros == null) {
    listaRegistros= [];
  }

  return listaRegistros;
}

//MAD
function findByTelefono(telefono) {
  var placeList = obtenerListaRegistros();
  var placeInfo = []; // AREGLO NO INCIALIZADO

  for (var i=0; i < placeList.length; i ++) {
    if (placeList[i]['telefonoEncargado'] == telefono) {
      placeInfo = placeList[i];
    }
  }

  return placeInfo;
}

function updatePlaceInformation(pPlaceInfo) {
  var placeList = obtenerListaRegistros();

  for (var i = 0; i < placeList.length; i++) {
    if (placeList[i][0] == pPlaceInfo[0]) {
      placeList[i] = pPlaceInfo;
    }
  }

  localStorage.setItem('listaLugaresLS', JSON.stringify(placeList));
}