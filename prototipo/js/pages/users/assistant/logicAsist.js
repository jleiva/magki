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
  document.querySelector('#save').disabled = true;
  disableFields();
  localStorage.setItem('asistListLS',JSON.stringify(asistList));
}

function findById(pId) {
	var asistList = getAsistList();
	var assistInfo; // se declaro el arreglo

	for(var i=0; i < asistList.length; i ++){
		//verifica si esta el pcode que se pidio en el editar
		if (asistList[i][0] == pId) {
			assistInfo= asistList[i];
		}
	}

	return assistInfo;
	//le retorna el valor si esta
}

function disableFields() {
  document.querySelector('#id').disabled = true;
  document.querySelector('#name').disabled = true;
  document.querySelector('#secName').disabled = true;
  document.querySelector('#lastName').disabled = true;
  document.querySelector('#secLastName').disabled = true;
  document.querySelector('#bday').disabled = true;
  document.querySelector('#email').disabled = true;
  document.querySelector('#phone').disabled = true;
  document.querySelector('#gender').disabled = true;
  document.querySelector('#age').disabled = true;
}

function updateAsistInfo(pInfo) {
//deme la lista de organizaciones
	var assistInfo = getAsistList();
// si la encuentra reemplaza la info
	for(var i = 0; i < asistList.length; i++) {
		if(asistList[i][0] == pInfo[0]){
			asistList[i] = pInfo;
		}
	}

	localStorage.setItem('asistListLS', JSON.stringify(asistList));
}
// se debe volver a setear el local storage, con la misma que se hace el registrar
