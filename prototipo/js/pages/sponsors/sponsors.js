fillTable();
// Comentado, porque no es el mismo patron para todas secciones
// $util('#txtSearch').addEventListener('keyup', search);

function fillTable(){
  var sponsorList = getSponsorList();
  var numberSponsors = sponsorList.length;
  var tbody = document.querySelector('#tblSponsors tbody');
  tbody.innerHTML = '';


  if(numberSponsors != 0){
    document.querySelector('.no-data').hide();

    for(var i = 0; i < numberSponsors; i++){
      var row = tbody.insertRow(i);
      var colName = row.insertCell();
      var colBusinessName  = row.insertCell();
      var colID = row.insertCell();
      var colEdit = row.insertCell();
      var editLink = document.createElement('a');
      var linkName = document.createTextNode("Editar");

      colID.innerHTML = sponsorList[i][0];
      colName.innerHTML = sponsorList[i][1];
      colBusinessName.innerHTML = sponsorList[i][2];

      editLink.appendChild(linkName);
      editLink.classList.add('btn-action-event');// js-btn-edit
      editLink.name = sponsorList[i][0];
      editLink.addEventListener('click', getInfoSponsorByID);

      colEdit.appendChild(editLink);
    }
  }

  var table = document.getElementById('tblSponsors');
}

function getInfoSponsorByID() {
  var idSponsor = this.name;
  var info = getInfoById(idSponsor);
  localStorage.setItem('infoSponsorLS',JSON.stringify(info));
  window.location="editar-patrocinador.html";
}

function search() {
  var table = document.getElementById('tblSponsors');
  var search = document.getElementById('txtSearch').value.toLowerCase();
  var found = false;
  var cols = "";
  var colValue = "";

  for(var i = 1; i < table.rows.length; i++){
    cols = table.rows[i].getElementsByTagName('td');
    found = false;

    for (var j = 0; j < cols.length; j++){
      colValue = cols[j].innerHTML.toLowerCase();

      if (search.length == 0 || (colValue.indexOf(search) > -1)){
        found = true;
      }
    }

    if(found){
      table.rows[i].style.display = '';
    }else{
      table.rows[i].style.display = 'none';
    }
  }
}
