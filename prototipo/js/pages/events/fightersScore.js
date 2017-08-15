document.addEventListener('DOMContentLoaded', function() {
  var eventId;
  var eventCategories
  var categorySelected;

  $util('#btn-process').addEventListener('click', validateInputs);
  $util('#btn-score').addEventListener('click', enableScores);
  $util('#btn-change').addEventListener('click', enableCheckbox);
  $util('#btn-save').addEventListener('click', setPositions);

  document.querySelector('#belts').addEventListener('change', function(e) {
    filterList(e);
  });

  disableButtons();
  fillAvailableCategories();

  function disableButtons() {
    var buttons = document.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  function fillAvailableCategories() {
    var categories = document.querySelector('#categories');
    var queryUrl = misc.getQueryParams(document.location.search);
    eventId = queryUrl.eventId;
    eventCategories = orm.findEventCategories(eventId);

    for (var i = 0; i < eventCategories.length; i++) {
      var option = document.createElement("option");
      var category = eventCategories[i].description;

      option.name = eventCategories[i].description;
      option.text = category;
      option.className = 'categoryList';
      categories.add(option);
    }
  }

  function filterList(e) {
    var categories = $util('#categories');
    var categorySelected = categories.options[categories.selectedIndex].value;
    var belt = e.currentTarget.value;

    $util('.msgg').innerHTML = "";

    if (categorySelected != '') {
      var catInfo = eventCategories.find(function(cat) {
        return cat.description === categorySelected;
      });

      var categoryId = catInfo.id_categoria;

      var fightersList = orm.getAlumnByBeltByEvent(categoryId,eventId,belt);

      disableButtons();
      fillTable(fightersList);

    } else{
      $util('.msgg').classList.add('note','alert-info','js-login-msg');
      $util('.msgg').innerHTML = msg.key.warningCategory;
      $util('#belts').selectedIndex = 0;
      window.scrollTo(0, 0);
    }
  }

  function fillTable(pfightersList) {
    var tbody = document.querySelector('#tblFighters tbody');
    tbody.innerHTML = '';

    $util('.msgg').classList.remove('alert-info');
    $util('.msgg').classList.remove('alert-failure');
    $util('.msgg').classList.remove('alert-success');
    $util('.msgg').innerHTML = "";

    if (pfightersList.length) {

      $util('.no-data').hide();
      $util('#btn-process').disabled = false;

      for(var i = 0; i < pfightersList.length; i++) {
        var row = tbody.insertRow(i);
        var idCol = row.insertCell();
        var nameCol = row.insertCell();
        var fightScoreCol = row.insertCell();
        var tieOffCol = row.insertCell();

        var fightScoreInput = document.createElement('input');
        fightScoreInput.type = 'number';
        fightScoreInput.classList.add('fight-score');
        fightScoreInput.min = '1';
        fightScoreInput.max = '5';
        fightScoreInput.value = '0';

        idCol.innerHTML = pfightersList[i].id_usuario;
        idCol.className = 'idFields';
        idCol.name = pfightersList[i].id_usuario;
        nameCol.innerHTML = pfightersList[i].primer_nombre + ' ' + pfightersList[i].segundo_nombre + ' ' + pfightersList[i].primer_apeliido + ' '+ pfightersList[i].segundo_apellido;
        fightScoreCol.appendChild(fightScoreInput);

        if (pfightersList.length === 1) {
          setAutomaticWinner(pfightersList);
        } 
      }
      
    } else {
      $util('.no-data-title').innerHTML = 'No hay resultados';
      $util('.no-data').show();
      $util('#btn-save').disabled = true;
      $util('#btn-process').disabled = true;
    }
  }

  function setAutomaticWinner(pwinnerInfo) {
    var inputs = document.querySelectorAll('.fight-score');
    inputs[0].value = 5;

    var winner = { id: pwinnerInfo[0].id_usuario,
                  score: 5,
                  position: 1};

    var winnerData = [];
    winnerData.push(winner);

    saveData(winnerData);

    disableScores();

    $util('.msgg').classList.add('note','alert-success','js-login-msg');
    $util('.msgg').innerHTML = msg.key.automaticWinner;
  }

  function validateInputs() {
    var inputs = document.querySelectorAll('.fight-score');
    var hasEmpty = false;
    var invalidNumber = [];

    $util('.tieOff').classList.remove('alert-info');
    $util('.tieOff').classList.remove('alert-failure');
    $util('.tieOff').innerHTML = "";

    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value < 0 || inputs[i].value > 5) {
          invalidNumber.push(i+1);
          inputs[i].classList.add('error');
        } else {
          inputs[i].classList.remove('error');
        }
    }

    if(validateNumber(invalidNumber)) {
        validateScore(inputs);  
    }
  }

  function validateNumber(pdata) {
    var validData = true;

    if(pdata.length) {
      validData = false;
      $util('.tieOff').innerHTML = msg.key.invalidNumber;
      for (var i = 0; i < pdata.length; i++) {
        $util('.tieOff').classList.remove('alert-info');
        $util('.tieOff').classList.add('note','alert-failure','js-login-msg');
      }
    }

    return validData;
  }

  function validateScore(pInputs) {
    var fightersList = document.querySelectorAll('.idFields');
    var highestScore = getHighestScore(pInputs);
    var status = false;
    var fighetrsSameScore = [];
    var row;
    var score;
    var condition;

    for (var i = 0; i < fightersList.length; i++) {
      score = parseInt(pInputs[i].value);
      row = i+1;
      
      if (score === highestScore) {
          fighetrsSameScore.push(row);
      } 
    }

    evaluateTieOff(fighetrsSameScore);
  }

  function evaluateTieOff (pScores) {
    if (pScores.length > 1) {
      for (var i = 0; i < pScores.length; i++) {
        var position = pScores[i];
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = position;
        checkbox.id = "tieOffCheckbox";
        checkbox.style.marginLeft = "60px";
        $util("#tblFighters").rows[position].cells[3].appendChild(checkbox);
      }

      $util('.tieOff').classList.remove('alert-failure');
      $util('.tieOff').classList.add('note','alert-info','js-login-msg');
      $util('.tieOff').innerHTML = msg.key.tieOff;
    } else {
      $util('#btn-save').disabled = false;
    }

    var tieOffCheckbox = document.querySelectorAll('#tieOffCheckbox');
      
      tieOffCheckbox.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          disableCheckbox();
        }) 
      });

     $util('#btn-process').disabled = true;
     $util('#btn-score').disabled = false;
     disableScores(); 
  }

  function disableCheckbox() {
    var checkboxList = document.querySelectorAll('#tieOffCheckbox');

    for (var i = 0; i < checkboxList.length; i++) {
      checkboxList[i].disabled = true;
    }

    $util('#btn-save').disabled = false;
    $util('#btn-change').disabled = false;
    $util('.tieOff').classList.remove('alert-info');
    $util('.tieOff').innerHTML = "";
  }

  function removeCheckBox() {
    var checkboxList = document.querySelectorAll('#tieOffCheckbox');

    for (var i = 0; i < checkboxList.length; i++) {
      checkboxList[i].parentElement.removeChild(checkboxList[i]);
    }
  }

  function enableCheckbox() {
    var checkboxList = document.querySelectorAll('#tieOffCheckbox');

    for (var i = 0; i < checkboxList.length; i++) {
      checkboxList[i].disabled = false;
      checkboxList[i].checked = false;
    }

    $util('#btn-save').disabled = true;
  }

  function enableScores() {
    var inputs = document.querySelectorAll('.fight-score');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }

    $util('#btn-process').disabled = false;
    $util('#btn-save').disabled = true;
    $util('#btn-change').disabled = true;
    $util('.tieOff').classList.remove('alert-info');
    $util('.tieOff').innerHTML = "";
    removeCheckBox();
  }

  function disableScores() {
    var inputs = document.querySelectorAll('.fight-score');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }
  }

  function getHighestScore(pInputs) {
    var highestScore = -1;

    for (var i = 0; i < pInputs.length; i++) {
      var score = parseInt(pInputs[i].value);
      if (score > highestScore) {
          highestScore = score;
      }
    }

    return highestScore;
  }

  function disableFields(pInputs) {
    for (var i = 0; i < pInputs.length; i++) {
      pInputs[i].disabled = true;
    }

    $util('#btn-save').disabled = true;
    var catName = document.getElementById("categories");
    catName.remove(catName.selectedIndex);
  }

  function setPositions() {
    var inputs = document.querySelectorAll('.fight-score');
    var idCompetitors = document.querySelectorAll('.idFields');
    var positionsById = [idCompetitors.length];
    var scoreByCompetitor = [inputs.length];
    var dataList = [];

    for (var i = 0; i < inputs.length; i++) {
      dataList.push({id:idCompetitors[i].name,score:inputs[i].value,position:''});
    }

    dataList.sort(function (a, b) {
      return (b.score - a.score);
    });

    evaluatePosition(dataList);
  }

  function evaluatePosition(ppositions) {
    var checkbox = document.querySelectorAll('#tieOffCheckbox');
    var position;
    var winnerId;
    var winnerScore;

    if (checkbox.length) {
      for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          position = i;
          winnerId = ppositions[position].id;
          winnerScore = ppositions[position].score;
        }
      }

      reorderList(ppositions,winnerId,winnerScore);
    
    }else {
      for (var i = 0; i < ppositions.length; i++) {
        ppositions[i].position = i + 1;
      }
      $util('#btn-save').disabled = false;
      saveData(ppositions);
    }
  }

  function reorderList(ppositions,pwinnerId,pwinnerScore) {
    var finalList = [];
    var winner = {id:pwinnerId,
                  score: pwinnerScore,
                  position: 1};
    var position = 2;

    finalList.push(winner);

    for (var i = 0; i < ppositions.length; i++) {
        if (ppositions[i].id != pwinnerId) {
          ppositions[i].position = position;
          finalList.push(ppositions[i]);
          position++;
        }
    }

    saveData(finalList);
  }

  function saveData(pdata) {
    for (var i = 0; i < pdata.length; i++) {
      orm.registerAlumnResult(eventId,pdata[i]);
    }

    $util('.msgg').classList.remove('alert-failure');
    $util('.msgg').classList.add('note','alert-success','js-login-msg');
    $util('.msgg').innerHTML = msg.key.saveSuccess;
    var catName = document.getElementById("categories");
    catName.remove(catName.selectedIndex);
    $util('#belts').selectedIndex = 0;
    disableButtons();
    window.scrollTo(0, 0);
  }
});