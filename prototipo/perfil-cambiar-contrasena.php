<?php 
  $page_title = 'Cambiar contraseña';
  $page = '';
  include("templates/header.php");
?>
  
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Perfil de usuario</h2>
        <p class="section-intro__leading">Administre sus datos personales y contraseña.</p>
      </div>

      <div class="profile-wrap">
        <div class="profile-actions">
          <ul class="menu menu-actions">
            <li><a href="perfil-usuario.php">Perfil personal</a></li>
            <li><a href="perfil-editar.php">Editar perfil</a></li>
            <li><a href="#" class="is-active">Cambiar contraseña</a></li>
          </ul>
        </div>

        <div class="profile-info">
          <div class="form__wrap js-form">
            <span class="note alert is-hidden js-login-msg"></span>
            <form id="update-password-form" novalidate>
              <fieldset class="feature-fieldset">
                <legend>Cambiar contraseña</legend>
                <div class="field-wrapper">
                  <label for="newPassword">Contraseña <abbr title="Requerido">*</abbr></label>
                  <input type="password" class="js-form-field" name="newPassword" id="newPassword" required pattern="[0-9]">
                  <p class="note js-password-notes"><strong>Su contraseña debe tener al menos:</strong> una may&uacute;scula, una min&uacute;scula, un caracter especial (!@#$%^&*) y m&iacute;nimo 6 digitos de longitud</p>
                </div>

                <div class="field-wrapper">
                  <label for="confirmPassword">Repetir contraseña <abbr title="Requerido">*</abbr></label>
                  <input type="password" class="js-form-field" name="confirmPassword" id="confirmPassword" srequired>
                </div>
              </fieldset>
              <button id="btn-save" value="">Guardar</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>    
  </main>
  
  <?php
    include("templates/footer.php");
  ?>

  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/pages/profile/update-password.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>