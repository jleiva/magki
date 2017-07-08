var productsInfo=[];
var srcDataLogoSponsor="";
var srcDataLogoProduct="";
var fileSponsorSelected;
var filesProductSelected;
$util('#sponsorLogo').addEventListener("change", uploadSponsorImage);
$util('#productLogo').addEventListener("change", uploadSProductImage);
$util('#addProdBttn').addEventListener("click", saveProduct);
$util('#saveBttn').on('click',validateForm);
$util('#addProdBttn').hide();

function validateForm(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var validForm;
  $util("#txtProductName").required = false;
  var id = $util('#txtID').value;

  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('register-sponsor');

    if (!validForm[1].length) {
      if (getInfoById(id) == "") {
        saveData();

        if ($alertBox) {
          $alertBox.removeClass('alert-failure').addClass('alert-success').html(msg.key.saveSuccess);
          disableFields()
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin',
          '<span class="note alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
          disableFields()
        }
      } else {
        if ($alertBox) {
          $alertBox.removeClass('alert-success').addClass('alert-failure').html('Esta cédula ya está en el sistema');
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin',
          '<span class="note alert-failure js-login-msg">Esta cédula ya está en el sistema</span>');
        }
      }
    }
  }
}

function saveData() {
  var sponsorInfo=[];
  var name = $util('#txtName').value;
  var businessName = $util('#txtBusinessName').value;
  var id = $util('#txtID').value;
  var productName = $util('#txtProductName').value;
  var status = true;

  if(productName != ""/* && filesProductSelected != null*/) {
    productsInfo.push(srcDataLogoProduct,productName);
    sponsorInfo.push(id,name,businessName,status,srcDataLogoSponsor,productsInfo);
    addSponsor(sponsorInfo);

    $util('.save-product').insertAdjacentHTML('afterbegin',
    '<span class="note alert-success js-login-msg" name="registeredProd">' + msg.key.registeredProduct+ '</span>');
    setTimeout(function(){ document.getElementsByName('registeredProd').hide(); }, 5000);
  }else{
    sponsorInfo.push(id,name,businessName,status,srcDataLogoSponsor);
    addSponsor(sponsorInfo);

  }
}

function disableFields(){
  var elems = document.getElementsByTagName('input');
  var len = elems.length;

  for (var i = 0; i < len; i++) {
    elems[i].disabled = true;
  }

  $util('#productLogo').disabled = false;
  $util('#txtProductName').disabled = false;
  $util('#saveBttn').hide();
  $util('#addProdBttn').show();
  $util('.save-product').addClass('square-add-product');
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
