<?php
  $page_title = 'Listado de profesores';
  $page = 'user'; 
  include("templates/header.php");
?>
  <main class="wrapper">

    <div class="main-content">
      <div class="section-intro">
        <h2>Listado de profesores</h2>
        <?php if ($userRol == 1) { ?>
          <a href="registrar-profesor.php" class="button btn-small" id="btn-register">Registrar profesor</a>
        <?php } ?>
      </div>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link" href="alumnos.php">Alumnos</a></li>
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Profesores</a></li>
          <?php if ($userRol == 1) { ?>
            <li class="nav-tab"><a class="nav-tab-link" href="asistentes.php">Asistentes</a></li>
          <?php } ?>
        </ul>
      </div>
      <table id="tblProfessor">
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
        <h3>No hay profesores registrados</h3>
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
<script src="js/pages/users/professor/listProf.js"></script>
<script src="js/pages/main.js"></script>
</body>
</html>
