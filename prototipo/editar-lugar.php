<?php
  $page_title = 'Registrar Lugar';
  $page = 'place';
  include("templates/header.php");
?>

  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Editar Lugar</h2>
      </div>

      <div class="js-form form__wrap">
      <form id="editPlace-form">
       <fieldset>
          <legend>Campos obligatorios est&aacute;n marcados con <abbr title="Requerido">*</abbr></legend>

          <fieldset class="feature-fieldset">
            <legend>Datos generales</legend>
            <div class="field-wrapper">
              <label for="namePlace">Nombre de lugar <abbr title="Requerido">*</abbr></label>
              <input type="text" id="namePlace" name="namePlace" required class="js-form-field">
            </div>
            <div class="field-wrapper">
              <label for="telPlace">Tel&eacute;fono del encargado <abbr title="Requerido">*</abbr></label>
              <input type="text" id="telPlace" name="telPlace" required class="js-form-field">
              <small class="note">Ejemplo: 2222-2334</small>
            </div>
            <div class="field-wrapper">
              <label for="schedule">Horarios de disponibilidad <abbr title="Requerido">*</abbr></label>
              <input type="text" id="schedule" required class="js-form-field" name="schedule">
              <small class="note">Ejemplo: Lunes a Viernes de 8am a 5pm</small>
            </div>
            <div class="field-wrapper">
              <label for="capPlace">Capacidad m&aacute;xima de personas <abbr title="Requerido">*</abbr></label>
              <input type="number" id="capPlace" name="capPlace" required class="short-input js-form-field"> <small class="note">Cantidad debe ser mayor a cero (0).</small>
            </div>
          </fieldset>

          <fieldset class="feature-fieldset">
            <legend>Datos de ubicaci&oacute;n</legend>
            <div class="field-wrapper">
              <label for="adressPlace">Direcci&oacute;n f&iacute;sica <abbr title="Requerido">*</abbr></label>
              <textarea name="adressPlace" class="js-form-field" id="adressPlace" required></textarea>
            </div>

            <div class="field-group">
              <div class="field-wrapper">
                <label for="placeLatitude">Latitud</label>
                <input type="number" step= "0.000001" id="placeLatitude" name="placeLatitude" class="js-form-field">
                <small class="note">Ejemplo: 41.40338</small>
              </div>

              <div class="field-wrapper">
               <label for="placeLongitude">Longitud</label>
               <input type="number" step= "0.000001" id="placeLongitude" name="placeLongitude" class="js-form-field">
               <small class="note">Ejemplo: 2.17403</small>
              </div>
            </div>

            <input id="input-map" class="controls" type="text" placeholder="Escriba el lugar">
            <div id="map"></div>
          </fieldset>

         <fieldset class="select field">
          <legend>Estado<abbr title="Requerido">*</abbr></legend>
            <ul class="list-form">
              <li>
                <label for="able"><input id="able" name="status" type="radio"/>Habilitar</label>
              </li>
              <li>
                <label for="disable"><input id="disable" name="status" type="radio"/>Deshabilitar</label>
              </li>
            </ul>
            <small class="note"><strong>Deshabilitar:</strong> no se muestra en listados p&uacute;blicos &oacute; formularios.</small>
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
  <script src="js/pages/places/editPlace.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABbEjzd6Y4yV8EE6j0_-MvyT1rZR-tiv0&libraries=places&callback=initMap" async defer></script>
  <script src="js/pages/main.js"></script>

</body>
</html>
