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

function getInfoById(idSponsor){
  var sponsorList = getSponsorList();
  var sponsor = [];

  for(var i= 0; i < sponsorList.length;i++){
    if(sponsorList[i].id == idSponsor){
      sponsor = sponsorList[i];
    }
  }
  return sponsor;
}

function editSponsor(pSponsorList){

  localStorage.setItem('sponsorListLS', JSON.stringify(pSponsorList));
}

function uploadImage(pInputIdImg,pDivIdImg){
  fileSelected = document.getElementById(pInputIdImg).files;

  if (fileSelected.length > 0) {
    var fileToLoad = fileSelected[0];
    var fileReader = new FileReader();

    fileReader.onload = function(e) {
      var srcData = e.target.result; // <--- base64
      var newImage = document.createElement('img');
      newImage.src = srcData;
      document.getElementById(pDivIdImg).innerHTML = newImage.outerHTML;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}
