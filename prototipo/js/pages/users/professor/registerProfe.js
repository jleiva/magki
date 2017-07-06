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
  //declaracion de las varibles de los labels vacias
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

  //declaro un arreglo para guardar todo
  var professorInfo =[];

  //se intenta ver los inputs desde aca llamandolos ids
  id=document.querySelector('#id').value;
  firstName= document.querySelector('#name').value;
  secName= document.querySelector('#secName').value;
  lastName= document.querySelector('#lastName').value;
  secLastName=document.querySelector('#secLastName').value;
  bday=document.querySelector('#bday').value;
  email= document.querySelector('#email').value;
  phone=document.querySelector('#phone').value;
  gender=document.querySelector('#gender').value;
  age=document.querySelector('#age').value;
  academy=document.querySelector('#academy').value;
  belt=document.querySelector('#belt').value;


//Agregar las variables llenas de arriba, al arreglo de registro
  professorInfo.push(id,firstName,secName,lastName,secLastName,bday,email,phone,gender,age,academy,belt);
  registrar(professorInfo);

}
