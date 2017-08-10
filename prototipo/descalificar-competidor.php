<?php
  $page_title = 'Descalificar competidor';
  $page = 'event'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Descalificar Competidor</h2>
      </div>

      <div class="form__wrap js-form">
        <form id="desqualification-form">   
          <fieldset>
            <div class="field-wrapper">
              <label for="academy-name">Academia<abbr title="Requerido">*</abbr></label>
               <select class="js-form-field" id="academy-name" required>
                <option value="">Seleccione una academia</option>
              </select>
            </div>

            <div class="field-wrapper">
              <label for="fighter-name">Nombre Competidor<abbr title="Requerido">*</abbr></label>
              <select class="js-form-field" id="fighter-name" required>
                <option value="">Seleccione un competidor</option>
              </select>
            </div>

            <div class="field-wrapper">
              <label for="figter-withdrawal">Motivo de la descalificación<abbr title="Requerido">*</abbr></label>
              <textarea name="" placeholder="Motivo" id="figter-withdrawal"></textarea>
            </div>

            <button id="btn-save" value="Guardar">Guardar</button>
          </fieldset>
        </form>
      </div>  
    </div>    
  </main>
  
  <?php
    include("templates/footer.php");
  ?>
  
  <script src="js/helpers/util.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>