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


  //declaro un arreglo para guardar todo
  var assistentInfo =[];

  //se intenta ver los inputs desde aca llamandolos ids
  id = document.querySelector('#id').value;
  firstName = document.querySelector('#name').value;
  secName  = document.querySelector('#sec-name').value;
  lastName  = document.querySelector('#last-name').value;
  secLastName  = document.querySelector('#sec-last-name').value;
  bday = document.querySelector('#bday').value;
  email  = document.querySelector('#email').value;
  phone=document.querySelector('#phone').value;
  gender=document.querySelector('#gender').value;
  age=document.querySelector('#gender').value;


//Agregar las variables llenas de arriba, al arreglo de registro
  assistentInfo.push(id,firstName,secName,secLastName,bday,email,phone,gender,age);
  registrar(assistentInfo);

}
