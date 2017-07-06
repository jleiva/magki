var infoSponsor = JSON.parse(localStorage.getItem('infoSponsorLS'));
fillForm();
document.querySelector('#saveBttn').addEventListener('click', getInfo);

function fillForm(){
  document.querySelector('#txtID').value = infoSponsor[0];
  document.querySelector('#txtName').value = infoSponsor[1];
  document.querySelector('#txtBusinessName').value = infoSponsor[2];
}

function getInfo(){
  var info = [];
  var id = document.querySelector('#txtID').value;
  var name = document.querySelector('#txtName').value;
  var businessName = document.querySelector('#txtBusinessName').value;
  var optionStatus = document.getElementsByName('status');
  var statusRadioButton ="";

  for(i=0;i<optionStatus.length;i++){
    if (optionStatus[i].checked){
      statusRadioButton = optionStatus[i].value;
    }
  }

  if(statusRadioButton == ""){
    statusRadioButton = infoSponsor[3];;
  }

  info.push(id,name,businessName,statusRadioButton);
  editSponsor(info);
}

function editSponsor(pInfoEdit){
  var sponsorList = getSponsorList();

  for(var i = 0; i < sponsorList.length; i++){
    if(sponsorList[i][0] == pInfoEdit[0]){
      sponsorList[i] = pInfoEdit;
    }
  }
  localStorage.setItem('sponsorListLS', JSON.stringify(sponsorList));
  window.location="listarPatrocinador.html";
}

/*function editSponsor(){
  window.location="editarPatrocinador.html";
}*/

/*var optionStatus = document.getElementsByName('status');
var statusRadioButton ="";*/
/*for(i=0;i<optionStatus.length;i++) {
  if (optionStatus[i].checked){
    statusRadioButton = optionStatus[i].value;
  }
}*/
