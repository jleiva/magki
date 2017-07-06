
fillTable();

function fillTable() {
	var organizationsList = getOrganizationsList();
	var $error = document.querySelector('.no-data');

	if(organizationsList.length) {

		$error.hide();

		var tbody = document.querySelector('#tblOrganizations tbody');

		tbody.innerHTML = '';

		for(var i=0; i<organizationsList.length; i++) {
			var row = tbody.insertRow(i);

			//if(organizationsList[i][4]){
				var codeColumn = row.insertCell();
				var nameColumn = row.insertCell();
				var contactColumn = row.insertCell();
				var editColumn = row.insertCell();

				codeColumn.innerHTML = organizationsList[i][0];
				nameColumn.innerHTML = organizationsList[i][1];
				contactColumn.innerHTML = organizationsList[i][2];

				var editLink = document.createElement('a');
				var linkName = document.createTextNode("Editar");
				editLink.appendChild(linkName);
				editLink.href = "editar-organizacion.html";
				editLink.className = 'btn-action-event js-edit-event';
				editLink.name = organizationsList[i][0];

				editColumn.appendChild(editLink);
			//}	
		}

		var btnEdit = document.querySelectorAll('.js-edit-event');
		btnEdit.forEach(function(btn) {
			btn.addEventListener('click', function(e) {
				var currentItem = e.currentTarget;
				var organizationId = currentItem.getAttribute('name');
				localStorage.setItem('entityCode', organizationId);
			}) 
		});	
	} else {
		$error.show();
	}
}

