$util('#save').on('click',validateChanges);

fillAcademies();
fillProfessor();
loadStudentData();

function getProfList() {
  var profList = JSON.parse(localStorage.getItem('profListLS'));

  if(profList == null){
    profList= [];
  }
  return profList;
}

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

	var studentsInfo = findById(studentId);

  document.querySelector('#id').value = studentsInfo[0];
	document.querySelector('#id').disabled = true; 
	document.querySelector('#name').value = studentsInfo[1];
	document.querySelector('#sec-name').value = studentsInfo[2];
	document.querySelector('#last-name').value = studentsInfo[3];
	document.querySelector('#sec-last-name').value = studentsInfo[4];
	document.querySelector('#bday').value = studentsInfo[5];
	document.querySelector('#email').value = studentsInfo[6];
	document.querySelector('#weight').value = studentsInfo[7];
	document.querySelector('#height').value = studentsInfo[8];
	document.querySelector('#gender').value = studentsInfo[9];
	document.querySelector('#age').value = studentsInfo[10];
	document.querySelector('#part-tournament').value = studentsInfo[11];
	document.querySelector('#win-tournament').value = studentsInfo[12];
	document.querySelector('#exhibition').value = studentsInfo[13];
	document.querySelector('#academy').value = studentsInfo[14];
	document.querySelector('#professor').value = studentsInfo[15];
	document.querySelector('#belt').value = studentsInfo[16];

	if (studentsInfo[17]) {
    document.querySelector('#able').checked = true;
    enableFields();
  } else {
    disableFields();
  }
}


function getUpdateData() {

var id = '';
var firstName = '';
var secName = '';
var lastName = '';
var secLastName ='';
var bday = '';
var email ='';
var weight = '';
var height = '';
var gender = '';
var age = '';
var pTournament = '';
var wTournament = '';
var exhibition = '';
var academy = '';
var professor = '';
var belt = '';
var status ='';
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
	exhibition  = document.querySelector('#exhibition').value;
  academy  = document.querySelector('#academy').value;
  professor  = document.querySelector('#professor').value;
  belt = document.querySelector('#belt').value;
	status = document.querySelector('#able').checked;

	studentsInfo.push(id, firstName, secName, lastName,secLastName,bday,email, weight, height, gender,age, pTournament, wTournament,exhibition,academy,professor, belt, status);
	updateStudentInfo(studentsInfo); 

	if (status){
		enableFields();
	}else {
		disableFields();
	}
}

function disableFields() {
	document.querySelector('#disable').checked = true;
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
	document.querySelector('#exhibition').disabled = true;
	document.querySelector('#academy').disabled = true;
	document.querySelector('#professor').disabled = true;
  document.querySelector('#belt').disabled = true;
}

function enableFields() {
	document.querySelector('#able').checked = true;
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
	document.querySelector('#exhibition').disabled = false;
	document.querySelector('#academy').disabled = false;
	document.querySelector('#professor').disabled = false;
  document.querySelector('#belt').disabled = false;
}

function fillAcademies() {

 var academiesList = obtenerListaRegistros();
 var academiesField = document.querySelector('#academy');

 for(var i = 0; i < academiesList.length; i++) {
   var options = document.createElement("option");
     var academyName = academiesList[i]['nombreAcademia'];
     options.text = academyName;
     options.className = 'btn-action-event js-edit-event';
     academiesField.add(options);
 }
}

function fillProfessor() {

 var professorList = getProfList();
 var professorField = document.querySelector('#professor');

 for(var i = 0; i < professorList.length; i++) {
   var options = document.createElement("option");
     var professorName = professorList[i][1]+" "+professorList[i][3];
     options.text = professorName;
     options.className = 'btn-action-event js-edit-event';
     professorField.add(options);
 }
}
