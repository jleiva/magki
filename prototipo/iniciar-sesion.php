<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Makgi - Ingresar al Sistema</title>
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
            <input type="email" class="js-form-field" name="username" id="username" tabindex="1" autofocus="autofocus" autocorrect="off" autocapitalize="off" required> 
          </div>
        
          <div class="field-wrapper">
            <label for="password" class="">Contraseña</label>
            <input type="password" class="js-form-field" name="password" tabindex="2" id="password" maxlength="51" required>
          </div>

          <button id="submit-login" type="submit" value="Ingresar" class="full-width" tabindex="3">Ingresar</button>

          <p class="note"><strong>Ayuda:</strong>  <a href="recuperar.php">¿Olvidó su contraseña?</a></p>
        </form>
      </div>
      <p class="note help-txt"><strong>¿Necesita una cuenta en Makgi?</strong> <a href="index.html">Cont&aacute;ctenos para iniciar el registro.</a></p>
    </div>    
  </main>
  
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/modules/login.js"></script>
  <script src="js/pages/login/index.js"></script>
</body>
</html>

