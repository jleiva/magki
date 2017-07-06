$util('#btn-save').on('click',validateChanges);

loadOrganizationData();

function validateChanges() {

	validate.emptyFields();
	validate.fieldsValue('editOrganization-form');
	getUpdateData();
}

function loadOrganizationData() {

	var organizationCode = localStorage.getItem('entityCode');
	var organizationInfo = findOrgByCode(organizationCode);

	document.querySelector('#code').value = organizationInfo[0];
	document.querySelector('#code').disabled = true;
	document.querySelector('#organization-name').value = organizationInfo[1];
	document.querySelector('#organization-type').text = organizationInfo[2];
	document.querySelector('#description').value = organizationInfo[3];

	if(organizationInfo[4]) {
		document.querySelector('#able').checked = true;
	}else{
		disableFields();
	}
}

function getUpdateData() {
	var code = '';
	var organizationName = '';
	var organizationType = '';
	var description = '';
	var condition = '';
	var organizationInfo = [];

	code = document.querySelector('#code').value;
	organizationName = document.querySelector('#organization-name').value;
	organizationType  = document.querySelector('#organization-type');
	var selected = organizationType.options[organizationType.selectedIndex].text;
	description = document.querySelector('#description').value;
	var status = document.querySelector('#able').checked;

	organizationInfo.push(code, organizationName, selected, description,status);
	updateOrgInformation(organizationInfo);
}

function disableFields() {
	document.querySelector('#disable').checked = true;
	document.querySelector('#code').disabled = true;
	document.querySelector('#organization-name').disabled = true;
	document.querySelector('#organization-type').disabled = true;
	document.querySelector('#description').disabled = true;
}


