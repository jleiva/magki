fillTable();

function fillTable() {
	var profList = getProfList();
	var tbody = document.querySelector('#tblProfessor tbody');

	tbody.innerHTML = '';

	for(var i=0; i<profList.length; i++) {
		var row = tbody.insertRow(i);

		//if(organizationsList[i][4]){
			var idColumn = row.insertCell();
			var nameColumn = row.insertCell();
			var lastNameColumn = row.insertCell();
			var beltColumn = row.insertCell();
			var editColumn = row.insertCell();''

			idColumn.innerHTML = profList[i][0];
			nameColumn.innerHTML = profList[i][1];
			lastNameColumn.innerHTML = profList[i][3];
			beltColumn.innerHTML = profList[i][11];

			var editLink = document.createElement('a');
			var linkName = document.createTextNode("Editar");
			editLink.appendChild(linkName);
			editLink.href = "editar-profesor.html";
			editLink.className = 'btn-action-event js-edit-event';
			editLink.name = profList[i][0];

			editColumn.appendChild(editLink);
		//}
	}

	var btnEdit = document.querySelectorAll('.js-edit-event');
	btnEdit.forEach(function(btn) {
		btn.addEventListener('click', function(e) {
			var currentItem = e.currentTarget;
			var profId = currentItem.getAttribute('name');
			localStorage.setItem('profCode', profId);
		})
	});
}
