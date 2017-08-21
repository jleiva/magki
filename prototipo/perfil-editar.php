<?php 
  $page_title = 'Editar perfil';
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
            <li><a href="#" class="is-active">Editar perfil</a></li>
            <li><a href="perfil-cambiar-contrasena.php">Cambiar contraseña</a></li>
          </ul>
        </div>

        <div class="profile-info">
          <div class="form__wrap js-form">
            <span class="note alert is-hidden js-login-msg"></span>
            <?php
              switch ($userRol) {
                case 1:
                case 2:
                  include("templates/form-admin.php");
                  break;
                case 3:
                  include("templates/form-prof.php");
                  break;
                case 4:
                  include("templates/form-alumno.php");
                  break;
                default:
                  break;
              }
            ?>

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
  <script src="js/pages/profile/update-profile.js"></script>
  <script src="js/pages/main.js"></script>

</body>
</html>