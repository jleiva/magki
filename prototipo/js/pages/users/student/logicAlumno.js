var studentsList=[];

function getStudentsList(){
  var studentsList = JSON.parse(localStorage.getItem('studentsListLS'));

  if(studentsList == null){
    studentsList= [];
  }
  return studentsList;
}


function registrar(pPersona){
  var studentsList = getStudentsList();
  studentsList.push(pPersona);
  localStorage.setItem('studentsListLS',JSON.stringify(studentsList));
}

function findById(pId) {
	var studentsList = getStudentsList();
	var studentsInfo; // se declaro el arreglo

	for(var i=0; i < studentsList.length; i ++){
		//verifica si esta el pcode que se pidio en el editar
		if (studentsList[i][0] == pId) {
			studentsInfo = studentsList[i];
		}
	}

	return studentsInfo;
	//le retorna el valor si esta
}

function updateStudentInfo(pInfo) {
//deme la lista de organizaciones
	var studentsList = getStudentsList();
// si la encuentra reemplaza la info
	for(var i = 0; i < studentsList.length; i++) {
		if(studentsList[i][0] == pInfo[0]){
			studentsList[i] = pInfo;
		}
	}

	localStorage.setItem('studentsListLS', JSON.stringify(studentsList));
}
// se debe volver a setear el local storage, con la misma que se hace el registrar
