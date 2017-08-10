<?php
  $page_title = 'Inscribir Competidores';
  $page = 'event'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Datos para la inscripción</h2>

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
          <p><strong>Recuerde:</strong> El competidor debe asistir al pesaje oficial en la fecha indicada; de no presentarse, &oacute; en caso de que el peso no corresponda a la categor&iacute;a seleccionada, quedará descalificado.</p>
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
              <legend>Seleccionar categor&iacute;a</legend>
              <div class="field-wrapper">
                <label for="category">Categoría Edad <abbr title="Requerido">*</abbr></label>
                <select class="js-form-field" id="category" required>
                  <option value="">Seleccione una opción</option>
                </select>
                <small class="note">Edad del atleta debe estar dentro del rango de la categor&iacute;a seleccionada.</small>
              </div>

              <div class="field-wrapper">
                <label for="weight">Categoría Peso <abbr title="Requerido">*</abbr></label>
                <select class="js-form-field" id="weight" required>
                  <option value="">Seleccione una opción</option>
                  <option value="p01">il-Yang (pluma) -51kg</option>
                  <option value="p02">i-Yang (Gallo) 52 - 59kg</option>
                  <option value="p03">o-Yang (Supergallo) 60 - 65kg</option>
                  <option value="p04">sam-yang (Wélter) 66 - 74kg</option>
                  <option value="p05">siu-yang (Pesado) +74kg </option>
                </select>
              </div>
            </fieldset>
          </fieldset>
          <button id="btn-save" value="Guardar">Guardar</button>
          <a href="eventos.html" class="button button-secondary">Cancelar</a>
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
  <script src="js/pages/events/inscription-form.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>