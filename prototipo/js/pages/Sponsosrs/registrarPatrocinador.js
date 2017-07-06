var productsInfo=[];
var srcDataLogoSponsor="";
var srcDataLogoProduct="";
$util('#sponsorLogo').addEventListener("change", uploadSponsorImage);
$util('#productLogo').addEventListener("change", uploadSProductImage);
$util('#addProdBttn').addEventListener("click", saveProduct);
$util('#saveBttn').on('click',validateForm);


function validateForm(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var validForm;
  //quitar campo requerido
  document.getElementById("txtProductName").required = false;

  if (!validate.emptyFields()) {
    validForm = validate.fieldsValue('register-sponsor');

    if (!validForm[1].length) {
      saveData();
      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
        .addClass('alert-success')
        .html(msg.key.registerSponsorSuccess);
        disableFields();
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin',
         '<span class="note alert-success js-login-msg">' + msg.key.registerSponsorSuccess+ '</span>');
         disableFields();
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

  if(productName != "") {
    productsInfo.push(id,productName);
    addProductSponsor(productsInfo);
  }

  sponsorInfo.push(id,name,businessName,status,srcDataLogoSponsor);
  addSponsor(sponsorInfo);
}

function disableFields(){
  var elems = document.getElementsByTagName('input');
  var len = elems.length;

  for (var i = 0; i < len; i++) {
    elems[i].disabled = true;
  }

  $util('#productLogo').disabled = false;
  $util('#txtProductName').disabled = false;
  $util('#addProdBttn').disabled = false;
  $util('#productLogo').required = true;
  $util('#txtProductName').required = true;
  $util('#txtProductName').value = "";
  document.getElementById("imgProducto").innerHTML= "";
}

function uploadSponsorImage() {
  var filesSelected = document.getElementById("sponsorLogo").files;

  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      srcDataLogoSponsor = fileLoadedEvent.target.result; // <--- base64
      var newImage = document.createElement('img');
      newImage.src = srcDataLogoSponsor;
      document.getElementById("imgSponsor").innerHTML = newImage.outerHTML;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}

function uploadSProductImage() {
  var filesSelected = document.getElementById("productLogo").files;

  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
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

function saveProduct(){
  var id = document.querySelector('#txtID').value;
  var nameProduct = document.querySelector('#txtProductName').value;

  if(nameProduct != "" && srcDataLogoProduct != ""){
    productsInfo.push(id,nameProduct,srcDataLogoProduct);
    addProductSponsor(productsInfo);

    document.getElementById("imgProducto").innerHTML= "";
    $util('#txtProductName').value = "";
    srcDataLogoProduct="";
  }
}
