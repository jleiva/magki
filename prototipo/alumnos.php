<?php
  $page_title = 'Listado de Alumnos';
  $page = 'user'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Listado de Alumnos</h2>
        <?php if ($userRol == 1 || $userRol == 2) { ?>
          <a href="registrar-alumno.html" class="button btn-small" id="btn-register">Registrar Alumno</a>
        <?php } ?>
      </div>
     <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="alumnos.html">Alumnos</a></li>
          <li class="nav-tab"><a class="nav-tab-link" href="profesores.html">Profesores</a></li>
          <li class="nav-tab"><a class="nav-tab-link" href="asistentes.html">Asistentes</a></li>
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
            <th>Estado</th>
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
