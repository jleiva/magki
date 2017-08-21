<?php
  $page_title = 'Datos usuario';
  $page = 'user';
  include("templates/header.php");
?>
  
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Perfil de usuario</h2>
        <h3 class="js-profile-display-name profile-info__name"></h3>
      </div>

      <div class="profile-wrap">          
          <h3>Datos:</h3>
          <ul>
            <li><strong>Academia:</strong> <span id="academia"></span></li>
            <li class="is-hidden js-alum-data"><strong>Profesor gu&iacute;a:</strong> <span id="profesor"></span></li>
            <li><strong>Grado:</strong> <span id="grado"></span></li>
            <li><strong>Edad:</strong> <span id="edad"></span></li>
            <li class="is-hidden js-alum-data"><strong>Peso:</strong> <span id="peso"></span></li>
            <li class="is-hidden js-alum-data"><strong>Altura:</strong> <span id="altura"></span></li>
            <li><strong>Correo electr&oacute;nico:</strong> <span id="correo"></span></li>
          </ul>
          
          <div class="activity">
            <h3 class="activity__h">Actividad usuario</h3>

          <div class="actions-tabs">
            <ul class="actions-tabs__options">
              <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Eventos inscrito</a></li>
            </ul>
          </div>
          
          <table id="list-events">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha Inicio</th>
                <th>Lugar</th>
                <th>Categor&iacute;a</th>
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
  </main>
  
  <?php
    include("templates/footer.php");
  ?>
  
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/pages/users/student/profile-detail.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>