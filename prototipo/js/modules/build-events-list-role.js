'use strict';

var eventRole = (function(window) {
  function buildEventsListProfile(eventsData) {
    var eventsTable = document.querySelector('#list-events tbody');

    eventsData.forEach(function(data) {
      var eventId = data.id_evento;
      var tr = document.createElement('tr');
      var eventName = document.createElement('td');
      var eventType = document.createElement('td');
      var eventActions = document.createElement('td');
      var anchorName = document.createElement('a');
      var nameTxt = document.createTextNode(data.nombre);
      var typeTxt = document.createTextNode(data.estado == '1' ? 'Publicado' : 'Sin publicar');

      anchorName.appendChild(nameTxt);
      anchorName.href = 'detalle-evento.php' + '?eventId=' + eventId;

      eventName.appendChild(anchorName)
      eventType.appendChild(typeTxt);

      var anchorEdit = document.createElement('a');
      var linkText = document.createTextNode('Editar');
      anchorEdit.appendChild(linkText);
      anchorEdit.className = 'btn-action-event js-edit-event';
      anchorEdit.href = 'editar-evento.php' + '?eventId=' + eventId;

      var anchorRegister = document.createElement('a');
      var linkText = document.createTextNode('Inscribir atletas');
      anchorRegister.appendChild(linkText);
      anchorRegister.className = 'btn-action-event js-athlete-event';
      anchorRegister.href = 'inscribir-competidores.php' + '?eventId=' + eventId;

      var anchorResults = document.createElement('a');
      var linkText = document.createTextNode('Registrar Resultados');
      anchorResults.appendChild(linkText);
      anchorResults.className = 'btn-action-event';
      anchorResults.href = 'registrar-resultados.php' + '?eventId=' + eventId;
      
      eventActions.appendChild(anchorEdit);
      eventActions.appendChild(anchorRegister);
      eventActions.appendChild(anchorResults);

      tr.appendChild(eventName);
      tr.appendChild(eventType);
      tr.appendChild(eventActions);

      eventsTable.appendChild(tr);
    });
  }

  function buildEventsListProfileProfesor(eventsData) {
    var eventsTable = document.querySelector('#list-events tbody');

    eventsData.forEach(function(data) {
      var eventId = data.id_evento;
      var tr = document.createElement('tr');
      var eventName = document.createElement('td');
      var eventSDate = document.createElement('td');
      var eventFDate = document.createElement('td');
      var eventLDate = document.createElement('td');
      var eventActions = document.createElement('td');

      var anchorName = document.createElement('a');
      var nameTxt = document.createTextNode(data.nombre);
      var sDateTxt = document.createTextNode(data.fecha_inicio);
      var fDateTxt = document.createTextNode(data.fecha_final);
      var wDateTxt = document.createTextNode(data.fecha_pesaje);
      var lDateTxt = document.createTextNode(data.limite_inscripcion);

      anchorName.appendChild(nameTxt);
      anchorName.href = 'detalle-evento.php' + '?eventId=' + eventId;

      eventName.appendChild(anchorName);
      eventSDate.appendChild(sDateTxt);
      eventFDate.appendChild(fDateTxt);
      eventLDate.appendChild(lDateTxt);

      var anchorRegister = document.createElement('a');
      var linkText = document.createTextNode('Inscribir atletas');
      anchorRegister.appendChild(linkText);
      anchorRegister.className = 'btn-action-event js-athlete-event';
      anchorRegister.href = 'inscribir-competidores.php' + '?eventId=' + eventId;
      
      eventActions.appendChild(anchorRegister);

      tr.appendChild(eventName);
      tr.appendChild(eventSDate);
      tr.appendChild(eventFDate);
      tr.appendChild(eventLDate);
      tr.appendChild(eventActions);

      eventsTable.appendChild(tr);
    });
  }

  function buildEventsListProfileStudent(eventsData) {
    var eventsTable = document.querySelector('#list-events tbody');

    eventsData.forEach(function(data) {
      var eventId = data.id_evento;
      var tr = document.createElement('tr');
      var eventName = document.createElement('td');
      var eventSDate = document.createElement('td');
      var eventFDate = document.createElement('td');
      var eventPlace = document.createElement('td');

      var anchorName = document.createElement('a');
      var nameTxt = document.createTextNode(data.nombre);
      var sDateTxt = document.createTextNode(data.fecha_inicio);
      var fDateTxt = document.createTextNode(data.fecha_final);
      var placeTxt = document.createTextNode(data.nombre_lugar);

      anchorName.appendChild(nameTxt);
      anchorName.href = 'detalle-evento.php' + '?eventId=' + eventId;

      eventName.appendChild(anchorName);
      eventSDate.appendChild(sDateTxt);
      eventFDate.appendChild(fDateTxt);
      eventPlace.appendChild(placeTxt);

      tr.appendChild(eventName);
      tr.appendChild(eventSDate);
      tr.appendChild(eventFDate);
      tr.appendChild(eventPlace);

      eventsTable.appendChild(tr);
    });
  }

  function buildEventsListWonProfileStudent(eventsData) {
    var eventsTable = document.querySelector('#list-events tbody');

    eventsData.forEach(function(data) {
      var eventId = data.id_evento;
      var userCategory = orm.findUserEventCategory(eventId, data.id_competidor);
      var tr = document.createElement('tr');
      var eventName = document.createElement('td');
      var eventSDate = document.createElement('td');
      var eventPlace = document.createElement('td');
      var eventBelt = document.createElement('td');
      var eventPos = document.createElement('td');

      var anchorName = document.createElement('a');
      var nameTxt = document.createTextNode(data.nombre);
      var sDateTxt = document.createTextNode(data.fecha_inicio);
      var placeTxt = document.createTextNode(data.nombre_lugar);
      var beltTxt = document.createTextNode(userCategory[0].description);
      var positionTxt = document.createTextNode(data.posicion_competidor);

      anchorName.appendChild(nameTxt);
      anchorName.href = 'detalle-evento.php' + '?eventId=' + eventId;

      eventName.appendChild(anchorName);
      eventSDate.appendChild(sDateTxt);
      eventPlace.appendChild(placeTxt);
      eventBelt.appendChild(beltTxt);
      eventPos.appendChild(positionTxt);

      tr.appendChild(eventName);
      tr.appendChild(eventSDate);
      tr.appendChild(eventPlace);
      tr.appendChild(eventBelt);
      tr.appendChild(eventPos);

      eventsTable.appendChild(tr);
    });
  }

  return {
    buildEventsListProfile: buildEventsListProfile,
    buildEventsListProfileProfesor: buildEventsListProfileProfesor,
    buildEventsListProfileStudent: buildEventsListProfileStudent,
    buildEventsListWonProfileStudent: buildEventsListWonProfileStudent
  }
})(window);