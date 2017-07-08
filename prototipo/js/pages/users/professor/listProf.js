fillTable();

function fillTable() {
	var professorList = getProfList();
	var $error = document.querySelector('.no-data');

	if(professorList.length) {
		$error.hide();

	var tbody = document.querySelector('#tblProfessor tbody');
	tbody.innerHTML = '';

	for(var i=0; i<professorList.length; i++) {
		var row = tbody.insertRow(i);

			var idColumn = row.insertCell();
			var nameColumn = row.insertCell();
			var lastNameColumn = row.insertCell();
			var beltColumn = row.insertCell();
			var academyColumn = row.insertCell();
			var editColumn = row.insertCell();

			idColumn.innerHTML = professorList[i][0];
			nameColumn.innerHTML = professorList[i][1];
			lastNameColumn.innerHTML = professorList[i][3];
			beltColumn.innerHTML = professorList[i][11];
			academyColumn.innerHTML= professorList[i][10];

			var editLink = document.createElement('a');
			var linkName = document.createTextNode("Editar");
			editLink.appendChild(linkName);
			editLink.href = "editar-profesor.html";
			editLink.className = 'btn-action-event js-edit-event';
			editLink.name = professorList[i][0];

			editColumn.appendChild(editLink);
	}

	var btnEdit = document.querySelectorAll('.js-edit-event');
	btnEdit.forEach(function(btn) {
		btn.addEventListener('click', function(e) {
			var currentItem = e.currentTarget;
			var professorId = currentItem.getAttribute('name');
			localStorage.setItem('profCode', professorId);
		})
	});
} else {
	$error.show();
	}
}
