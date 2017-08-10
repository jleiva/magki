<?php
  $page_title = 'Registrar Lugar';
  $page = 'place';
  include("templates/header.php");
?>

  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Registrar Lugar</h2>
      </div>
      <div class="js-form form__wrap">
      <form id="register-place">
       <fieldset>
          <legend>Campos obligatorios están marcados con <abbr title="Requerido">*</abbr></legend>

          <fieldset class="feature-fieldset">
            <legend>Datos generales</legend>
            <div class="field-wrapper">
              <label for="nombreLugar">Nombre de lugar <abbr title="Requerido">*</abbr></label>
              <input type="text" id="nombreLugar" name="placeName" required class="js-form-field">
            </div>
            <div class="field-wrapper">
              <label for="telefonoEncargado">Teléfono del encargado <abbr title="Requerido">*</abbr></label>
              <input type="text" id="telefonoEncargado" name="placeTel" required class="js-form-field">
            </div>
            <div class="field-wrapper">
              <label for="horariosLugar">Horarios de disponibilidad <abbr title="Requerido">*</abbr></label>
              <input type="text" required class="js-form-field" name="placeSchedule">
              <small class="note">Ejemplo: Lunes a Viernes de 8am a 5pm</small>
            </div>
            <div class="field-wrapper">
              <label for="capacidadLugar">Capacidad máxima de personas <abbr title="Requerido">*</abbr></label>
              <input type="number" id="capacidadLugar" placeholder="0" name="placeCap" required class="short-input js-form-field"> <small class="note">Cantidad debe ser mayor a cero (0).</small>
            </div>
          </fieldset>

          <fieldset class="feature-fieldset">
            <legend>Datos de ubicación</legend>
            <div class="field-wrapper">
              <label for="direccionLugar">Dirección exacta <abbr title="Requerido">*</abbr></label>
              <textarea name="placeAdress" class="js-form-field" id="direccionLugar" required></textarea>
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

          <button id="btn-save">Guardar</button>
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
	<script src="js/pages/places/registerPlace.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABbEjzd6Y4yV8EE6j0_-MvyT1rZR-tiv0&libraries=places&callback=initMap" async defer></script>
	<script src="js/pages/main.js"></script>
</body>
</html>
