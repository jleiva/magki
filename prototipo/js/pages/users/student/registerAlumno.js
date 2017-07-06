document.querySelector('#save').addEventListener('click', validateForm);


function validateForm(e) {
  e.preventDefault();
  var validForm;

  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('register-user');

    // no hay errores
    if (!validForm[1].length) {
      datosRegistro();
    }

  }
}

function datosRegistro(){

  //declaracion de las varibles
  var id='';
  var firstName ='';
  var secName ='';
  var lastName='';
  var secLastName='';
  var bday= '';
  var email='';
  var weight=0;
  var height= 0;
  var gender='';
  var age='';
  var pTournament='';
  var wTournament= '';
  var belt='';
  var condition='';

  //declaro un arreglo
  var studentsInfo =[];

  id = document.querySelector('#id').value;
  firstName = document.querySelector('#name').value;
  secName  = document.querySelector('#sec-name').value;
  lastName  = document.querySelector('#last-name').value;
  secLastName  = document.querySelector('#sec-last-name').value;
  bday = document.querySelector('#bday').value;
  email  = document.querySelector('#email').value;
  weight=document.querySelector('#weight').value;
  height = document.querySelector('#height').value;
  gender = document.querySelector('#gender').value;
  age = document.querySelector('#age').value;
  pTournament  = document.querySelector('#part-tournament').value;
  wTournament  = document.querySelector('#win-tournament').value;
  belt =document.querySelector('#belt').value;

  /*belt  = document.querySelector('#belt');
 var selected = belt.options[belt.selectedIndex].text;*/


//Agregar las variables llenas de arriba, al arreglo de registro
  studentsInfo.push(id,firstName,secName,lastName,secLastName,bday,email,weight,height,gender,age,pTournament,wTournament,belt,true);
  registrar(studentsInfo);

}
