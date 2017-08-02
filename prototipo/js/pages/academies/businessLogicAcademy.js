function registerData(pAcademy) {
  var request = $.ajax({
    url: 'services/registrar_academia.php',
    type: 'post',
    dataType: 'json',
    async: false,
    data: {
      'academyName': pAcademy.academyName,
      'academyTel': pAcademy.academyTel,
      'academyEmail': pAcademy.academyEmail,
      'attendantName': pAcademy.attendantName,
      'attendantLastName': pAcademy.attendantLastName,
      'attendantSecLastName': pAcademy.attendantSecLastName,
      'academyAddress': pAcademy.academyAddress,
      'placeLatitude': pAcademy.placeLatitude,
      'placeLongitude': pAcademy.placeLongitude
    }
  });

  request.done(function() {
    console.log('Registrado correctamente');
  })

  request.fail(function(jqXHR, textStatus, errorThrown) {

    console.log(errorThrown);
  })
}

function getAcademyList() {
  var academiesList = [];
  var request = $.ajax({
    url: 'services/listar_academias.php',
    dataType: 'json',
    async: false,
    method: 'get',
    data:{}
  });

  request.done(function(datos) {
    academiesList = datos;
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(errorThrown);
  })

  return academiesList;
}
