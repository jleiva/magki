var infoSponsor = JSON.parse(localStorage.getItem('infoSponsorLS'));
var productsInfo=[];
var srcDataLogoSponsor="";
var srcDataLogoProduct="";
var fileSponsorSelected;
var filesProductSelected;
$util('#saveBttn').on('click', validateForm);
$util('#sponsorLogo').addEventListener("change", uploadSponsorImage);
$util('#productLogo').addEventListener("change", uploadSProductImage);
$util('#addProdBttn').addEventListener("click", saveProduct);
fillForm();
document.querySelector('#txtID').disabled = true;

function fillForm(){

  document.querySelector('#txtID').value = infoSponsor[0];
  document.querySelector('#txtName').value = infoSponsor[1];
  document.querySelector('#txtBusinessName').value = infoSponsor[2];

  if (infoSponsor[3]) {
    document.querySelector('#hab').checked = true;
    enableFields();
  } else {
    disableFields();
  }
}

function disableFields() {
  document.querySelector('#deshab').checked = true;
  document.querySelector('#txtID').disabled = true;
  document.querySelector('#txtName').disabled = true;
  document.querySelector('#txtBusinessName').disabled = true;
  document.querySelector('#txtProductName').disabled = true;
  document.querySelector('#productLogo').disabled = true;
  document.querySelector('#sponsorLogo').disabled = true;
  document.querySelector('#addProdBttn').hide();
  document.getElementsByName('productError').hide();
  document.getElementsByName('registeredProd').hide();
}

function enableFields() {
  document.querySelector('#hab').checked = true;
  document.querySelector('#txtName').disabled = false;
  document.querySelector('#txtBusinessName').disabled = false;
  document.querySelector('#txtProductName').disabled = false;
  document.querySelector('#sponsorLogo').disabled = false;
  document.querySelector('#productLogo').disabled = false;
  document.querySelector('#addProdBttn').show();
}

function validateForm(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var validForm;
  var id = document.querySelector('#txtID').value;

  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('edit-sponsor');

    if (!validForm[1].length) {
      getInfo();

      if ($alertBox) {
        $alertBox.removeClass('alert-failure').addClass('alert-success').html(msg.key.saveSuccess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin',
        '<span class="note alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
      }
    }
  }
}

function getInfo(){
  var info = [];
  var id = document.querySelector('#txtID').value;
  var name = document.querySelector('#txtName').value;
  var businessName = document.querySelector('#txtBusinessName').value;
  var optionStatus = document.getElementsByName('status');
  var productName = document.querySelector('#txtProductName').value;
  var statusRadioButton = false;
  var status = false;

  for(i=0;i<optionStatus.length;i++){
    if (optionStatus[i].checked){
      statusRadioButton = optionStatus[i].value;
    }
  }

  if (statusRadioButton == "Habilitado") {
    document.querySelector('#hab').checked = true;
    status = true;
    enableFields();
  } else {
    document.querySelector('#deshab').checked = true;
    status = false;
    disableFields();
  }

  if(srcDataLogoSponsor == ""){
    srcDataLogoSponsor = infoSponsor[4];
  }

  if(productName != "") {
    productsInfo.push(srcDataLogoProduct,productName);
    info.push(id,name,businessName,status,srcDataLogoSponsor,productsInfo);
    editSponsor(info);

    $util('.save-product').insertAdjacentHTML('afterbegin',
    '<span class="note alert-success js-login-msg" name="registeredProd">' + msg.key.registeredProduct+ '</span>');
    setTimeout(function(){ document.getElementsByName('registeredProd').hide(); }, 5000);
  }else{
    info.push(id,name,businessName,status,srcDataLogoSponsor);
    editSponsor(info);
  }
}

function uploadSponsorImage() {
  fileSponsorSelected = document.getElementById("sponsorLogo").files;

  if (fileSponsorSelected.length > 0) {
    var fileToLoad = fileSponsorSelected[0];
    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      srcDataLogoSponsor = fileLoadedEvent.target.result; // <--- base64
      var newImage = document.createElement('img');
      newImage.src = srcDataLogoSponsor;
      document.getElementById("imgSponsor").innerHTML = newImage.outerHTML;
    }
    fileReader.readAsDataURL(fileToLoad);
    filesSelected=null;
  }
}

function uploadSProductImage() {
  filesProductSelected = document.getElementById("productLogo").files;

  if (filesProductSelected.length > 0) {
    var fileToLoad = filesProductSelected[0];
    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      srcDataLogoProduct = fileLoadedEvent.target.result; // <--- base64
      var newImage = document.createElement('img');
      newImage.src = srcDataLogoProduct;
      document.getElementById("imgProducto").innerHTML = newImage.outerHTML;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}

function saveProduct(e){
  e.preventDefault();
  document.getElementsByName('productError').hide();
  document.getElementsByName('registeredProd').hide();
  var nameProduct = $util('#txtProductName').value;
  var id = $util('#txtID').value;

  if(nameProduct != ""){
    productsInfo.push(srcDataLogoProduct,nameProduct);
    addProductSponsor(id,productsInfo);

    $util('.save-product').insertAdjacentHTML('afterbegin',
    '<span class="note alert-success js-login-msg" name="registeredProd">' + msg.key.registeredProduct+ '</span>');
    setTimeout(function(){ document.getElementsByName('registeredProd').hide(); }, 5000);

    $util('#txtProductName').value = "";
  }else{
    $util('.save-product').insertAdjacentHTML('afterbegin',
    '<span class="note alert-failure js-login-msg" name="productError">' + msg.key.productError+ '</span>');
  }
}
