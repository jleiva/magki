var asistList=[];

function getAsistList(){
  var asistList = JSON.parse(localStorage.getItem('asistListLS'));

  if(asistList == null){
    asistList= [];
  }
  return asistList;
}


function registrar(pPersona){
  var asistList = getAsistList();
  asistList.push(pPersona);
  localStorage.setItem('asistListLS',JSON.stringify(asistList));
}

function findById(pId) {
	var asistList = getAsistList();
	var asistInfo; // se declaro el arreglo

	for(var i=0; i < asistList.length; i ++){
		//verifica si esta el pcode que se pidio en el editar
		if (asistList[i][0] == pId) {
			asistInfo= asistList[i];
		}
	}

	return asistInfo;
	//le retorna el valor si esta
}

function updateAsistInfo(pInfo) {
//deme la lista de organizaciones
	var asistInfo = getAsistList();
// si la encuentra reemplaza la info
	for(var i = 0; i < asistList.length; i++) {
		if(asistList[i][0] == pInfo[0]){
			asistList[i] = pInfo;
		}
	}

	localStorage.setItem('asistListLS', JSON.stringify(asistList));
}
// se debe volver a setear el local storage, con la misma que se hace el registrar
