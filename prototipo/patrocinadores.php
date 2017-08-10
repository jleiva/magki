<?php 
  $page_title = 'Listado de Patrocinadores';
  $page = 'org'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Listado de Patrocinadores</h2>
        
        <?php if ($userRol == 1 || $userRol == 2) { ?>
          <a href="registrar-patrocinador.php" class="button btn-small" id="btn-register">Registrar Patrocinador</a>
        <?php } ?>
      
      </div>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link" href="organizaciones.php">Organizaciones</a></li>
          <li class="nav-tab"><a class="nav-tab-link is-active" href="patrocinadores.php">Patrocinadores</a></li>
        </ul>
      </div>

<!--       <input type="text" id="txtSearch"> -->

      <table id="tblSponsors">
        <thead>
          <tr>
            <th>Nombre Comercial</th>
            <th>Razón Social</th>
            <th>Cédula Jurídica</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <div class="no-data">
        <h3>No hay patrocinadores disponibles</h3>
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
	<script src="js/helpers/messages.js"></script>
	<script src="js/helpers/validate.js"></script>
  <script src="js/pages/sponsors/businessLogicSponsors.js"></script>
  <script src="js/pages/sponsors/sponsors.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>
