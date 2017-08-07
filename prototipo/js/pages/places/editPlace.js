loadPlaceData();

$util('#btn-save').on('click', validateChanges);
$util('#placeLatitude').addEventListener('keyup', searchCoordinates);
$util('#placeLongitude').addEventListener('keyup', searchCoordinates);

function loadPlaceData() {
  var queryUrl = misc.getQueryParams(window.location.search);
  var placeId = queryUrl.id;
  var placeInfo = orm.findVenueById(placeId);
  var formInputs = document.querySelectorAll('#editPlace-form .js-form-field');

  document.querySelector('#namePlace').value = placeInfo.nombre_lugar;
  document.querySelector('#telPlace').value = placeInfo.telefono;
  document.querySelector('#schedule').value = placeInfo.horario;
  document.querySelector('#adressPlace').value = placeInfo.direccion;
  document.querySelector('#capPlace').value = Number(placeInfo.capacidad);
  document.querySelector('#placeLatitude').value = Number(placeInfo.latitud);
  document.querySelector('#placeLongitude').value = Number(placeInfo.longitud);

  if (Number(placeInfo.estado) == 1) {
    document.querySelector('#able').checked = true;
    misc.enabledFieldsOnEdit(formInputs);
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }
}

function validateChanges(e) {
  e.preventDefault();
  var $alertBox = $util('.js-login-msg');
  var formInputs = document.querySelectorAll('#editPlace-form .js-form-field:required');

  if (!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('editPlace-form');

    if (!validForm[1].length) {
      saveNewData();

      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
          .addClass('alert-success')
          .html(msg.key.placeUpdate);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin',
          '<span class="note alert alert-success js-login-msg">' + msg.key.placeUpdate+ '</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

function saveNewData(){
  var queryUrl = misc.getQueryParams(window.location.search);
  var placeId = queryUrl.id;
  var formInputs = document.querySelectorAll('#editPlace-form .js-form-field');
  var placeData = misc.buildDataObject(formInputs);
  var status = document.querySelector('#able').checked;
  placeData.status = status;

  if (status) {
    misc.enabledFieldsOnEdit(formInputs);
  } else {
    misc.disableFieldsOnEdit(formInputs);
  }

  orm.updateVenue(placeData,placeId);
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
