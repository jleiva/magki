$util('#save').on('click',validateChanges);

loadStudentData();

function validateChanges(e) {

	e.preventDefault();

 if(!validate.emptyFields()) {
  var validForm = validate.fieldsValue('editStudent-form');

  if (!validForm[1].length) {
		getUpdateData();
  }
 }

 window.scrollTo(0, 0);
}

function loadStudentData() {

	var studentId = localStorage.getItem('studentCode');
	//agarra el codigo que se guardo
	var studentsInfo = findById(studentId);
	// aqui llama la capa logica principal
	//toda la informacion de la entidad o que quiero del formulario

  document.querySelector('#id').value = studentsInfo[0]; //lllena el primer campo
	document.querySelector('#id').disabled = true; //y no habilita el campo que yo le diga

	document.querySelector('#name').value = studentsInfo[1];
	document.querySelector('#sec-name').value=studentsInfo[2];
	document.querySelector('#last-name').value=studentsInfo[3];
	document.querySelector('#sec-last-name').value=studentsInfo[4];
	document.querySelector('#bday').value=studentsInfo[5];
	document.querySelector('#email').value=studentsInfo[6];
	document.querySelector('#weight').value=studentsInfo[7];
	document.querySelector('#height').value=studentsInfo[8];
	document.querySelector('#gender').value=studentsInfo[9];
	document.querySelector('#age').value=studentsInfo[10];
	document.querySelector('#part-tournament').value=studentsInfo[11];
	document.querySelector('#win-tournament').value=studentsInfo[12];
	document.querySelector('#belt').value=studentsInfo[13];
	/*var beltType = document.querySelector('#belt');
	var beltGrade = document.createElement('option');
	 beltGrade.innerHTML =  studentsInfo[13];*/


	/*if(studentsInfo[14]) {
		document.querySelector('#able').checked = true;
	}else{
		disableFields();
	}*/
}


function getUpdateData() {

//declaro los campos de nuevo
var id='';
var firstName ='';
var secName ='';
var lastName='';
var secLastName='';
var bday= '';
var email='';
var weight='';
var height= '';
var gender='';
var age='';
var pTournament='';
var wTournament= '';
var belt='';
var status='';

var studentsInfo = [];

	id = document.querySelector('#id').value;
	firstName = document.querySelector('#name').value;
	secName  = document.querySelector('#sec-name').value;
  lastName  = document.querySelector('#last-name').value;
  secLastName  = document.querySelector('#sec-last-name').value;
	bday = document.querySelector('#bday').value;
  email  = document.querySelector('#email').value;
  weight = document.querySelector('#weight').value;
  height = document.querySelector('#height').value;
  gender = document.querySelector('#gender').value;
	age = document.querySelector('#age').value;
  pTournament  = document.querySelector('#part-tournament').value;
  wTournament  = document.querySelector('#win-tournament').value;
  belt = document.querySelector('#belt').value;
	status = document.querySelector('#able').checked;

	studentsInfo.push(id, firstName, secName, lastName,secLastName,bday,email, weight, height, gender,age, pTournament, wTournament, belt, status);
	updateStudentInfo(studentsInfo); //esta en la principal
	//loadNewData(id);

	if (status){
	enableFields();
	}else {
		disableFields();
	}


}

/*function loadNewData(pId) {
	var studentsInfo = findById(pId);

// se le pide que busque la info actualizada
	document.querySelector('#id').value = studentsInfo[0];
	document.querySelector('#name').value = studentsInfo[1];
  document.querySelector('#sec-name').value = studentsInfo[2];
  document.querySelector('#last-name').value = studentsInfo[3];
  document.querySelector('#sec-last-name').value = studentsInfo[4];
 	document.querySelector('#bday').value=studentsInfo[5];
	document.querySelector('#email').value = studentsInfo[6];
	document.querySelector('#weight').value=studentsInfo[7];
 	document.querySelector('#height').value=studentsInfo[8];
	document.querySelector('#gender').value=studentsInfo[9];
	document.querySelector('#age').value=studentsInfo[10];
  document.querySelector('#part-tournament').value = studentsInfo[11];
  document.querySelector('#win-tournament').value = studentsInfo[12];

  var belt = document.querySelector('#belt');
  var grade = document.createElement('option');
  grade.innerHTML = studentsInfo[13];
  belt.appendChild(grade);

//evalua cual estado fue seleccionado
	if(organizationInfo[14]) {
		document.querySelector('#able').checked = true;
	}else{
		disableFields();
	}
}*/

//la funcion que deshabilitado todos los campos y le ponga el check
function disableFields() {
	//document.querySelector('#disable').checked = true;
  document.querySelector('#id').disabled = true;
  document.querySelector('#name').disabled = true;
  document.querySelector('#sec-name').disabled = true;
  document.querySelector('#last-name').disabled = true;
  document.querySelector('#sec-last-name').disabled = true;
  document.querySelector('#bday').disabled = true;
  document.querySelector('#email').disabled = true;
  document.querySelector('#weight').disabled = true;
  document.querySelector('#height').disabled = true;
	document.querySelector('#age').disabled = true;
  document.querySelector('#part-tournament').disabled = true;
  document.querySelector('#win-tournament').disabled = true;
  document.querySelector('#belt').disabled = true;


}

function enableFields() {
	//document.querySelector('#disable').checked = true;

  document.querySelector('#name').disabled = false;
  document.querySelector('#sec-name').disabled = false;
  document.querySelector('#last-name').disabled = false;
  document.querySelector('#sec-last-name').disabled = false;
  document.querySelector('#bday').disabled = false;
  document.querySelector('#email').disabled = false;
  document.querySelector('#weight').disabled = false;
  document.querySelector('#height').disabled =false;
	document.querySelector('#age').disabled = false;
  document.querySelector('#part-tournament').disabled = false;
  document.querySelector('#win-tournament').disabled = false;
  document.querySelector('#belt').disabled = false;


}
