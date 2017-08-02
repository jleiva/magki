loadAcademyData();

$util('#btn-save').on('click', validateChanges);
$util('#placeLatitude').addEventListener('keyup', searchCoordinates);
$util('#placeLongitude').addEventListener('keyup', searchCoordinates);

function loadAcademyData() {
///////////////////
  var academyInfo = getAcademyById(academyId[1]);
  var formInputs = document.querySelectorAll('#editAcademy-form .js-form-field');

  document.querySelector('#academyName').value = academyInfo.nombre_academia;
  document.querySelector('#academyTel').value = academyInfo.telefono;
  document.querySelector('#academyEmail').value = academyInfo.email_academia;
  document.querySelector('#attendantName').value = academyInfo.nombre_encargado;
  document.querySelector('#attendantLastName').value = academyInfo.primer_apellido_encargado;
  document.querySelector('#attendantSecLastName').value = academyInfo.segundo_apellido_encargado;
  document.querySelector('#academyAddress').value = academyInfo.direccion;
  document.querySelector('#placeLatitude').value = academyInfo.latitud;
  document.querySelector('#placeLongitude').value = academyInfo.longitud;

  if (academyInfo.estado) {
    document.querySelector('#able').checked = true;
    misc.enabledFieldsOnEdit(formInputs);
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#editAcademy-form .js-form-field:required');
  var validForm;

  if (!validate.emptyFields(formInputs)) {
    validForm = validate.fieldsValue('editAcademy-form');

    if (!validForm[1].length) {
      saveNewData();

      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.academyUpdate);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin',
          '<span class="note alert alert-success js-login-msg">' + msg.key.academyUpdate+ '</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

function saveNewData(){
  var formInputs = document.querySelectorAll('#register-academy .js-form-field');
  var academyData = misc.buildDataObject(formInputs);

  editData(academyData);
  misc.disableFieldsOnSave(formInputs);
}

function searchCoordinates(){
  var lat = $util('#placeLatitude').value;
  var lng = $util('#placeLongitude').value;
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
    $util('#placeLatitude').value = place.geometry.location.lat();
    $util('#placeLongitude').value = place.geometry.location.lng();
  });
}
