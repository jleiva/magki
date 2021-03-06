<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Makgi - Recuperar contraseña</title>
  <link rel="stylesheet" href="css/styles.css">
  <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet">
</head>
<body class="bg-gray">
  <main class="wrapper">
    <div class="main-content">      
      <div class="js-form login-form__wrap">
        <h1 class="logo"><a href="index.html">Makgi</a></h1> 
        <form id="login-form" novalidate>
          <div class="field-wrapper">
            <label for="username" class="">Correo Electr&oacute;nico</label>
            <small class="note">(Correo de inicio de sesión)</small>
            <input type="email" name="username" id="username" tabindex="1" autofocus="autofocus" autocorrect="off" autocapitalize="off" class="js-form-field" value="" required> 
          </div>
          <button id="submit-login" type="submit" value="recover" class="full-width" tabindex="3">Env&iacute;eme una nueva contraseña</button>
          <div class="recover-txt">
          <h4>¿No recibi&oacute; el correo electr&oacute;nico con su nueva contraseña?</h4>
          <p class="note">Recuerde revisar el folder de correo no deseado (Spam) y filtre por soporte@makgi.cr</p></div>
        </form>
      </div>
      <p class="note help-txt">No importa, regrese a la <a href="iniciar-sesion.php">secci&oacute;n de ingreso.</a></p>
    </div>    
  </main>

  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/modules/login.js"></script>
  <script src="js/pages/recover/index.js"></script>
</body>
</html>

