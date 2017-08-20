document.addEventListener('DOMContentLoaded', function() {
  var logguedIn = orm.findLogguedUser();
  var queryUrl = misc.getQueryParams(document.location.search);
  var eventId = queryUrl.eventId;
  var isRankingPage = document.querySelector('#ranking-page');
  var isDetailPage = document.querySelector('#detail-page');

  fillEventData();

  if (isRankingPage) {
    var winnersPage = document.querySelector('.non-active');
    winnersPage.href = 'detalle-evento.php' + '?eventId=' + eventId;
    fillWinnersTable();
  }

  if (isDetailPage) {
    var winnersPage = document.querySelector('.non-active');
    winnersPage.href = 'ranking-ganadores-torneo.php' + '?eventId=' + eventId;
    fillUsersTable();
  }

  function fillEventData() {
    var eventInfo = orm.findEventbyId(eventId);

    document.querySelector('.promo-box__title').innerHTML = eventInfo[0].nombre;
    document.querySelector('#place').innerHTML = eventInfo[0].nombre_lugar;

    var fecha_inicio = misc.modifiedDateFormat(eventInfo[0].fecha_inicio);
    document.querySelector('#date').innerHTML = fecha_inicio;
    document.querySelector('#typeEvent').innerHTML = eventInfo[0].tipo_evento;
    document.querySelector('#price').innerHTML = '¢' + eventInfo[0].valor_entrada;
    document.querySelector('#availableTickets').innerHTML = eventInfo[0].entradas_disponibles;
  }

  function fillUsersTable() {
    var alumList = orm.findStudentsByEvent(eventId);

    if (alumList.length) {
      fillTable(alumList);
    }
  }

  function fillTable(alumList) {
    var tbody = document.querySelector('#event-detail-users tbody');
    var $error = document.querySelector('.no-data');

    $error.style.display = 'none';
    tbody.innerHTML = '';

    for (var i=0; i < alumList.length; i++) {
      var row = tbody.insertRow();
      var idColumn = row.insertCell();
      var nameColumn = row.insertCell();
      var catColumn = row.insertCell();
      var beltColumn = row.insertCell();
      var acadColumn = row.insertCell();
      var userCategory = orm.findUserEventCategory(eventId, alumList[i].id_usuario);
      
      idColumn.innerHTML = alumList[i].id_usuario;
      nameColumn.innerHTML = alumList[i].primer_nombre + ' ' + alumList[i].segundo_nombre + ' ' + alumList[i].primer_apeliido + ' ' + alumList[i].segundo_apellido;
      catColumn.innerHTML = userCategory[0].description;
      beltColumn.innerHTML = alumList[i].nombre_cinturon;
      acadColumn.innerHTML = alumList[i].nombre_academia;
    }
  }

  function fillWinnersTable() {
    var winnerList = orm.findTournamentWinners(eventId);
    var tbody = document.querySelector('#event-detail-users tbody');
    var $error = document.querySelector('.no-data');

    $error.style.display = 'none';
    tbody.innerHTML = '';

    for (var i=0; i < winnerList.length; i++) {
      var row = tbody.insertRow();
      var idColumn = row.insertCell();
      var nameColumn = row.insertCell();
      var catColumn = row.insertCell();
      var beltColumn = row.insertCell();
      var acadColumn = row.insertCell();
      var posColumn = row.insertCell();
      var userCategory = orm.findUserEventCategory(eventId, winnerList[i].id_usuario);
      
      idColumn.innerHTML = winnerList[i].id_usuario;
      nameColumn.innerHTML = winnerList[i].primer_nombre + ' ' + winnerList[i].segundo_nombre + ' ' + winnerList[i].primer_apeliido + ' ' + winnerList[i].segundo_apellido;
      catColumn.innerHTML = userCategory[0].description;
      beltColumn.innerHTML = winnerList[i].cinta_competidor;
      acadColumn.innerHTML = winnerList[i].nombre_academia;
      posColumn.innerHTML = winnerList[i].posicion_competidor;
    }
  }
});