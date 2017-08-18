document.querySelector('#btn-save').addEventListener('click', saveEventData);
document.querySelector('#btn-publish').addEventListener('click', publishEvent);
document.querySelector('#venue').addEventListener('change', showCapacity);
document.querySelector('select[name="tipoEvento"').addEventListener('change', chageEventType);
document.querySelector('select[name="sponsor"').addEventListener('change', changeSponsor);
document.querySelector('input[id="ticketQ"]').addEventListener('change', validateTicketsPerVenue);
document.querySelector('select[name="orgName"]').addEventListener('change', listSelectedOrganizations);
document.querySelector('input[id="venueCost"]').addEventListener('change', validateAmounts);
document.querySelector('input[id="priceTicket"]').addEventListener('change', validateAmounts);
document.querySelector('input[id="sponsorValue"]').addEventListener('change', validateAmounts);
document.querySelector('input[id="entryFee"]').addEventListener('change', validateAmounts);
document.querySelector('#dateEnd').addEventListener('change', validateDateRange);
document.querySelector('#dateStart').addEventListener('change', validateStartEventDate);
document.querySelector('#weightDate').addEventListener('change', validateStartWeighingDate);

document.querySelector('.js-price-venue').hide();
document.querySelector('.js-price-ticket').hide();
document.querySelector('.js-sponsorship-value').hide();
document.querySelector('.js-registration-price').hide();

loadOrganizations();
loadPlaces();
loadSponsors();

function publishEvent(e) {
  e.preventDefault();
  var formInputs = document.querySelectorAll('#event-form .js-event-field:required');
  var $alertBox = $util('.js-login-msg');

  if (!validate.emptyFields(formInputs)) {
    var validForm = validate.fieldsValue('event-form');
    if (!validForm[1].length) {
      saveData(true);

      if ($alertBox) {
        $alertBox.removeClass('alert-failure')
        .addClass('alert-success')
        .html(msg.key.publishEventSuccess);
      } else {
        $util('.js-form').insertAdjacentHTML('afterbegin',
        '<span class="note alert alert-success js-login-msg">' + msg.key.publishEventSuccess + '</span>');
      }
    }
  }

  window.scrollTo(0, 0);
}

function saveEventData(e) {
  e.preventDefault();
  var formInputs = document.querySelectorAll('#event-form .js-event-field');
  var formInputsReq = document.querySelectorAll('#event-form .js-event-field:required');
  var eventNameInput = $util('.js-event-rs');
  var $alertBox = $util('.js-login-msg');

  for (var i = 0; i < formInputsReq.length; i++) {
    formInputsReq[i].removeClass('error')
  }

  if (eventNameInput.value) {
    eventNameInput.removeClass('error');
    saveData(false);

    if ($alertBox) {
      $alertBox.removeClass('alert-failure')
      .addClass('alert-success')
      .html(msg.key.registerEventSuccess);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin',
      '<span class="note alert alert-success js-login-msg">' + msg.key.registerEventSuccess + '</span>');
    }
  } else {
    if ($alertBox) {
      $alertBox.html(msg.key.nameFieldRequired);
    } else {
      $util('.js-form').insertAdjacentHTML('afterbegin',
      '<span class="note alert alert-failure js-login-msg">' + msg.key.nameFieldRequired + '</span>');
    }
    eventNameInput.addClass('error');
  }

  window.scrollTo(0, 0);
}

//Obteniendo los datos de los campos de texto
function saveData(pIsPublished) {

  var formInputs = document.querySelectorAll('#event-form .js-event-field');
  var name = document.querySelector('#eventName').value;
  var startDate = document.querySelector('#dateStart').value;
  var finalDate = document.querySelector('#dateEnd').value;
  var availableTickets = document.querySelector('#ticketQ').value;
  var priceTickets  = document.querySelector('#priceTicket').value;
  var eventType = document.querySelector('#tipoEvento').value;

  var registrationPrice = document.querySelector('#entryFee').value;
  var weighingDate = document.querySelector('#weightDate').value;
  var guest = document.querySelector('#guess').value;

  var categoriesSelected = document.querySelectorAll('input[type=checkbox]:checked');
  var idCategoriesSelected = [];

  for (var i = 0; i < categoriesSelected.length; i++) {
      idCategoriesSelected.push(categoriesSelected[i].id);
  }

  var venueCost = document.querySelector('#venueCost').value;
  var orgBenefited = document.querySelector('#guessOrg').value;
  var idPlace = document.querySelector('#venue').value;
  var sponsorId = document.querySelector('#sponsor').value;
  var productId = document.querySelector('#sponsorBrand').value;
  var sponsorshipType = document.querySelector('#sponsorType').value;
  var sponsorshipDesc = document.querySelector('#sponsorDesc').value;
  var sponsorValue = document.querySelector('#sponsorValue').value;

  var eventData = [];
  var organizations = document.querySelector('.js-org-list');
  organizations = organizations.getElementsByTagName('li');

  var organizationList = [];

  if (organizations.length) {
      for (var i = 0; i < organizations.length; ++i) {
          organizationList.push(organizations[i].id);
      }
  }

  var weighingStartDate = new Date(weighingDate);
  weighingStartDate.setDate(weighingStartDate.getDate() - 1);
  var maxRegistDate = '0000-00-00';
  if (weighingDate != "") {
    maxRegistDate = weighingStartDate.toISOString().substring(0,10);
  }

  eventData.push(name, startDate, finalDate, idPlace, availableTickets,
  priceTickets, eventType, registrationPrice, weighingDate, idCategoriesSelected, guest,
  organizationList, sponsorId, productId, sponsorshipType, sponsorshipDesc, sponsorValue,
  pIsPublished, maxRegistDate, venueCost, orgBenefited);

  document.querySelector('#btn-publish').disabled = true;
  misc.disableFieldsOnSave(formInputs);
  orm.registerEvent(eventData);

  var lastEventId = orm.findLastEvent();
  orm.registerExpense(venueCost,lastEventId);
}

function showCapacity(e) {
  var venueId = e.currentTarget.value;
  var venue = orm.findVenueById(venueId);
  document.querySelector('#venueCap').value = venue.capacidad;
  document.querySelector('#ticketQ').setAttribute("max", venue.capacidad);
  document.querySelector('#ticketQ').value = '';
}

function chageEventType(e) {
  var camposInvitado = $util('.js-guess');
  var camposCompeticion = $util('.js-competition-info');
  var gratis = $util('#entryFee');
  var fechaPesaje = $util('#weightDate');

  if (e.target.value === 'Exibicion') {
    camposInvitado.removeClass('is-hidden');
  } else {
    camposInvitado.addClass('is-hidden');
  }

  if (e.target.value === 'Torneo' || e.target.value === 'Fogueo') {
    camposCompeticion.removeClass('is-hidden');
    gratis.required = true;
    fechaPesaje.required = true;
  } else {
    camposCompeticion.addClass('is-hidden');
    gratis.required = false;
    fechaPesaje.required = false;
  }
}

function listSelectedOrganizations(e) {

  var orgSelect = $util('#orgName');
  var selected = orgSelect.options[orgSelect.selectedIndex].text;
  var organizationName = selected;
  var orgSelected = document.querySelectorAll('.js-org-item');
  var orgList = $util('.js-org-list');
  var existInList = false;

  for (var i = 0; i < orgSelected.length; i++) {
    var str = orgSelected[i].innerHTML;
    var res = str.split("<");

    if (res[0] == selected) {
      existInList = true;
    }
  }

  if (existInList == false && organizationName != 'Seleccione una organización...') {
    var liEl = document.createElement('li');
    var liTxt = document.createTextNode(organizationName);
    var anchorRemove = document.createElement('a');
    var linkText = document.createTextNode('Remover');

    liEl.className = 'js-org-item';
    anchorRemove.appendChild(linkText);
    anchorRemove.className = 'link-remove js-remove-org';

    liEl.appendChild(liTxt);
    liEl.setAttribute("id", e.target.value);
    liEl.setAttribute("value", organizationName);
    liEl.appendChild(anchorRemove);
    orgList.appendChild(liEl);
  }

  document.querySelectorAll('.js-remove-org').forEach(function(btnRemove) {
    btnRemove.addEventListener('click', function(e) {
      var currentItem = e.currentTarget.parentNode;
      currentItem.remove();
    });
  });
}

function changeSponsor(e) {
  var id = e.target.value;
  var sponsorField = $util('.js-sponsors-info');

  if (id) {
    sponsorField.removeClass('is-hidden');
    loadProds(id);
  } else {
    sponsorField.addClass('is-hidden');
  }
}

function loadProds(pId) {

  var prodsSponsor = orm.getProductBySponsor(pId);
  document.querySelector("#sponsorBrand").innerHTML = "";
  document.querySelector("#sponsorBrand").innerHTML = "<option selected>Seleccione un producto</option>";

  prodsSponsor.forEach(function (element) {
    document.querySelector("#sponsorBrand").innerHTML += "<option value='" + element.id_producto + "'>" + element.nombre_producto + "</option>";
  })
}

function loadPlaces() {

  var list = orm.findVenues();

  list.forEach(function (element) {
      document.querySelector("#venue").innerHTML += "<option value='" + element.id_lugar + "'>" + element.nombre_lugar + "</option>";
  })
}

function loadOrganizations() {
  var list = orm.findActiveOrgs();

  list.forEach(function (element) {
      document.querySelector("#orgName").innerHTML += "<option value='" + element.id_organizacion + "'>" + element.nombre + "</option>";
  })
}

function loadSponsors() {

  var list = orm.findSponsors();

  list.forEach(function (element) {
    document.querySelector("#sponsor").innerHTML += "<option value='" + element.id_patrocinador + "'>" + element.nombre_comercial + "</option>";
  })
}

function validateStartWeighingDate() {
  var today = validate.getToday();
  var fieldStartDate = document.querySelector('#weightDate');
  var startDate = document.querySelector('#weightDate').value;
  var startDateValue = new Date(startDate);
  startDateValue.setDate(startDateValue.getDate() + 2);
  var eventDateValue = document.querySelector('#dateStart').value;
  var startDateMsg = document.querySelector('.js-start-weighingDate-error');

  if ((Date.parse(startDate) < Date.parse(today)) || (Date.parse(eventDateValue) < startDateValue)) {
    startDateMsg.removeClass('is-hidden').addClass('alert-failure');
    fieldStartDate.addClass('error');
    fieldStartDate.value = '';
  } else {
    startDateValue.setDate(startDateValue.getDate() + 1);
    startDateMsg.addClass('is-hidden');
    fieldStartDate.removeClass('error');
  }
}

function validateStartEventDate() {
  var sDate = document.querySelector('#dateStart');

  validate.validateStartDate(sDate);
}

function validateDateRange() {
  var sDate = document.querySelector('#dateStart');
  var eDate = document.querySelector('#dateEnd');

  validate.validateDateRange(sDate,eDate);
}

function validateTicketsPerVenue(e) {

  var ticketsField = e.target;
  var ticketsFieldValue = Number(e.target.value);
  var venueCapField = Number($util('#venueCap').value);
  var message = $util('.js-ticket-quantity');

  if (Number.isInteger(ticketsFieldValue)) {
    if (ticketsFieldValue > venueCapField) {

      ticketsField.addClass('error');
      message.addClass('alert-failure');
      ticketsField.value = 0;
    } else if (ticketsFieldValue < 0) {

      ticketsField.addClass('error');
      message.addClass('alert-failure');
      ticketsField.value = 0;
    } else {

      ticketsField.removeClass('error');
      message.removeClass('alert-failure');
    }
  } else {

    ticketsField.addClass('error');
    message.addClass('alert-failure');
  }
}

function validateAmounts(e) {
  var idField = e.target.id;
  var priceTicketsField = e.target;
  var fieldValue = Number(e.target.value);
  var message;

  switch(idField) {

    case 'venueCost':
        message = $util('.js-price-venue');
        break;

    case 'priceTicket':
        message = $util('.js-price-ticket');
        break;

    case 'sponsorValue':
        message = $util('.js-sponsorship-value');

    default:
        message = $util('.js-registration-price');
  }

  if (fieldValue < 0) {

    message.show();
    priceTicketsField.addClass('error');
    message.addClass('alert-failure');
    priceTicketsField.value = 0;
  } else {

    message.hide();
    priceTicketsField.removeClass('error');
    message.removeClass('alert-failure');
  }
}
