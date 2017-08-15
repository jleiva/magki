<?php
  include('templates/header.php');
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Asignar Puntaje Competidores</h2>
        <h3 class="section-intro__leading">Registro de Puntajes</h3>
      </div>

      <span class="msgg"></span>

      <div class="actions-tabs">
        <div class="search-form">
          <input type="text" id="edit-query" name="query" value="" size="30" maxlength="128" class="search-form__text" placeholder="Buscar...">
        </div>
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Puntaje para el participante</a></li>
        </ul>
      </div>

      <div class="field-group">
        <div class="field-wrapper">
          <label for="categories">Elija una categoría</label>
          <select id="categories">
             <option value="" >Categorías disponibles</option>
          </select>
        </div>
        <div class="field-wrapper">
          <label for="belts">Elija la cinta</label>
          <select id="belts">
            <option value="">Seleccionar cinta</option>
            <option value="Blanco">Blanco</option>
            <option value="Amarillo">Amarillo</option>
            <option value="Verde">Verde</option>
            <option value="Azul">Azul</option>
            <option value="Rojo">Rojo</option>
            <option value="Negro">Negro</option>
          </select>
        </div>
      </div>

      <span class="tieOff"></span>
      <table id="tblFighters">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puntos</th>
            <th>Desempatar</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

      <div class="no-data">
        <h3 class="no-data-title">Escoja la categoría que desea</h3>
      </div>
      
      <div class="field-wrapper">
        <button id="btn-save" value="Guardar" class="">Guardar</button>
        <button id="btn-score" value="Puntaje" class="">Cambiar Puntaje</button>
        <button id="btn-process" value="Procesar" class="">Procesar Puntaje</button>
        <button id="btn-change" value="Cambiar" class="">Cambiar Ganador</button>
      </div>   
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
  <script src="js/pages/events/fightersScore.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>