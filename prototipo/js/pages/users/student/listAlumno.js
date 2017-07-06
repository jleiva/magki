fillTable();

function fillTable() {
	var studentsList = getStudentsList();
	var tbody = document.querySelector('#tblStudents tbody');

	tbody.innerHTML = '';

	for(var i=0; i<studentsList.length; i++) {
		var row = tbody.insertRow(i);

		//if(organizationsList[i][4]){
			var idColumn = row.insertCell();
			var nameColumn = row.insertCell();
			var lastNameColumn = row.insertCell();
			var ageColumn = row.insertCell();
			var beltColumn = row.insertCell();
			var editColumn = row.insertCell();''

			idColumn.innerHTML = studentsList[i][0];
			nameColumn.innerHTML = studentsList[i][1];
			lastNameColumn.innerHTML = studentsList[i][3];
			ageColumn.innerHTML = studentsList[i][10];
			beltColumn.innerHTML = studentsList[i][13];

			var editLink = document.createElement('a');
			var linkName = document.createTextNode("Editar");
			editLink.appendChild(linkName);
			editLink.href = "editar-alumno.html";
			editLink.className = 'btn-action-event js-edit-event';
			editLink.name = studentsList[i][0];

			editColumn.appendChild(editLink);
		//}
	}

	var btnEdit = document.querySelectorAll('.js-edit-event');
	btnEdit.forEach(function(btn) {
		btn.addEventListener('click', function(e) {
			var currentItem = e.currentTarget;
			var studentId = currentItem.getAttribute('name');
			localStorage.setItem('studentCode', studentId);
		})
	});
}
