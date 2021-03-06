fillAvailableCategories();
document.querySelector('#categories').addEventListener('change', function(e) {
  filterList(e);
});

$util('#btn-save').addEventListener('click', validateInputs);
var eventId;
var eventCategories
var categorySelected;

function fillAvailableCategories(){
  var categories = document.querySelector('#categories');
  var queryUrl = misc.getQueryParams(document.location.search);
  eventId = queryUrl.eventId;
  eventCategories = orm.findEventCategories(eventId);

  for (var i = 0; i < eventCategories.length; i++) {
    var option = document.createElement("option");
    option.name = eventCategories[i].description;
    var category = eventCategories[i].description;
    option.text = category;
    option.className = 'categoryList';
    categories.add(option);
  }
}

function filterList(e) {
  var category = e.currentTarget.value;
  var categoryId;

  for( var i = 0; i < eventCategories.length; i++) {
    if (category === eventCategories[i].description) {
      categoryId = eventCategories[i].id_categoria;
      categorySelected = eventCategories[i];
    }
  }

  var fightersList = orm.getAlumnByCatByEvent(categoryId,eventId);

  fillTable(fightersList);
}

function fillTable(pfightersList) {

  $util('#btn-save').disabled = false;
  var tbody = document.querySelector('#tblFightersWeight tbody');
  tbody.innerHTML = '';

  $util('.msgg').classList.remove('alert-info');
  $util('.msgg').classList.remove('alert-success');
  $util('.msgg').classList.remove('alert-failure');
  $util('.msgg').innerHTML = "";

  if (pfightersList.length != 0) {
    $util('.no-data').hide();

    for(var i = 0; i < pfightersList.length; i++) {
      var row = tbody.insertRow(i);
      var idCol = row.insertCell();
      var nameCol = row.insertCell();
      var ribbon = row.insertCell();
      var weightCatCol = row.insertCell();
      var fightWeighCol = row.insertCell();
      var statusCol = row.insertCell();

      var fightWeighInput = document.createElement('input');
      fightWeighInput.type = 'number';
      fightWeighInput.classList.add('fight-weight');
      fightWeighInput.min = '1';
      fightWeighInput.max = '1000';
      fightWeighInput.value = '0';
      var catWeigth = orm.getWeightCategoryByAlumByEvent(eventId,pfightersList[i].id_usuario);

      idCol.innerHTML = pfightersList[i].id_usuario;
      idCol.className = 'idFields';
      idCol.name = pfightersList[i].id_usuario;
      nameCol.innerHTML = pfightersList[i].primer_nombre + ' ' + pfightersList[i].segundo_nombre + ' ' + pfightersList[i].primer_apeliido + ' '+ pfightersList[i].segundo_apellido;
      ribbon.innerHTML = pfightersList[i].nombre_cinturon;
      weightCatCol.innerHTML = catWeigth[0].description;
      fightWeighCol.appendChild(fightWeighInput);
      statusCol.innerHTML = "";
    }

  } else {
    $util('.no-data-title').innerHTML = 'No hay resultados';
    $util('.no-data').show();
    $util('#btn-save').disabled = true;
  }
}

function validateInputs() {
  var inputs = document.getElementsByClassName('fight-weight');
  var hasEmpty = false;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == 0){
      inputs[i].classList.add('error');
      hasEmpty = true;
    } else {
      inputs[i].classList.remove('error');
    }
  }

  if(inputs.length != 0) {
    if(!hasEmpty) {
      validateWeight(inputs);
      $util('.msgg').classList.remove('alert-failure');
      $util('.msgg').classList.add('note','alert-success','js-login-msg');
      $util('.msgg').innerHTML = msg.key.saveSuccess;
      window.scrollTo(0, 0);

    } else {

      $util('.msgg').classList.remove('alert-info');
      $util('.msgg').classList.add('note','alert-failure','js-login-msg');
      $util('.msgg').innerHTML = msg.key.fieldsRequired;
      window.scrollTo(0, 0);
    }

  }else{

    $util('.msgg').classList.add('note','alert-info','js-login-msg');
    $util('.msgg').innerHTML = msg.key.warningCategory;
    window.scrollTo(0, 0);

  }
}

function validateWeight(pInputs) {
  var condition;
  var fightersList = document.querySelectorAll('.idFields');
  
  for (var i = 0; i < fightersList.length; i++) {
    var weightCategoriesByEvent = orm.getWeightCategoryByAlumByEvent(eventId, fightersList[i].name);
    var minWeigth = parseInt(weightCategoriesByEvent[0].peso_min);
    var maxWeight = parseInt(weightCategoriesByEvent[0].peso_max);
    var weight = parseFloat(pInputs[i].value);

    if (weight >= minWeigth && weight <= maxWeight) {
      condition = '1';
    } else {
      condition = '3';
    }

    var fighterId = fightersList[i].name;
  
    if (condition == '1') {
      $util("#tblFightersWeight").rows[i+1].cells[5].classList.remove('disqualified');
      $util("#tblFightersWeight").rows[i+1].cells[5].classList.add('qualified');
    } else {
      $util("#tblFightersWeight").rows[i+1].cells[5].classList.remove('qualified');
      $util("#tblFightersWeight").rows[i+1].cells[5].classList.add('disqualified');
    }

    orm.registerFighterWeight(fighterId, eventId, weight, condition);
    $util("#tblFightersWeight").rows[i+1].cells[5].innerHTML = condition === '1' ? 'Califica' : 'Descalificado, no cumple con el peso';
  }

  disableFields(pInputs);
}

function disableFields(pInputs) {
  for (var i = 0; i < pInputs.length; i++) {
    pInputs[i].disabled = true;
  }

  $util('#btn-save').disabled = true;
  var catName = document.getElementById("categories");
  catName.remove(catName.selectedIndex);
}
