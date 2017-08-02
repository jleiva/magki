$util('#btn-save').on('click', validateAcademy);
$util('#latitudLugar').addEventListener('keyup', searchCoordinates);
$util('#longitudLugar').addEventListener('keyup', searchCoordinates);

function validateAcademy(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#register-academy .js-form-field:required');
  var validForm;

  if (!validate.emptyFields(formInputs)) {
    validForm = validate.fieldsValue('register-academy');

    if (!validForm[1].length) {
      registerAcademy();

      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.academySucess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin',
          '<span class="note alert alert-success js-login-msg">' + msg.key.academySucess+ '</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

function registerAcademy(){
  var formInputs = document.querySelectorAll('#register-academy .js-form-field');
  var academyData = misc.buildDataObject(formInputs);

  registerData(academyData);
  misc.disableFieldsOnSave(formInputs);
}

function searchCoordinates(){
  var lat = $util('#latitudLugar').value;
  var lng = $util('#longitudLugar').value;
  var myLatlng;

  if(lat != 0 && lng != 0) {

    myLatlng = new google.maps.LatLng(lat,lng);
    map.setCenter(myLatlng);
    marker.setPosition(myLatlng);
    map.setZoom(18);
    marker.setVisible(true);
	}
}

function initMap() {
  var input = document.getElementById('input-map');

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 9.935674, lng: -84.103978},
    zoom: 16,
    mapTypeId: 'hybrid',
  });

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  marker = new google.maps.Marker({
		map: map,
    animation: google.maps.Animation.DROP,
    visible: false
	});

  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function() {

    var place = autocomplete.getPlace();
    map.setCenter(place.geometry.location);
    marker.setVisible(true);
    marker.setPosition(place.geometry.location);
    map.setZoom(18);
    $util('#latitudLugar').value = place.geometry.location.lat();
    $util('#longitudLugar').value = place.geometry.location.lng();
  });
}
