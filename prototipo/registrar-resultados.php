<?php 
  $page_title = 'Registrar resultados';
  $page = 'event'; 
  include("templates/header.php");
?>
  <main class="wrapper">

    <div class="main-content">
      <div class="section-intro">
        <h2>Asignar Puntaje Competidores</h2>
        <h3 class="section-intro__leading">Registro de Puntajes</h3>
      </div>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Puntaje para el participante</a></li>
        </ul>
      </div>

      <div class="field-wrapper">
        <select id="categories">
          <option value="Infantil" class="tournament-categories">Categoría</option>
          <option value="Infantil" class="tournament-categories">Infantil</option>
          <option value="Cadete" class="tournament-categories">Cadete</option>
          <option value="Elite" class="tournament-categories">Elite</option>
          <option value="Senior" class="tournament-categories">Senior</option>
        </select>
      </div>

      <table id="tblFighters">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>ID</th>
            <th>Categoría</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

       <div class="no-data">
        <h3>No hay competidores registrados aún</h3>
      </div>
      
      <br>
      <button id="btn-save" value="Guardar" class="">Guardar</button>
    
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
  <script src="js/pages/events/fightersScore.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>