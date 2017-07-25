document.addEventListener('DOMContentLoaded', function (){
  var prodsCount = 1;
  $util('#saveBttn').on('click', validateEditForm);
  fillForm();
  document.querySelector('#txtID').disabled = true;
  $util('#sponsorLogo').addEventListener("change", function(){uploadImage("sponsorLogo","imgSponsor")});

  function fillForm(){
    var infoSponsor = JSON.parse(localStorage.getItem('infoSponsorLS'));

    document.querySelector('#txtID').value = infoSponsor.id;
    document.querySelector('#txtName').value = infoSponsor.name;
    document.querySelector('#txtBusinessName').value = infoSponsor.businessName;

    if (infoSponsor.status == false) {
      disableFields();
    } else {
      enableFields();
    }
  }

  function disableFields() {
    document.querySelector('#deshab').checked = true;
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }

    $util("#deshab").disabled = false;
    $util("#hab").disabled = false;
    scrollTo(0,0);
  }

  function enableFields() {
    document.querySelector('#hab').checked = true;
    document.querySelector('#txtName').disabled = false;
    document.querySelector('#txtBusinessName').disabled = false;
    document.querySelector('#sponsorLogo').disabled = false;
  }

  function validateEditForm(e) {
    e.preventDefault();
    var $alertBox = $util('.js-login-msg');
    var validForm;
    var formInputs = document.querySelectorAll('#edit-sponsor .js-form-field:required');
    var removeBttns = $util(".add-product").getElementsByClassName('remove-input');

    if (!validate.emptyFields(formInputs)) {
      validForm = validate.fieldsValue('edit-sponsor');
      if (!validForm[1].length) {
        saveData();

        if ($alertBox) {
          $alertBox.removeClass('alert-failure').addClass('alert-success').html(msg.key.saveSuccess);
          disableFields()

          for (var i = 0; i < removeBttns.length; i++) {
            removeBttns[i].hide();
          }

          $util(".moveAddBttn").hide();
          $util("#deshab").disabled = true;
          $util("#hab").disabled = true;
          $util('#saveBttn').disabled = true;
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin',
          '<span class="note alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
          disableFields()

          for (var i = 0; i < removeBttns.length; i++) {
            removeBttns[i].hide();
          }

          $util(".moveAddBttn").hide();
          $util("#deshab").disabled = true;
          $util("#hab").disabled = true;
          $util('#saveBttn').disabled = true;
        }
      }
    }
  }

  function saveData() {
    var sponsorList = getSponsorList();
    var prodInfo = [];
    var prods = [];
    var name = $util('#txtName').value;
    var businessName = $util('#txtBusinessName').value;
    var id = $util('#txtID').value;
    var sponsorImg = $util('#sponsorLogo').files;
    var prodsName = $util(".add-product").getElementsByClassName('prod-Name');
    var prodsImg = $util(".add-product").getElementsByClassName('input-file');
    var status = $util('#hab').checked;

    if (status) {
      document.querySelector('#hab').checked = true;
    } else {
      document.querySelector('#deshab').checked = true;
    }

    for (var i = 0; i < sponsorList.length; i++) {
      if(sponsorList[i].id == id){
        sponsorList[i].id = id;
        sponsorList[i].name = name;
        sponsorList[i].businessName = businessName;
        sponsorList[i].status = status;
        sponsorList[i].sponsorImg = sponsorImg;

        if($util("#txtProductName1").value != "") {
          for (var h = 0; h < $util(".add-product").getElementsByClassName('product-field').length; h++) {

            var prodInfo = { prodName: prodsName.item(h).value,
                             logo: prodsImg.item(h).files };

            prods.push(prodInfo);
          }

          for (var x = 0; x < prods.length; x++) {
            sponsorList[i].sponsorProds.push(prods[x]);
          }
        }
      }
    }

    editSponsor(sponsorList);
  }

  $util(".moveAddBttn").addEventListener('click',function() {
    prodsCount++;
    $util("#txtProductName1").required = true;
    $util("#txtProductName1").classList.add('js-form-field');
    $util(".add-product").insertAdjacentHTML('beforeend',
    '<div class=\"product-field\" id=\"divProduct'+ prodsCount +'\"/>');

    $util("#divProduct"+ prodsCount).insertAdjacentHTML('beforeend',
    '<div class=\"field-wrapper\" id=\"divNameProduct'+ prodsCount +'\"/>');

    $util("#divProduct"+ prodsCount).insertAdjacentHTML('beforeend',
    '<label for=\"txtProductName' + prodsCount + '\">Nombre del producto <abbr title="Requerido">*</abbr></label>');

    $util("#divProduct"+ prodsCount).insertAdjacentHTML('beforeend',
    '<input type=\"text\" class=\"prod-Name js-form-field\" id=\"txtProductName' + prodsCount + '\" required/>');

    $util("#divProduct"+ prodsCount).insertAdjacentHTML('beforeend',
    '<div class=\"imgProdLogo\" id=\"imgProducto'+ prodsCount +'\"/>');

    $util("#divProduct"+ prodsCount).insertAdjacentHTML('beforeend',
    '<input type=\"file\" class=\"input-file\" id=\"productLogo'+ prodsCount +'\"/>');

    $util("#divProduct"+ prodsCount).insertAdjacentHTML('beforeend',
    '<div class=\"divRemoveBttn\"><img src=\"img/remove.png\" class=\"remove-input\" id=\"remmoveBttn'+ prodsCount +'\"/></div>');
  });

  $util('.add-product').addEventListener('change', function (e){
    if(e.target.classList.contains("input-file")) {
      var inputIdImgProduct = e.target.id;
      var num = inputIdImgProduct.split("");
      var divIdImgProduct = "imgProducto"+ num[11];
      uploadImage(inputIdImgProduct,divIdImgProduct);
    }
  });

  $util('.add-product').addEventListener('click', function (e){
    if(2 == $util(".add-product").getElementsByClassName('product-field').length){
      $util("#txtProductName1").required = false;
      $util("#txtProductName1").classList.remove('error');
    }

    if(e.target.classList.contains("remove-input")) {
      $util("#"+e.target.id).parentNode.parentNode.remove();
    }
  });
});
