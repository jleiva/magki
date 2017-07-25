function registrar(pAcademia){
  var listaRegistros = obtenerListaRegistros();
  listaRegistros.push(pAcademia);
  localStorage.setItem('listaAcademiasLS', JSON.stringify(listaRegistros));
}

function obtenerListaRegistros() {
  var listaRegistros = JSON.parse(localStorage.getItem('listaAcademiasLS'));

  if (listaRegistros == null) {
    listaRegistros= [];
  }
  
  return listaRegistros;
}

function findByEmail(email) {
  var academyList = obtenerListaRegistros();
  var academyInfo = [];

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