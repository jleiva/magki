/////////////////////////////////////////////////////////
//no se necesita con la base
fillAvailableCategories()
datoQuemados();
/////////////////////////////////////////////////////////


var fighters = JSON.parse(localStorage.getItem('fighterInfo'));
var tbody;
var filterfighters;
$util('#categories').addEventListener('change', fillTable);
$util('#saveBttn').addEventListener('click', validateInputs);


///////////////////////////////////////////////////////
//no se necesita con la base
function fillAvailableCategories(){
	var categorias = [];

	categorias.push('Masculino Senior Pesado');

	for (var i = 0; i < categorias.length; i++) {
		var option = document.createElement("option");
		option.value = categorias[i];
		option.innerHTML = option.value;
		option.classList.add('tournament-categories');
		$util("#categories").appendChild(option);
	}
}

function datoQuemados(){
	var lista = [];
	var sponsor = {id: '123456786',
								 name: 'Kenneth',
								 firstName: 'Ramírez',
								 lastName: 'Soto',
								 category: 'Masculino Senior Pesado',
								 weightCategory: 'Pesado',
								 ribbon:'Verde',
								 actualWeight: 75,
							 	 fightWeigh: 0,
							   status: ""	};

	lista.push(sponsor);

	sponsor = {id: '123456785',
								 name: 'Bryan',
								 firstName: 'Astua',
								 lastName: 'Bonilla',
								 category: 'Masculino Senior Pesado',
								 weightCategory: 'Pesado',
								 ribbon:'Verde',
								 actualWeight: 77,
							 	 fightWeigh: 0,
							   status: ""	};

	lista.push(sponsor);

	localStorage.setItem('fighterInfo',JSON.stringify(lista));
}

function filterList(){
	var filter = [];
	var categories =  $util('#categories');
	var categoriesValue = categories.options[categories.selectedIndex].value;

	for (var i = 0; i < fighters.length; i++) {
		if(fighters[i].category == categoriesValue){
			filter.push(fighters[i]);
		}
	}

	return filter;
}

///////////////////////////////////////////

function fillTable() {
	filterfighters = filterList();
	tbody = document.querySelector('#tblFightersWeight tbody');
	tbody.innerHTML = '';

	$util('#saveBttn').disabled = false;

	$util('.msgg').classList.remove('alert-info');
	$util('.msgg').classList.remove('alert-success');
	$util('.msgg').classList.remove('alert-failure');
	$util('.msgg').innerHTML = "";

  if (filterfighters.length != 0) {
    $util('.no-data').hide();

		for(var i = 0; i < filterfighters.length; i++) {
			var row = tbody.insertRow(i);

      var idCol = row.insertCell();
			var nameCol = row.insertCell();
      var categoryCol = row.insertCell();
			var ribbon = row.insertCell();
			var tiebraker = row.insertCell();

      var tiebrakerOption = document.createElement('input');
      tiebrakerOption.type = 'radio';
      tiebrakerOption.classList.add('tiebraker-option');
			tiebrakerOption.name = 'tiebraker';

      idCol.innerHTML = filterfighters[i].id;
			nameCol.innerHTML = filterfighters[i].name +' '+ filterfighters[i].firstName +' '+ filterfighters[i].lastName;
			categoryCol.innerHTML = filterfighters[i].category;
			ribbon.innerHTML = filterfighters[i].ribbon;
      tiebraker.appendChild(tiebrakerOption);
		}
  } else {
		$util('.no-data-title').innerHTML = 'No hay resultados';
    $util('.no-data').show();
  }
}

function validateInputs() {

	var inputsRadio = document.getElementsByName('tiebraker');
	$util('#saveBttn').disabled = false;
	$util('.msgg').innerHTML = "";

	if(inputsRadio.length != 0) {

		for (var i = 0; i < inputsRadio.length; i++) {

			if(inputsRadio[i].checked) {

				//aquí se envía el id del competidor seleccionado y el puntaje +1 al logic para hacer el guardado
				//saveTiebreaker(filterfighters[i].id,filterfighters[i].puntaje+1);
				$util('.msgg').classList.remove('alert-info');
				$util('.msgg').classList.add('note','alert-success','js-login-msg');
				$util('.msgg').innerHTML = msg.key.saveSuccess;

				for (var h = 0; h < inputsRadio.length; h++) {
					$util("#tblFightersWeight").rows[h+1].cells[4].classList.remove('radio-error');
				}

				disableFields();
				window.scrollTo(0, 0);

			} else {

				$util("#tblFightersWeight").rows[i+1].cells[4].classList.add('radio-error');
				$util('.msgg').classList.remove('alert-info');
				$util('.msgg').classList.add('note','alert-failure','js-login-msg');
				$util('.msgg').innerHTML = msg.key.chooseWinner;
				window.scrollTo(0, 0);

			}
		}

	}else{

		$util('.msgg').classList.add('note','alert-info','js-login-msg');
		$util('.msgg').innerHTML = msg.key.warningCategory;
		window.scrollTo(0, 0);

	}
}

function disableFields() {
	var inputs = document.getElementsByTagName('input');

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].disabled = true;
	}

	$util('#categories').disabled = true;
	$util('#saveBttn').disabled = true;
}
