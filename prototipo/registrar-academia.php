<?
  $page_title = 'Registrar academia';
  $page = 'acadm';
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Registrar Academia</h2>
      </div>

      <div class="js-form form__wrap">
        <form id="register-academy">
        <fieldset>
          <legend>Campos obligatorios estan marcados con <abbr title="Requerido">*</abbr></legend>

          <fieldset class="feature-fieldset">
            <legend>Datos generales</legend>
            <div class="field-wrapper">
              <label for="nombreAcademia">Nombre de academia <abbr title="Requerido">*</abbr></label>
              <input type="text" id="nombreAcademia" name="academyName" required class="js-form-field">
            </div>
            <div class="field-wrapper">
              <label for="telefonoAcademia">Teléfono <abbr title="Requerido">*</abbr></label>
              <input type="text" id="telefonoAcademia" name="academyTel" required class="js-form-field">
            </div>
            <div class="field-wrapper">
              <label for="emailAcademia">Correo Electrónico <abbr title="Requerido">*</abbr></label>
              <input type="email" id="emailAcademia" name="academyEmail" required class="js-form-field">
            </div>
          </fieldset>

          <fieldset class="feature-fieldset">
            <legend>Datos Encargado</legend>
            <div class="field-wrapper">
              <label for="nombreEncargado">Nombre <abbr title="Requerido">*</abbr></label>
              <input type="text" id="NombreEncargado" name="attendantName" required class="js-form-field">
            </div>
            <div class="field-wrapper">
              <label for="primerApellidoEncargado">Primer Apellido <abbr title="Requerido">*</abbr></label>
              <input type="text" id="primerApellidoEncargado" name="attendantLastName" required class="js-form-field">
            </div>
            <div class="field-wrapper">
              <label for="segundoApellidoEncargado">Segundo Apellido </label>
              <input type="text" id="segundoApellidoEncargado" name="attendantSecLastName" class="js-form-field">
            </div>
          </fieldset>

          <fieldset class="feature-fieldset">
            <legend>Datos de ubicaci&oacute;n</legend>
            <div class="field-wrapper">
              <label for="direccionAcademia">Direcci&oacute;n f&iacute;sica</label>
              <textarea name="academyAddress" placeholder="Dirección exacta" class="js-form-field" id="direccionAcademia"></textarea>
            </div>

            <div class="field-group">
              <div class="field-wrapper">
                <label for="latitudLugar">Latitud</label>
                <input type="number" step= "0.000001" id="latitudLugar" name="placeLatitude" class="js-form-field">
                <small class="note">Ejemplo: 41.40338</small>
              </div>

              <div class="field-wrapper">
               <label for="longitudLugar">Longitud</label>
               <input type="number" step= "0.000001" id="longitudLugar" name="placeLongitude" class="js-form-field">
               <small class="note">Ejemplo: 2.17403</small>
              </div>
            </div>

            <input id="input-map" class="controls" type="text" placeholder="Escriba el lugar">
            <div id="map"></div>
          </fieldset>
          <button id="btn-save" value="Guardar">Guardar</button>
        </fieldset>
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
  <script src="js/database/orm.js"></script>
	<script src="js/database/storage.js"></script>
	<script src="js/helpers/validate.js"></script>
	<script src="js/helpers/messages.js"></script>
	<script src="js/pages/academies/registerAcademies.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABbEjzd6Y4yV8EE6j0_-MvyT1rZR-tiv0&libraries=places&callback=initMap" async defer></script>
  <script src="js/pages/academies/businessLogicAcademy.js"></script>
	<script src="js/pages/main.js"></script>
</body>
</html>
