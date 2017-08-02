
function uploadImage(pInputIdImg,pDivIdImg) {
  var fileSelected = document.getElementById(pInputIdImg).files;

  if (fileSelected.length > 0) {
    var fileToLoad = fileSelected[0];
    var fileReader = new FileReader();

    fileReader.onload = function(e) {
      var srcData = e.target.result;
      var newImage = document.createElement('img');
      newImage.src = srcData;     
      newImage.setAttribute('id','img');
      document.getElementById(pDivIdImg).innerHTML = newImage.outerHTML;
    }
    
    fileReader.readAsDataURL(fileToLoad);
  }
}

function uploadImgSponsor(pDivIdImg, pimgSrc) {                 
  var divSelected = document.getElementById(pDivIdImg);
  var newImage = document.createElement('img');
  newImage.setAttribute('src', pimgSrc);
  newImage.setAttribute('id','img');
  divSelected.appendChild(newImage);
}





