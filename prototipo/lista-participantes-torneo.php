<?php
  $page_title = 'Participantes en evento';
  $page = 'event'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2 class="section-intro__leading">Lista de participantes del torneo</h2>
      </div>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active">Listado de Participantes</a></li>
        </ul>
      </div>
    
      <table id="tblTournamentFighters">
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Género</th>
            <th>Nombre</th>
            <th>Victorias</th>
            <th>Derrotas</th>
          </tr>
        </thead>
        <tbody>     
        </tbody>
      </table>

       <!--<div class="no-data">
        <h3>No hay movimientos registrados</h3>
      </div>-->
    </div>  
  </main>
  
  <?php
    include("templates/footer.php");
  ?>
  
  <script src="js/helpers/util.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>