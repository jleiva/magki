<?php
  $page_title = 'Editar academia';
  $page = 'acadm';
  include("templates/header.php");
?>

    <main class="wrapper">
      <div class="main-content">
      <nav class="nav-breadcrumbs" role="navigation">
        <ul>
            <li><a href="academias.php">Listado academias</a></li>
        </ul>
      </nav>
        <div class="section-intro">
          <h2>Editar academia</h2>
        </div>

        <div class="js-form form__wrap">
          <form id="edit-academy-form" novalidate>
            <fieldset>
              <legend>Campos obligatorios estan marcados con <abbr title="Requerido">*</abbr></legend>

              <fieldset class="feature-fieldset">
                <legend>Datos generales</legend>
                <div class="field-wrapper">
                  <label for="nombreAcademia">Nombre de academia <abbr title="Requerido">*</abbr></label>
                  <input type="text" id="academyName" name="academyName" required class="js-form-field">
                </div>
                <div class="field-wrapper">
                  <label for="telefonoAcademia">Teléfono <abbr title="Requerido">*</abbr></label>
                  <input type="text" id="academyTel" name="academyTel" required class="js-form-field">
                </div>
                <div class="field-wrapper">
                  <label for="emailAcademia">Correo Electrónico <abbr title="Requerido">*</abbr></label>
                  <input type="email" id="academyEmail" name="academyEmail" required class="js-form-field">
                </div>
              </fieldset>

              <fieldset class="feature-fieldset">
                <legend>Datos encargado</legend>
                <div class="field-wrapper">
                  <label for="nombreEncargado">Nombre <abbr title="Requerido">*</abbr></label>
                  <input type="text" id="attendantName" name="attendantName" required class="js-form-field">
                </div>
                <div class="field-wrapper">
                  <label for="primerApellidoEncargado">Primer Apellido <abbr title="Requerido">*</abbr></label>
                  <input type="text" id="attendantLastName" name="attendantLastName" required class="js-form-field">
                </div>
                <div class="field-wrapper">
                  <label for="segundoApellidoEncargado">Segundo Apellido </label>
                  <input type="text" id="attendantSecLastName" name="attendantSecLastName" class="js-form-field">
                </div>
              </fieldset>

              <fieldset class="feature-fieldset">
                <legend>Datos de ubicación</legend>
                <div class="field-wrapper">
                  <label for="direccionAcademia">Dirección física</label>
                  <textarea name="academyAddress" placeholder="Dirección por señas" class="js-form-field" id="academyAddress"></textarea>
                </div>

                <div class="field-group">
                  <div class="field-wrapper">
                    <label for="latitudLugar">Latitud</label>
                    <input type="number" step= "0.000001" id="placeLatitude" name="placeLatitude" class="js-form-field">
                    <small class="note">Ejemplo: 41.40338</small>
                  </div>

                  <div class="field-wrapper">
                   <label for="longitudLugar">Longitud</label>
                   <input type="number" step= "0.000001" id="placeLongitude" name="placeLongitude" class="js-form-field">
                   <small class="note">Ejemplo: 2.17403</small>
                  </div>
                </div>

                <input id="input-map" class="controls" type="text" placeholder="Escriba el lugar">
                <div id="map"></div>
              </fieldset>

              <fieldset class="select field">
               <legend>Estado</legend>
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
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABbEjzd6Y4yV8EE6j0_-MvyT1rZR-tiv0&libraries=places&callback=initMap" async defer></script>
  	<script src="js/pages/academies/editAcademy.js"></script>
  	<script src="js/pages/main.js"></script>
  </body>
</html>
