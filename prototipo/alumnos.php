<?php
  $page_title = 'Listado de alumnos';
  $page = 'user'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Listado de alumnos</h2>
        <?php if ($userRol == 1 || $userRol == 2 || $userRol == 3) { ?>
          <a href="registrar-alumno.php" class="button btn-small" id="btn-register">Registrar alumno</a>
        <?php } ?>
      </div>
     <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="alumnos.php">Alumnos</a></li>
          <?php if ($userRol == 1 || $userRol == 2) { ?>
          <li class="nav-tab"><a class="nav-tab-link" href="profesores.php">Profesores</a></li>
          <?php } ?>

          <?php if ($userRol == 1) { ?>
            <li class="nav-tab"><a class="nav-tab-link" href="asistentes.php">Asistentes</a></li>
          <?php } ?>
        </ul>
      </div>

      <table id="tblStudents">
        <thead>
          <tr>
            <th>Identificaci&oacute;n</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Grado</th>
            <th>Academia</th>

            <?php if ($userRol == 1 || $userRol == 2) { ?>
              <th>Estado</th>
            <?php } ?>

            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <div class="no-data">
        <h3>No hay alumnos registrados.</h3>
      </div>
  </div>
</main>
  
  <?php
    include("templates/footer.php");
  ?>

  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/pages/users/student/listAlumno.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>
