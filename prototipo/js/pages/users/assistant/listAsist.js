fillTable();

function fillTable() {
	var assistantList = getAsistList();
	var $error = document.querySelector('.no-data');

	if(assistantList.length) {

		$error.hide();

		var tbody = document.querySelector('#tblAssist tbody');

		tbody.innerHTML = '';

		for(var i=0; i<assistantList.length; i++) {
			var row = tbody.insertRow(i);

			//if(organizationsList[i][4]){
			var idColumn = row.insertCell();
			var nameColumn = row.insertCell();
			var lastNameColumn = row.insertCell();
			var ageColumn = row.insertCell();
			var editColumn = row.insertCell();

			idColumn.innerHTML = assistantList[i][0];
			nameColumn.innerHTML = assistantList[i][1];
			lastNameColumn.innerHTML = assistantList[i][3];
			ageColumn.innerHTML=assistantList[i][9];

			var editLink = document.createElement('a');
			var linkName = document.createTextNode("Editar");
			editLink.appendChild(linkName);
			editLink.href = "editar-asistente.html";
			editLink.className = 'btn-action-event js-edit-event';
			editLink.name = assistantList[i][0];

			editColumn.appendChild(editLink);
			//}
		}

		var btnEdit = document.querySelectorAll('.js-edit-event');
		btnEdit.forEach(function(btn) {
			btn.addEventListener('click', function(e) {
				var currentItem = e.currentTarget;
				var assitId = currentItem.getAttribute('name');
				localStorage.setItem('assistCode', assitId);
			})
		});
	} else {
		$error.show();
	}
}
