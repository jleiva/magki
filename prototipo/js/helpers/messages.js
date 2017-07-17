var msg = (function(window, undefined) {
  var message = {
    emailAndPasswordInvalid: 'Correo electrónico o contraseña incorrectos.',
    emailAndPasswordRequired: 'Los campos de correo electrónico y contraseña son requeridos.',
    wrongFormat: 'Verifique el formato.',
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
    orgDuplicate: 'Ya existe una organizacion registrada con el código ingresado.'
  };

  return {
    key: message
  };
})(window);
