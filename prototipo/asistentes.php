<?php
  $page_title = 'Listado de Asistentes';
  $page = 'user'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Listado de Asistentes</h2>

        <?php if ($userRol == 1 || $userRol == 2) { ?>
          <a href="registrar-asistente.php" class="button btn-small" id="btn-register">Registrar Asistente</a>
        <?php } ?>
      </div>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link" href="alumnos.php">Alumnos</a></li>
          <li class="nav-tab"><a class="nav-tab-link" href="profesores.php">Profesores</a></li>
          <?php if ($userRol == 1) { ?>
            <li class="nav-tab"><a class="nav-tab-link" href="asistentes.php">Asistentes</a></li>
          <?php } ?>
        </ul>
      </div>

      <table id="tblAssist">
        <thead>
          <tr>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Correo electr&oacute;nico</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

      <div class="no-data">
        <h3>No hay usuarios disponibles.</h3>
      </div>
    </div>
  </main>

  <?php
    include("templates/footer.php");
  ?>

  <script src="js/helpers/util.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/helpers/load-data.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/pages/users/assistant/logicAsist.js"></script>
  <script src="js/pages/users/assistant/listAsist.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>
