var saveBtn = document.querySelector('#btn-save');
saveBtn = addEventListener('click', validateData);
categorySelected = document.querySelector('#categories');
categorySelected.addEventListener('change', filterList);

fillTable();

function fillTable() {
	var fighters = JSON.parse(localStorage.getItem('fightersList'));
	var $error = document.querySelector('.no-data');
	$error.hide();

	var tbody = document.querySelector('#tblFighters tbody');

	tbody.innerHTML = '';

  if (fighters.length) {

		for(var i = 0; i < fighters.length; i++) {
			var row = tbody.insertRow(i);

			var nameColumn = row.insertCell();
			var lastNameColumn = row.insertCell();
			var idColumn = row.insertCell();
			var categoryColumn = row.insertCell();
			var pointsColumn = row.insertCell();

			nameColumn.innerHTML = fighters[0];
			lastNameColumn.innerHTML = fighters[1];
			idColumn.innerHTML = fighters[3];
			categoryColumn.innerHTML = fighters[2];

	    var scoreField = document.createElement('input');
	    scoreField.type = 'number';
	    scoreField.min = '1';
	    scoreField.max = '5'
	    scoreField.value = '0';
	    scoreField.classList.add('figther-points');
			pointsColumn.appendChild(scoreField);

			var error = document.createElement('p');
			error.innerHTML = 'Número entre 1 - 5';	
			error.classList.add('alert-failure');
			error.hide();
			pointsColumn.appendChild(error);
		}

		var btnEdit = document.querySelectorAll('.figther-points');
		btnEdit.forEach(function(btn) {
			btn.addEventListener('keypress', function(e) {
				var currentItem = e.currentTarget;
				var organizationId = currentItem.getAttribute('name');

				if(e.keyCode == 13) {
					if(scoreField.value < 1 || scoreField.value > 5){
						error.show();

					}else{
						error.hide();
						validateData();
					}
				}
			}) 
		});

	} else {
    $error.show();
  }	
}

function filterList() {
	 categorySelected = document.querySelector('#categories');
	 var selectedValue = categorySelected.options[categorySelected.selectedIndex].value;

	 switch(selectedValue) {
	 	case 'Infantil':
	 		loadFilterList('Infantil');
	 		break;

	 	case 'Cadete':
	 		loadFilterList('Cadete');
	 		break;

	 	case 'Elite':
	 		loadFilterList('Elite');
	 		break;

	 	case 'Senior':
	 		loadFilterList('Senior');
	 		break;

	 	default:
	 		fillTable();
	 		break;
	 }
}

function loadFilterList(pcategory) {
	var fighters = JSON.parse(localStorage.getItem('fightersList'));

	var $error = document.querySelector('.no-data');
	$error.hide();

	var tbody = document.querySelector('#tblFighters tbody');

	tbody.innerHTML = '';


 	if (fighters.length) {
		for(var i = 0; i < fighters.length; i++) {

			if(fighters[3] == pcategory) {
				var row = tbody.insertRow(i);

				var nameColumn = row.insertCell();
				var lastNameColumn = row.insertCell();
				var idColumn = row.insertCell();
				var categoryColumn = row.insertCell();
				var pointsColumn = row.insertCell();

				nameColumn.innerHTML = fighters[0];
				lastNameColumn.innerHTML = fighters[1];
				idColumn.innerHTML = fighters[3];
				categoryColumn.innerHTML = fighters[2];

		    var scoreField = document.createElement('input');
		    scoreField.type = 'number';
		    scoreField.min = '1';
		    scoreField.max = '5'
		    scoreField.value = '0';
		    scoreField.classList.add('figther-points');
				pointsColumn.appendChild(scoreField);

				var error = document.createElement('p');
				error.innerHTML = 'Número entre 1 - 5';	
				error.classList.add('alert-failure');
				error.hide();
				pointsColumn.appendChild(error);
			}


			var btnEdit = document.querySelectorAll('.figther-points');
			btnEdit.forEach(function(btn) {
				btn.addEventListener('keypress', function(e) {
					var currentItem = e.currentTarget;
					var organizationId = currentItem.getAttribute('name');

					if(e.keyCode == 13) {
						if(scoreField.value < 1 || scoreField.value > 5){
							error.show();

						}else{
							error.hide();
							validateData();
						}
					}
				}) 
			});	
		}

  } else {
  	$error.show();
  }
}

function validateData() {

		var nameColumn;
		var lastNameColumn;
		var idColumn;
		var categoryColumn;
		var pointsColumn;

		var puntuation = [];
		var fightersList = JSON.parse(localStorage.getItem('fightersList'));

		var fighters = document.querySelectorAll('.figther-points');

		fighters.forEach(function (data) {
				var nameColumn;
				var lastNameColumn;
				var idColumn;
				var categoryColumn;
				var pointsColumn;

		}	);
}
