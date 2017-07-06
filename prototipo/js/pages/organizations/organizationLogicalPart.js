function addOrganization(porgInfo) {
  var organizationsList = getOrganizationsList();
  organizationsList.push(porgInfo);
  localStorage.setItem('organizationsList', JSON.stringify(organizationsList));
}

function getOrganizationsList() {
  var organizationsList = JSON.parse(localStorage.getItem('organizationsList'));

  if (organizationsList == null) {
      organizationsList = [];
  }

  return  organizationsList;
}

function findOrgByCode(pCode) {
  // Si organizationsList esta vacio, organizationInfo queda como undefined
  // lo que va puede dar bronca con validateForm() linea 47
  var organizationsList = getOrganizationsList();
  var organizationInfo;

  for(var i = 0; i < organizationsList.length; i ++){
      if (organizationsList[i][0] === pCode) {
          organizationInfo = organizationsList[i];
      }
  }

  return organizationInfo;
}

function updateOrgInformation(pOrgInfo) {
  var organizationsList = getOrganizationsList();
  var orgLength = organizationsList.length;

  for(var i = 0; i < orgLength; i++) {
      if(organizationsList[i][0] == pOrgInfo[0]){
          organizationsList[i] = pOrgInfo;
      }
  }

  localStorage.setItem('organizationsList', JSON.stringify(organizationsList));
}


