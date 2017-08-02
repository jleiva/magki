<? 
  $page = 'org'; include("../templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Listado de Organizaciones</h2>
        <a href="registrar-organizacion.php" class="button btn-small" id="btn-register">Registrar Organización</a>
      </div>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Organizaciones</a></li>
          <li class="nav-tab"><a class="nav-tab-link" href="patrocinadores.php">Patrocinadores</a></li>
        </ul>
      </div>
    
      <table id="tblOrganizations">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

       <div class="no-data">
        <h3>No hay organizaciones registradas</h3>
      </div>
    </div>  
  </main>
  
  <footer class="site-footer">
    <div class="group">
      <a href="#" class="footer-tagline">Makgi <span>Gestor de eventos</span></a>
      <ul class="menu nav-footer">
        <li><a href="">Ayuda</a></li>
        <li><a href="">tkdcr.org</a></li>
      </ul>
    </div>
  </footer>
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/pages/organizations/organizationsList.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>