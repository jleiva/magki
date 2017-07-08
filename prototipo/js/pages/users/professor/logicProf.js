var profList=[];

function getProfList() {
  var profList = JSON.parse(localStorage.getItem('profListLS'));

  if(profList == null){
    profList= [];
  }
  return profList;
}


function registrar(pPersona) {
  var profList = getProfList();
  profList.push(pPersona);
  localStorage.setItem('profListLS',JSON.stringify(profList));
}

function findById(pId) {
	var profList = getProfList();
	var profInfo;

	for(var i=0; i < profList.length; i ++) {
		if (profList[i][0] == pId) {
			profInfo = profList[i];
		}
	}

	return profInfo;
}

function updateProfInfo(pInfo) {
	var profList = getProfList();
	for(var i = 0; i < profList.length; i++) {
		if(profList[i][0] == pInfo[0]){
			profInfo[i] = pInfo;
		}
	}

	localStorage.setItem('profListLS', JSON.stringify(profList));
}
