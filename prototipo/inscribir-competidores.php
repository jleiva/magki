<?php
  $page_title = 'Inscribir competidores';
  $page = 'event'; 
  include("templates/header.php");
?>

  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Inscribir Competidores</h2>
        <h3 class="section-intro__leading">Evento: <span class="js-event-name"></span></h3>
      </div> 

      <div class="field-group">
          <div class="field-wrapper">
              <label for="academy-name">Academia</label>
              <select class="js-form-field" id="academy-name" name="academy-name" required>
                <option value="" class="js-empty-academy">No hay Academias registradas...</option>
              </select>
          </div>

          <div class="field-wrapper">
              <label for="organization-type">ID Alumno</label>  
              <input type="text" name="buscar" id="organization-type">
          </div>
      </div>

      <table id="tblFighters">
        <thead>
          <tr>
            <th>Identificaci&oacute;n</th>
            <th>Nombre</th>
            <th>Grado</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

       <div class="no-data">
        <h3>No hay alumnos inscritos</h3>
      </div>
    </div>  
  </main>
  
  <?php
    include("templates/footer.php");
  ?>
  
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/pages/events/fightersInscription.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>