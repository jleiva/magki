//var listaRegistros=[];
function registrar(pAcademia) {
  var listaRegistros = obtenerListaRegistros();
  listaRegistros.push(pAcademia);
  document.querySelector('#save').disabled = true;
  localStorage.setItem('listaAcademiasLS', JSON.stringify(listaRegistros));
}

function obtenerListaRegistros() {
  var listaRegistros = JSON.parse(localStorage.getItem('listaAcademiasLS'));

  if (listaRegistros == null) {
    listaRegistros= [];
  }
  
  return listaRegistros;
}

//MAD
function findByEmail(email) {
  var academyList = obtenerListaRegistros();
  var academyInfo = []; // AREGLO NO INCIALIZADO

  for (var i=0; i < academyList.length; i ++) {
    if (academyList[i]['emailAcademia'] == email) {
      academyInfo = academyList[i];
    }
  }

  return academyInfo;
}

function updateAcadInformation(pAcadInfo) {
	var academyList = obtenerListaRegistros();

	for (var i = 0; i < academyList.length; i++) {
		if (academyList[i][0] == pAcadInfo[0]){
			academyList[i] = pAcadInfo;
		}
	}

	localStorage.setItem('listaAcademiasLS', JSON.stringify(academyList));
}