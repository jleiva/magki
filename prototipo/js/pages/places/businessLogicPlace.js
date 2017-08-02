function registerData(pPlace){

  var request = $.ajax({
    url: 'services/registrar_lugar.php',
    type: 'post',
    dataType: 'json',
    async: false,
    data: {

      'placeName': pPlace.placeName,
      'placeTel': pPlace.placeTel,
      'placeSchedule': pPlace.placeSchedule,
      'placeCap': pPlace.placeCap,
      'placeAdress': pPlace.placeAdress,
      'placeLatitude': pPlace.placeLatitude,
      'placeLongitude': pPlace.placeLongitude

    }
  });

  request.done(function(){
    console.log('Registrado correctamente');
  })

  request.fail(function(jqXHR, textStatus, errorThrown){

    console.log(errorThrown);
  })
}
