//var listaRegistros=[];

function registrar(pLugar){
  var listaRegistros = obtenerListaRegistros();
  listaRegistros.push(pLugar);
  localStorage.setItem('listaRegistrosPlaceLS',JSON.stringify(listaRegistros));
}


function obtenerListaRegistros(){
  var listaRegistros = JSON.parse(localStorage.getItem('listaRegistrosPlaceLS'));

  if(listaRegistros == null){
    listaRegistros= [];
  }
  return listaRegistros;
}


