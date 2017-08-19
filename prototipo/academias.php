<?php
  $page_title = 'Listado de academias';
  $page = 'acadm';
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Listado de Academias</h2>
          <?php if ($userRol == 1 || $userRol == 2) { ?>
            <a href="registrar-academia.php" class="button btn-small" id="btn-register">Registrar academia</a>
          <?php } ?>
      </div>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Academias</a></li>
        </ul>
      </div>

      <table id="tblAcademies">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Encargado</th>
            <?php if ($userRol == 1 || $userRol == 2) { ?>
              <th>Estado</th>
              <th></th>
            <?php } ?>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <div class="no-data">
        <h3>No hay academias disponibles</h3>
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
	<script src="js/helpers/validate.js"></script>
	<script src="js/helpers/messages.js"></script>
  <script src="js/pages/academies/listAcademy.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>
