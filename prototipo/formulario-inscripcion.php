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
        <ul class="register-details">
          <li>Fecha pesaje: <span class="js-event-weightDate"></span></li>
        </ul>
        <p><strong>Recuerde:</strong> El competidor debe asistir al pesaje oficial en la fecha indicada; de no presentarse, o en caso de que el peso no corresponda a la categor&iacute;a seleccionada, quedará descalificado.</p>
        <form id="inscription-form" novalidate>
          <fieldset>
            <div class="field-wrapper">
              <label for="academy">Competidor</label>
              <input type="text" class="js-form-field" id="athleteName" name="athleteName" disabled>
            </div>

            <div class="field-wrapper">
              <label for="academy">Identificaci&oacute;n</label>
              <input type="text" class="js-form-field js-athlete-id" id="athleteId" name="athleteId" disabled>
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
              <label for="category">Categoría Edad <abbr title="Requerido">*</abbr></label>
              <select class="js-form-field" id="category" required>
                <option value="">Seleccione una opción</option>
              </select>
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
          <button id="btn-save" value="Guardar">Guardar</button>
        </form>
      </div>  
    </div>    
  </main>
 <footer class="site-footer">
    <div class="group">
      <a href="#" class="footer-tagline">Magki <span>Gestor de eventos</span></a>
      <ul class="menu nav-footer">
        <li><a href="">Ayuda</a></li>
        <li><a href="">tkdcr.org</a></li>
      </ul>
    </div>
  </footer>
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/modules/events.js"></script>
  <script src="js/pages/users/student/logicAlumno.js"></script>
  <script src="js/pages/events/inscription-form.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>