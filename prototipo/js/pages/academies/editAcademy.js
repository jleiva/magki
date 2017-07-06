$util('#save').on('click',validateChanges);

loadAcademyData();

function validateChanges(e) {
    e.preventDefault();

    if(!validate.emptyFields()) {
        var validForm = validate.fieldsValue('organization-form');
    }

    window.scrollTo(0, 0);
    getUpdateData();
}


function loadAcademyData() {

    var index = localStorage.getItem('academyID');

    var academyList = obtenerListaRegistros();
	var count = index - 1;

    // Setear Inputs
	document.querySelector('#nombreAcademia').value = academyList[count]['nombreAcademia'];
	document.querySelector('#telefonoAcademia').value = academyList[count]['telefonoAcademia'];
    document.querySelector('#emailAcademia').value = academyList[count]['emailAcademia'];
    document.querySelector('#NombreEncargado').value = academyList[count]['NombreEncargado'];
    document.querySelector('#primerApellidoEncargado').value = academyList[count]['primerApellidoEncargado'];
    document.querySelector('#segundoApellidoEncargado').value = academyList[count]['segundoApellidoEncargado'];
    document.querySelector('#direccionAcademia').value = academyList[count]['direccionAcademia'];
    document.querySelector('#latitudAcademia').value = academyList[count]['latitudAcademia'];
    document.querySelector('#longitudAcademia').value = academyList[count]['longitudAcademia'];
}

function getUpdateData() {

    var academyList = obtenerListaRegistros();
    var index = localStorage.getItem('academyID') - 1;

	nombreAcademia = document.querySelector('#nombreAcademia').value;
	telefonoAcademia = document.querySelector('#telefonoAcademia').value;
	emailAcademia  = document.querySelector('#emailAcademia').value;
	NombreEncargado  = document.querySelector('#NombreEncargado').value;
    primerApellidoEncargado  = document.querySelector('#primerApellidoEncargado').value;
    segundoApellidoEncargado  = document.querySelector('#segundoApellidoEncargado').value;
    direccionAcademia  = document.querySelector('#direccionAcademia').value;
    latitudAcademia  = document.querySelector('#latitudAcademia').value;
    longitudAcademia  = document.querySelector('#longitudAcademia').value;


    var entry = {
        "nombreAcademia": nombreAcademia,
        "telefonoAcademia": telefonoAcademia,
		"emailAcademia": emailAcademia,
		"NombreEncargado": NombreEncargado,
		"primerApellidoEncargado": primerApellidoEncargado,
		"direccionAcademia": direccionAcademia,
		"latitudAcademia": latitudAcademia,
		"longitudAcademia": longitudAcademia,
    };

    academyList[index] = entry;

	localStorage.setItem('listaAcademiasLS', JSON.stringify(academyList));
	window.location.href = 'academias.html';
}