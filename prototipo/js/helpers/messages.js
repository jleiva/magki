var msg = (function(window, undefined) {
  var message = {
    emailAndPasswordInvalid: 'Correo electrónico o contraseña incorrectos.',
    emailAndPasswordRequired: 'Los campos de correo electrónico y contraseña son requeridos.',
    wrongFormat: 'Verifique que el formato de la información ingresada sea correcto.',
    fieldsRequired: 'Campos indicados como requeridos (*) deben ser completados.',
    successRecover: 'Se ha enviado la nueva contraseña por correo electrónico.',
    failRecover: 'Correo electrónico no existe.',
    nameFieldRequired: 'Para guardar un evento, el campo de nombre es obligatorio.',
    registerEventSuccess: 'Se guardó el evento de manera exitosa.',
    publishEventSuccess: 'Se publicó el evento de manera exitosa.',
    saveSuccess: 'Los datos se guardaron exitosamente.',
    academySucess: 'Se guardó la academia de manera exitosa.',
    academyUpdate: 'Se actualizó la academia de manera exitosa.',
    reserveSucess: 'La reservación fue exitosa y se ha enviado un correo electrónico con el detalle de la reservación.',
    placeSucess: 'Se guardó el lugar de manera exitosa.',
    placeUpdate: 'Se actualizó el lugar exitosamente.',
    orgDuplicate: 'Ya existe una organización registrada con el código ingresado.',
    assistDuplicate: 'Ya existe un asistente registrado con ese número de identificación ingresado.',
    warningCategory: 'Debe buscar los participantes de una categoría primero'
  };

  var cat = {
    femIPl: 'Femenino Infaltil/Junior Pluma',
    femIG: 'Femenino Infaltil/Junior Gallo',
    femISup: 'Femenino Infaltil/Junior Supergallo',
    femIW: 'Femenino Infaltil/Junior Wélter',
    femIPes: 'Femenino Infaltil/Junior Pesado',
    femCPl: 'Femenino Cadete Pluma',
    femCG: 'Femenino Cadete Gallo',
    femCSup: 'Femenino Cadete Supergallo',
    femCW: 'Femenino Cadete Wélter',
    femCPes: 'Femenino Cadete Pesado',
    femEPl: 'Femenino Elite Pluma',
    femEG: 'Femenino Elite Gallo',
    femESup: 'Femenino Elite Supergallo',
    femEW: 'Femenino Elite Wélter',
    femEPs: 'Femenino Elite Pesado',
    femSPl: 'Femenino Senior Pluma',
    femSG: 'Femenino Senior Gallo',
    femSSup: 'Femenino Senior Supergallo',
    femSW: 'Femenino Senior Wélter',
    femSPs: 'Femenino Senior Pesado',

    masIPL: 'Masculino Infaltil/Junior Pluma',
    masIG: 'Masculino Infaltil/Junior Gallo',
    masSup: 'Masculino Infaltil/Junior Supergallo',
    masIW: 'Masculino Infaltil/Junior Wélter',
    masIPs: 'Masculino Infaltil/Junior Pesado',
    masCPl: 'Masculino Cadete Pluma',
    masCG: 'Masculino Cadete Gallo',
    masCSup: 'Masculino Cadete Supergallo',
    masCW: 'Masculino Cadete Wélter',
    masCPs: 'Masculino Cadete Pesado',
    masEPl: 'Masculino Elite Pluma',
    masEG: 'Masculino Elite Gallo',
    masESup: 'Masculino Elite Supergallo',
    masEW: 'Masculino Elite Wélter',
    masEPs: 'Masculino Elite Pesado',
    masSPl: 'Masculino Senior Pluma',
    masSG: 'Masculino Senior Gallo',
    masSSup: 'Masculino Senior Supergallo',
    masSW: 'Masculino Senior Wélter',
    masSPs: 'Masculino Senior Pesado'
  };

  return {
    key: message,
    cat: cat
  };
})(window);

