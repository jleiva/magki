fillTable();

function fillTable() {
  var sponsorList = getSponsorList();
  var tbody = document.querySelector('#tblSponsors tbody');

  if(sponsorList.length != 0) {
    document.querySelector('.no-data').hide();

    for(var i = 0; i < sponsorList.length; i++) {
      var row = tbody.insertRow(i);
      var colID = row.insertCell();
      var colName = row.insertCell();
      var colBusinessName  = row.insertCell();
      var colStatus  = row.insertCell();
      var colEdit = row.insertCell();
      var editLink = document.createElement('a');
      var linkName = document.createTextNode("Editar");

      colID.innerHTML = sponsorList[i].id;
      colName.innerHTML = sponsorList[i].name;
      colBusinessName.innerHTML = sponsorList[i].businessName;

      if(sponsorList[i].status) {
				colStatus.innerHTML = 'Habilitado';
			}else{
				colStatus.innerHTML = 'Deshabilitado';
			}

      editLink.appendChild(linkName);
      editLink.classList.add('btn-action-event');// js-btn-edit
      editLink.name = sponsorList[i].id;
      editLink.addEventListener('click', getInfoSponsorByID);

      colEdit.appendChild(editLink);
    }
  }
}

function getInfoSponsorByID() {
  var idSponsor = this.name;
  var info = getInfoById(idSponsor);
  localStorage.setItem('infoSponsorLS',JSON.stringify(info));
  window.location="editar-patrocinador.html";
}
