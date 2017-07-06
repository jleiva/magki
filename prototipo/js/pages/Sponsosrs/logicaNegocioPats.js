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

function addProductSponsor(pProducts){
  var prodsList = getProductList();
  prodsList.push(pProducts);
  localStorage.setItem('productsListLS',JSON.stringify(prodsList));
}

function getProductList(){
  var prodsList = JSON.parse(localStorage.getItem('productsListLS'));

  if(prodsList == null){
    prodsList = [];
  }
  return prodsList;
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
