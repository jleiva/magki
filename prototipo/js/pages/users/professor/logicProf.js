function getProfList() {
  var profList = JSON.parse(localStorage.getItem('profListLS'));

  if (profList == null) {
    profList= [];
  }

  return profList;
}


function registrar(pPersona) {
  var profList = getProfList();
  profList.push(pPersona);
  localStorage.setItem('profListLS', JSON.stringify(profList));
}

function findById(pId) {
  var profList = getProfList();
  var profInfo;

  profInfo = profList.find(function(user) {
    return user.id === pId;
  });

  return profInfo;
}

function updateProfInfo(pInfo) {
  var profList = getProfList();
  var foundUser = false;

  for (var i = 0; i < profList.length && !foundUser; i++) {
    if (profList[i].id === pInfo.id) {
      profList[i] = pInfo;
      foundUser = true;
    }
  }

  localStorage.setItem('profListLS', JSON.stringify(profList));
}
