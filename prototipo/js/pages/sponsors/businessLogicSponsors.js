function addSponsor(pInfoSponsor){
  var sponsorList = getSponsorList();
  sponsorList.push(pInfoSponsor);
  localStorage.setItem('sponsorListLS',JSON.stringify(sponsorList));
}

function getSponsorList(){
  var sponsorList = JSON.parse(localStorage.getItem('sponsorListLS'));

  if(sponsorList == null){
    sponsorList = [];
  }
  return sponsorList;
}

function addProductSponsor(pid,pProduct){
  var sponsorList = getSponsorList();

  for(var i = 0; i < sponsorList.length; i++){
    if(sponsorList[i][0] == pid){
      sponsorList[i].push(pProduct);
    }
  }
  localStorage.setItem('sponsorListLS', JSON.stringify(sponsorList));
}

function getInfoById(idSponsor){
  var sponsorList = getSponsorList();
  var sponsor = [];

  for(var i= 0; i < sponsorList.length;i++){
    if(sponsorList[i][0] == idSponsor){
      sponsor = sponsorList[i];
    }
  }
  return sponsor;
}

function editSponsor(pInfoEdit){

  var sponsorList = getSponsorList();

  for(var i = 0; i < sponsorList.length; i++){
    if(sponsorList[i][0] == pInfoEdit[0]){
      sponsorList[i] = pInfoEdit;
    }
  }
  localStorage.setItem('sponsorListLS', JSON.stringify(sponsorList));
}
