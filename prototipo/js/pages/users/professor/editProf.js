$util('#save').on('click',validateChanges);

loadProfData();

function validateChanges(e) {

	e.preventDefault();

 if(!validate.emptyFields()) {
  var validForm = validate.fieldsValue('editProf-form');

  if (!validForm[1].length) {
		getUpdateData();
  }
 }

 window.scrollTo(0, 0);
}

function loadProfData() {

	var profId = localStorage.getItem('profCode');

	var profInfo = findById(profId);

  document.querySelector('#id').value = profInfo[0]; //lllena el primer campo
	document.querySelector('#id').disabled = true; //y no habilita el campo que yo le diga
  document.querySelector('#name').value = profInfo[1];
  document.querySelector('#secName').value =  profInfo[2];
  document.querySelector('#lastName').value = profInfo[3];
  document.querySelector('#secLastName').value = profInfo[4];
  document.querySelector('#bday').value = profInfo[5];
  document.querySelector('#email').value = profInfo[6];
  document.querySelector('#phone').value = profInfo[7];
  document.querySelector('#gender').value = profInfo[8];
  document.querySelector('#age').value = profInfo[9];
  document.querySelector('#academy').value =  profInfo[10];
  document.querySelector('#belt').value = profInfo[11];

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
var phone='';
var gender='';
var age='';
var academy='';
var belt='';
var status='';

var profInfo = [];

	id = document.querySelector('#id').value;
	firstName = document.querySelector('#name').value;
	secName  = document.querySelector('#sec-name').value;
  lastName  = document.querySelector('#last-name').value;
  secLastName  = document.querySelector('#sec-last-name').value;
	bday = document.querySelector('#bday').value;
  email  = document.querySelector('#email').value;
  phone = document.querySelector('#phone').value;
  gender = document.querySelector('#gender').value;
	age = document.querySelector('#age').value;
  belt = document.querySelector('#belt').value;
	status = document.querySelector('#able').checked;

	profInfo.push(id, firstName, secName, lastName,secLastName,bday,email, phone, gender,age,belt, status);
	updateProfInfo(profInfo); //esta en la principal


	if (status){
	enableFields();
	}else {
		disableFields();
	}

}

function disableFields() {
	//document.querySelector('#disable').checked = true;
  document.querySelector('#id').disabled = true;
  document.querySelector('#name').disabled = true;
  document.querySelector('#sec-name').disabled = true;
  document.querySelector('#last-name').disabled = true;
  document.querySelector('#sec-last-name').disabled = true;
  document.querySelector('#bday').disabled = true;
  document.querySelector('#email').disabled = true;
  document.querySelector('#phone').disabled = true;
  document.querySelector('#gender').disabled = true;
	document.querySelector('#age').disabled = true;
  document.querySelector('#belt').disabled = true;


}

function enableFields() {


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
