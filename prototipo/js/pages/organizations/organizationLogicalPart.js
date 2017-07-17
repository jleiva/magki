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
  var organizationsList = getOrganizationsList();

  var orgInfo = organizationsList.find(function(org) {
    return org.codeNumber === pCode;
  });

  return orgInfo;
}

function updateOrgInformation(pOrgInfo) {
  var organizationsList = getOrganizationsList();
  var orgLength = organizationsList.length;
  var foundOrg = false;

  for (var i = 0; i < orgLength && !foundOrg; i++) {
    if (organizationsList[i].codeNumber === pOrgInfo.codeNumber) {
      organizationsList[i] = pOrgInfo;
      foundOrg = true;
    }
  }

  localStorage.setItem('organizationsList', JSON.stringify(organizationsList));
}