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
            <li><a href="#">Editar Perfil</a></li>
            <li><a href="#">Cambiar contraseña</a></li>
          </ul>
        </div>

        <div class="profile-info">
          <h2 class="js-profile-display-name profile-info__name"></h2>

          <h4>Accesos r&aacute;pidos</h4>
          <ul class="menu menu-quick-links">
            <li><a href="registrar-asistente.html">Registrar Asistente</a></li>
            <li><a href="registrar-profesor.html">Registrar Profesor</a></li>
            <li><a href="registrar-academia.html">Registrar Academia</a></li>
            <li><a href="registrar-evento.html">Registrar Evento</a></li>
          </ul>
          
          <div class="activity">
          <h3 class="activity__h">Actividad Reciente</h3>
          <div class="actions-tabs">
            <ul class="actions-tabs__options">
              <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Eventos</a></li>
            </ul>
          </div>
          <table id="profile-events">
            <thead>
              <tr>
                <th>Nombre</th>  
                <th>Estado</th>
                <th></th>
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
  <script src="js/modules/events.js"></script>
  <script src="js/pages/events/index.js"></script>
  <script src="js/pages/profile/index.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>