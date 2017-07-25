function getAsistList(){
  var asistList = JSON.parse(localStorage.getItem('asistListLS'));

  if(asistList == null){
    asistList= [];
  }
  return asistList;
}

function register(pInfo){
  var asistList = getAsistList();

  asistList.push(pInfo);
  localStorage.setItem('asistListLS', JSON.stringify(asistList));
}

function findById(pId) {
  var asistList = getAsistList();
  var assistInfo = null;

  for (var i=0; i < asistList.length; i ++){
    if (asistList[i].id == pId) {
      assistInfo = asistList[i];
    }
  }

  return assistInfo;
}

function updateAsistInfo(pInfo) {
  var asistList = getAsistList();

  for (var i=0; i < asistList.length; i ++){
    if (asistList[i].id == pInfo.id) {
      asistList[i] = pInfo;
    }
  }

  localStorage.setItem('asistListLS', JSON.stringify(asistList));
}
