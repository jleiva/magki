<?php
  $page_title = 'Desinscribir competidores';
  $page = 'event'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <nav class="nav-breadcrumbs" role="navigation">
        <ul>
            <li><a href="eventos.php">Listado eventos</a></li>
            <li><a class="js-bread-event">Inscribir competidores</a></li>
        </ul>
      </nav>
      <div class="section-intro">
        <h2>Desinscribir Competidor</h2>

        <ul class="register-details">
          <li>Evento: <span class="js-event-name"></span></li>
        </ul>
      </div>
      <div class="form__wrap js-form">
        <span class="note alert is-hidden js-login-msg"></span>

        <div class="help-sidebar">
          <ul class="register-details">
            <li>Fecha pesaje: <span class="js-event-weightDate"></span></li>
          </ul>
          <p>El proceso de desinscripci&oacute;n puede ser revertido, siempre y cuando no se haya realizado el pesaje.</p>
        </div>
        <form class="l-form-half" id="inscription-form" novalidate>
          <fieldset>
            <div class="field-wrapper">
              <label for="athleteName">Competidor</label>
              <input type="text" class="js-form-field" id="athleteName" name="athleteName" disabled>
            </div>

            <div class="field-wrapper">
              <label for="athleteId">Identificaci&oacute;n</label>
              <input type="text" class="js-form-field js-athlete-id" id="athleteId" name="athleteId" disabled>
            </div>

            <div class="field-wrapper">
              <label for="athleteAge">Edad</label>
              <input type="text" class="short-input js-form-field js-athlete-age" id="athleteAge" name="athleteAge" disabled>
            </div>

            <div class="field-wrapper">
              <label for="academy">Academia</label>
              <input type="text" class="js-form-field" id="academy" name="academy" disabled>
            </div>

            <div class="field-wrapper">
              <label for="teacher">Profesor Guía</label>
              <input type="text" class="js-form-field" id="teacher" name="teacher" disabled>
            </div>

            <div class="field-wrapper">
              <label for="athleteBelt">Grado cinta</label>
              <input type="text" class="js-form-field" id="athleteBelt" name="athleteBelt" disabled>
            </div>
            
            <fieldset class="feature-fieldset">
              <legend>Categor&iacute;a registrada</legend>
              <div class="field-wrapper">
                <label for="athleteCatAge">Categoría</label>
                <input type="text" class="js-form-field" id="athleteCatAge" name="athleteCatAge" disabled>
              </div>
            </fieldset>

            <div class="field-wrapper">
              <label for="description">Motivo desinscripci&oacute;n</label>
              <textarea id="description" name="description" rows="5" cols="20"></textarea>
            </div>
          </fieldset>
          <button id="btn-save" value="Guardar">Guardar</button>
          <a href="eventos.php" class="button button-secondary">Cancelar</a>
        </form>
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
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/pages/events/unsub-form.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>