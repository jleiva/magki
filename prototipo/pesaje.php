<?php
  $page_title = 'Registro de pesajes';
  $page = 'event'; 
  include("templates/header.php");
?>
    <main class="wrapper">
      <div class="main-content">
        <div class="section-intro">
          <h2>Registro de pesajes</h2>
        </div>

        <span class="msgg"></span>

        <div class="actions-tabs">
          <div class="search-form">
            <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
          </div>
          <ul class="actions-tabs__options">
            <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Peso para el participante</a></li>
          </ul>
        </div>

        <div class="field-wrapper half-Field dropdownList">
          <label for="categories">Elija una categoría</label>
          <select id="categories">
            <option value="" >Categorías disponibles</option>
          </select>
        </div>

        <br>
        <table id="tblFightersWeight">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Cinta</th>
              <!--<th>Peso actual</th>-->
              <th>Ingresar peso <br>(Obligatorio)</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        <div class="no-data">
          <h3 class="no-data-title">Escoja la categoría que desea</h3>
        </div>

        <br>
        <button id="btn-save" class="right-button">Guardar</button>
      </div>
    </main>
    
    <?php
      include("templates/footer.php");
    ?>

    <script src="js/helpers/jquery-3.2.1.min.js"></script>
    <script src="js/helpers/util.js"></script>
    <script src="js/database/storage.js"></script>
    <script src="js/database/orm.js"></script>
    <script src="js/helpers/validate.js"></script>
    <script src="js/helpers/misc.js"></script>
    <script src="js/helpers/messages.js"></script>
    <script src="js/pages/events/fightersWeight.js"></script>
    <script src="js/pages/main.js"></script>
  </body>
</html>
