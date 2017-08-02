document.addEventListener('DOMContentLoaded', function (){
  var prodsCount = 1;
  $util('#saveBttn').addEventListener('click',validateForm);
  $util('#sponsorLogo').addEventListener('change', function(){uploadImage("sponsorLogo","imgSponsor")});

  function validateForm(e) {
    e.preventDefault();
    var $alertBox = $util('.js-login-msg');
    var validForm;
    var id = $util('#txtID').value;
    var formInputs = document.querySelectorAll('#form-sponsor .js-form-field:required');

    if (!validate.emptyFields(formInputs)) {
      validForm = validate.fieldsValue('form-sponsor');

      if (!validForm[1].length) {
        if (orm.findSponsorbyId(id) == "") {
          saveData();

          if ($alertBox) {
            $alertBox.removeClass('alert-failure').addClass('alert-success').html(msg.key.saveSuccess);
            disableFields();
          } else {
            $util('.js-form').insertAdjacentHTML('afterbegin',
            '<span class="note alert-success js-login-msg">' + msg.key.saveSuccess+ '</span>');
            disableFields();
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

    window.scroll(0,0);
  }

  function saveData() {

    var name = $util('#txtName').value;
    var businessName = $util('#txtBusinessName').value;
    var id = $util('#txtID').value;
    var sponsorImg = $util('#sponsorLogo').files;
    var imgUrl = $util('#img').src;
    var imgUrlDiv = imgUrl.split("\\");
    var imgName = imgUrlDiv[2];
    var sponsorProds = [];
    var prodsName = $util(".add-product").getElementsByClassName('prod-Name');
    var prodsImg = $util(".add-product").getElementsByClassName('input-file');

    if($util("#txtProductName1").value != ""){
      for (var i = 0; i < $util(".add-product").getElementsByClassName('product-field').length; i++) {

        var prodInfo = { prodName: prodsName.item(i).value,
                         imgUrl: prodsImg.item(i).value,
                         idOwner: id};

        orm.registerSponsorProducts(prodInfo);
      }
    }

    var sponsor = {id: id,
                   name: name,
                   businessName: businessName,
                   logoSrc: imgUrl};

    orm.registerSponsor(sponsor);
  }

  function disableFields(){
    var inputs = document.getElementsByTagName('input');
    var removeBttns = $util(".add-product").getElementsByClassName('remove-input');

    for (var i = 0; i < removeBttns.length; i++) {
      removeBttns[i].hide();
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }
    
    $util(".moveAddBttn").hide();
    $util('#saveBttn').disabled = true;

    scrollTo(0,0);
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
