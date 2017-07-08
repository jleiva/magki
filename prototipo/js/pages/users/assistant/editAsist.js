$util('#save').on('click',validateChanges);

loadAssistData();

function validateChanges(e) {

	e.preventDefault();

 if(!validate.emptyFields()) {
  var validForm = validate.fieldsValue('editAssist-form');

  if (!validForm[1].length) {
		getUpdateData();
  }
 }

 window.scrollTo(0, 0);
}

function loadAssistData() {

	var assistId = localStorage.getItem('assistCode');
	//agarra el codigo que se guardo
	var assistInfo = findById(assistId);


  document.querySelector('#id').value = assistInfo[0];
	document.querySelector('#id').disabled = true;
  document.querySelector('#name').value = assistInfo[1];
  document.querySelector('#secName').value =  assistInfo[2];
  document.querySelector('#lastName').value = assistInfo[3];
  document.querySelector('#secLastName').value = assistInfo[4];
  document.querySelector('#bday').value = assistInfo[5];
  document.querySelector('#email').value = assistInfo[6];
  document.querySelector('#phone').value = assistInfo[7];
  document.querySelector('#gender').value = assistInfo[8];
  document.querySelector('#age').value = assistInfo[9];

}


function getUpdateData() {

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

var status='';

var assistInfo = [];

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
	status = document.querySelector('#able').checked;

	assistInfo.push(id, firstName, secName, lastName,secLastName,bday,email, phone, gender,age, status);
	updateAsistInfo(assistInfo); //esta en la principal
	//loadNewData(id);

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


}
