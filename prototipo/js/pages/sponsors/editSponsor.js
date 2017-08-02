document.addEventListener('DOMContentLoaded', function () {
  var prodsCount = 1;
  $util('#saveBttn').on('click', validateEditForm);
  document.querySelector('#txtID').disabled = true;
  fillForm();
  
  $util('#sponsorLogo').addEventListener("change", function() {
    uploadImage("sponsorLogo","imgSponsor");
  });

  function fillForm(){
    var queryUrl = misc.getQueryParams(document.location.search);
    var sponsorId = queryUrl.id;
    var infoSponsor = orm.findSponsorbyId(sponsorId);
    var imgSrc = infoSponsor[0].img_src;
    uploadImgSponsor('imgSponsor', imgSrc);
    document.querySelector('#txtID').value = infoSponsor[0].id_patrocinador;
    document.querySelector('#txtName').value = infoSponsor[0].nombre_comercial;
    document.querySelector('#txtBusinessName').value = infoSponsor[0].razon_social;

    if (infoSponsor[0].estado == 1) {
      enableFields();
    } else {
      disableFields();
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
    $util('#productsList').disabled = true;
    $util(".moveAddBttn").hide();

    scrollTo(0,0);
  }

  function enableFields() {
    document.querySelector('#hab').checked = true;
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }

    $util("#deshab").disabled = false;
    $util("#hab").disabled = false;
    $util('#productsList').disabled = false;
    $util(".moveAddBttn").show();
    document.querySelector('#txtID').disabled = true;

    scrollTo(0,0);
  }

  function validateEditForm(e) {
    e.preventDefault();
    var $alertBox = $util('.js-login-msg');
    var formInputs = document.querySelectorAll('#edit-sponsor-form .js-form-field:required');

    if (!validate.emptyFields(formInputs)) {
      var validForm = validate.fieldsValue('edit-sponsor-form');

      if (!validForm[1].length) {
          saveData();
      
        if ($alertBox) { 
          $alertBox.removeClass('alert-failure')
            .addClass('alert-success')
            .html(msg.key.saveSuccess);
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
        }
      } else {
        if ($alertBox) { 
          $alertBox
            .removeClass('alert-success')
            .addClass('alert-failure')
            .html('Este código ya existe, no se realizó el registro');
        } else {
          $util('.js-form').insertAdjacentHTML('afterbegin', 
          '<span class="note alert alert-failure js-login-msg">Este código ya existe, no se realizó el registro</span>');
        }
      }
    }

    window.scrollTo(0, 0);
  }

  function saveData() {
    var name = $util('#txtName').value;
    var businessName = $util('#txtBusinessName').value;
    var id = $util('#txtID').value;
    var sponsorImg = $util('#sponsorLogo').files;
    var imgSrc = $util('#img').src;
    var sponsorProds = [];
    var prodsName = $util(".add-product").getElementsByClassName('prod-Name');
    var prodsImg = $util(".add-product").getElementsByClassName('input-file');
    var status = $util("#hab").checked;
    var statusvalue = 1;

    if(!status) {
      statusvalue = 0;
      disableFields();
    } else {
      enableFields();
    } 

    if($util("#txtProductName1").value != ""){
      for (var i = 0; i < $util(".add-product").getElementsByClassName('product-field').length; i++) {

        var prodInfo = { 
                        prodName: prodsName.item(i).value,
                        imgUrl: prodsImg.item(i).value.split("\\"),
                        idOwner: id
                       };

        orm.registerSponsorProducts(prodInfo);
      }
    }

    var sponsorInfo = {
                  id: id,
                  name: name,
                  businessName: businessName,
                  logoSrc: imgSrc,
                  status: statusvalue
                };

    orm.updateSponsorInfo(sponsorInfo);
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
