<?
  $page_title = 'Registrar Lugar';
  $page = 'place';
  include("templates/header.php");
?>

  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Listar Lugares</h2>
        <a href="registrar-lugar.php" class="button btn-small" id="btn-register">Registrar Lugar</a>
      </div>
      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Lugares</a></li>
        </ul>
      </div>
        <table id="tblPLaces">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Capacidad</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
          <tbody>

          </tbody>
      </table>
      <div class="no-data">
        <h3>No hay lugares disponibles</h3>
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
	<script src="js/helpers/util.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
	<script src="js/helpers/validate.js"></script>
	<script src="js/helpers/messages.js"></script>
  <script src="js/pages/places/listPlace.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>