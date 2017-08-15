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
    profDuplicate: 'Ya existe un profesor registrado con ese número de identificación ingresado.',
    warningCategory: 'Debe buscar los participantes de una categoría primero.',
    passwordMatch: 'Las contraseñas especificadas no coinciden.',
    passwordUpdate: 'La contraseña se actualizó de manera correcta.',
    passwordWrongSec: 'Contraseña indicada no cumple con los lineamientos de seguridad.',
    passwordMedium: 'Contraseña nivel medio de seguridad.',
    passwordStrong: 'Contraseña nivel alto de seguridad.',
    tieOff: 'Ha habido un empate, favor seleccionar un ganador en la casilla desempatar',
    invalidNumber: 'Puntaje debe ser entre 1 y 5, favor corregir los campos marcados',
    automaticWinner: 'Unico participante en la categoría. Se declara automaticamente ganador.'
  };

  return {
    key: message
  };
})(window);

