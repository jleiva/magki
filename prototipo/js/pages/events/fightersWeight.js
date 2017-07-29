/////////////////////////////////////////////////////////
//no se necesita con la base
fillAvailableCategories();
datoQuemados();
var fighters = JSON.parse(localStorage.getItem('fighterInfo'));
/////////////////////////////////////////////////////////



var tbody;
var filterfighters;
$util('#categories').addEventListener('change', fillTable);
$util('#btn-save').addEventListener('click', validateInputs);


///////////////////////////////////////////////////////
//no se necesita con la base
function fillAvailableCategories(){

	var categorias = [];

	categorias.push('femCSup');
	categorias.push('femEG');
	categorias.push('masEW');
	categorias.push('masSPs');

	for (var i = 0; i < categorias.length; i++) {

		var option = document.createElement("option");
		option.value = msg.key[categorias[i]];
		option.innerHTML = option.value;
		option.classList.add('tournament-categories');
		$util("#categories").appendChild(option);

	}
}

function datoQuemados(){
	var lista = [];
	var sponsor = {id: '123456789',
								 name: 'Roberto',
								 firstName: 'Espinoza',
								 lastName: 'Hernández',
								 category: 'Masculino Elite Wélter',
								 weightCategory: 'Wélter',
								 ribbon:'Amarilla',
								 actualWeight: 70,
							 	 fightWeigh: 0,
							   status: ""	};

	lista.push(sponsor);

	sponsor = {id: '123456788',
								 name: 'María',
								 firstName: 'Brenes',
								 lastName: 'Zamora',
								 category: 'Femenino Cadete Supergallo',
								 weightCategory: 'Pluma',
								 ribbon:'Blanca',
								 actualWeight: 55,
							 	 fightWeigh: 0,
							   status: ""	};

	lista.push(sponsor);

	sponsor = {id: '123456787',
								 name: 'Catalina',
								 firstName: 'Mora',
								 lastName: 'Campos',
								 category: 'Femenino Elite Gallo',
								 weightCategory: 'Gallo',
								 ribbon:'Amarilla',
								 actualWeight: 50,
							 	 fightWeigh: 0,
							   status: ""	};

	lista.push(sponsor);

	sponsor = {id: '123456786',
								 name: 'Kenneth',
								 firstName: 'Ramírez',
								 lastName: 'Soto',
								 category: 'Masculino Senior Pesado',
								 weightCategory: 'Pesado',
								 ribbon:'Negra',
								 actualWeight: 75,
							 	 fightWeigh: 0,
							   status: ""	};

	lista.push(sponsor);

	sponsor = {id: '123456785',
								 name: 'Bryan',
								 firstName: 'Astua',
								 lastName: 'Bonilla',
								 category: 'Masculino Elite Wélter',
								 weightCategory: 'Wélter',
								 ribbon:'Verde',
								 actualWeight: 77,
							 	 fightWeigh: 0,
							   status: ""	};

	lista.push(sponsor);

	localStorage.setItem('fighterInfo',JSON.stringify(lista));
}
///////////////////////////////////////////

function filterList() {

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

function fillTable() {

	filterfighters = filterList();
	tbody = document.querySelector('#tblFightersWeight tbody');
	tbody.innerHTML = '';

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
			var actualWeightCol = row.insertCell();
			var fightWeighCol = row.insertCell();
			var statusCol = row.insertCell();

      var fightWeighInput = document.createElement('input');
      fightWeighInput.type = 'number';
      fightWeighInput.classList.add('fight-weigh');
      fightWeighInput.min = '1';
			fightWeighInput.max = '1000';
      fightWeighInput.value = '0';
			fightWeighInput.step = 0.001;

      idCol.innerHTML = filterfighters[i].id;
			nameCol.innerHTML = filterfighters[i].name +' '+ filterfighters[i].firstName +' '+ filterfighters[i].lastName;
			categoryCol.innerHTML = filterfighters[i].category;
			ribbon.innerHTML = filterfighters[i].ribbon;
      actualWeightCol.innerHTML = filterfighters[i].actualWeight + 'kg';
      fightWeighCol.appendChild(fightWeighInput);
      statusCol.innerHTML = "";
		}

  } else {

		$util('.no-data-title').innerHTML = 'No hay resultados';
    $util('.no-data').show();

  }
}

function validateInputs() {

	var inputs = document.getElementsByTagName('input');
	var hasEmpty = false;

	for (var i = 0; i < inputs.length; i++) {

		if(inputs[i].value == 0){

			inputs[i].classList.add('error');
			hasEmpty = true;

		}else{

			inputs[i].classList.remove('error');

		}
	}

	if(inputs.length != 0) {
		if(hasEmpty == false) {

			validateWeight(inputs);
			$util('.msgg').classList.remove('alert-failure');
			$util('.msgg').classList.add('note','alert-success','js-login-msg');
			$util('.msgg').innerHTML = msg.key.saveSuccess;
			disableFields();
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

	var status = "";

	for (var i = 0; i < pInputs.length; i++) {

	  switch(filterfighters[i].weightCategory) {

		 	case 'Pluma':
				if(pInputs[i].value < 52){
					status = 'Califica';
				}else{
					status = 'Descalificado';
				}
		 	break;

		 	case 'Gallo':
				if(pInputs[i].value >= 52 && pInputs[i].value <= 59){
					status = 'Califica';
				}else{
					status = 'Descalificado';
				}
		 	break;

		 	case 'Supergallo':
				if(pInputs[i].value >= 60 && pInputs[i].value <= 65){
					status = 'Califica';
				}else{
					status = 'Descalificado';
				}
		 	break;

			case 'Wélter':
				if(pInputs[i].value >= 66 && pInputs[i].value <= 74){
					status = 'Califica';
				}else{
					status = 'Descalificado';
				}
		 	break;

			case 'Pesado':
				if(pInputs[i].value > 74){
					status = 'Califica';
				}else{
					status = 'Descalificado';
				}
		 	break;

		 	default:
		 		fillTable();
		 	break;
		}

		if(status == 'Califica') {

			$util("#tblFightersWeight").rows[i+1].cells[6].classList.remove('disqualified');
			$util("#tblFightersWeight").rows[i+1].cells[6].classList.add('qualified');

		}else{

			$util("#tblFightersWeight").rows[i+1].cells[6].classList.remove('qualified');
			$util("#tblFightersWeight").rows[i+1].cells[6].classList.add('disqualified');

		}

		$util("#tblFightersWeight").rows[i+1].cells[6].innerHTML = status;

		//aqui se envían el id y el estado (descalificado o califica) para el guardado
		//save(filterfighters[i].id,filterfighters[i].status);
 	}
}

function disableFields(pInputs) {

	for (var i = 0; i < pInputs.length; i++) {
		pInputs[i].disabled = true;
	}

	$util('#categories').disabled = true;
	$util('#btn-save').disabled = true;
}
