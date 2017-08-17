<?php 
  $page_title = 'Perfil Usuario';
  include("templates/header.php");
?>
  
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Perfil de Usuario</h2>
        <p class="section-intro__leading">Administre sus datos personales y contraseña.</p>
      </div>

      <div class="profile-wrap">
        <div class="profile-actions">
          <ul class="menu menu-actions">
            <li><a href="#" class="is-active">Perfil personal</a></li>
            <li><a href="perfil-editar.php">Editar Perfil</a></li>
            <li><a href="perfil-cambiar-contrasena.php">Cambiar contraseña</a></li>
          </ul>
        </div>

        <div class="profile-info">
          <h2 class="js-profile-display-name profile-info__name"></h2>
          
          <?php
            switch ($userRol) {
              case 1:
                include("templates/acceso-admin.php");
                break;
              
              case 2:
                include("templates/acceso-asistente.php");
                break;
              
              case 3:
                include("templates/acceso-profesor.php");
                break;

              default:
                break;
            }
          ?>
          
          <div class="activity">
          <h3 class="activity__h">Actividad Reciente</h3>
          <div class="actions-tabs">
            <ul class="actions-tabs__options">
              <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Eventos</a></li>
            </ul>
          </div>
          
          <table id="list-events">
            <thead>
              <tr>
                <th>Nombre</th>

                <?php if ($userRol == 1 || $userRol == 2) { ?>
                  <th>Estado</th>
                  <th></th>
                <?php } ?>

                <?php if ($userRol == 3) { ?>
                  <th>Fecha Inicio</th>
                  <th>Fecha Final</th>
                  <th>Cierre inscripciones</th>
                  <th></th>
                <?php } ?>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
          <div class="no-data">
            <h3>No hay actividad reciente.</h3>
          </div>
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
  <script src="js/helpers/misc.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/modules/build-events-list-role.js"></script>
  <script src="js/modules/events.js"></script>
  <script src="js/pages/events/index.js"></script>
  <script src="js/pages/profile/index.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>