var profList=[];

function getProfList(){
  var profList = JSON.parse(localStorage.getItem('profListLS'));

  if(profList == null){
    profList= [];
  }
  return profList;
}


function registrar(pPersona){
  var profList = getProfList();
  profList.push(pPersona);
  localStorage.setItem('profListLS',JSON.stringify(profList));
}

function findById(pId) {
	var profList = getProfList();
	var profInfo; // se declaro el arreglo

	for(var i=0; i < profList.length; i ++){
		//verifica si esta el pcode que se pidio en el editar
		if (profList[i][0] == pId) {
			profInfo = profList[i];
		}
	}

	return profInfo;
	//le retorna el valor si esta
}

function updateProfInfo(pInfo) {
//deme la lista de organizaciones
	var profList = getProfList();
// si la encuentra reemplaza la info
	for(var i = 0; i < profList.length; i++) {
		if(profList[i][0] == pInfo[0]){
			profInfo[i] = pInfo;
		}
	}

	localStorage.setItem('profListLS', JSON.stringify(profList));
}
// se debe volver a setear el local storage, con la misma que se hace el registrar
