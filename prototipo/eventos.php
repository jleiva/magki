<?php
  $page_title = 'Listado eventos';
  $page = 'event'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Listado de Eventos</h2>
        <a href="registrar-evento.php" class="button btn-small" id="btn-register">Registrar Evento</a>
      </div>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Eventos</a></li>
        </ul>
      </div>
      <table id="list-events">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Tipo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      <div class="no-data">
        <h3>No hay Eventos disponibles.</h3>
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
  <script src="js/helpers/load-data.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/modules/events.js"></script>
  <script src="js/pages/events/index.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>