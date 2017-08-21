<?
  $page_title = 'Registrar alumno';
  $page = 'user';
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <ul class="menu">
        <li><a href="alumnos.php">Usuarios</a></li>
      </ul>
      <div class="section-intro">
        <h2>Registrar alumno</h2>
        <p class="section-intro__leading"><strong>Recuerde:</strong> Para registrar un alumno, la academia y profesor gu&iacute;a deben existir <strong>previamente</strong> en el sistema.</p>
      </div>
      <div class="form__wrap js-form">
        <form id="register-user">
          <legend>Campos obligatorios estan marcados con <abbr title="Requerido">*</abbr></legend>
          
          <fieldset class="feature-fieldset">
            <legend>Datos generales</legend>
            <div class="field-wrapper">
              <label for="id">Numero de Identificación <abbr title="Requerido">*</abbr> </label>
              <input type="text"  class="js-form-field" name="identification" id="id" required>
            </div>

            <div class="field-wrapper">
              <label for="name">Primer Nombre <abbr title="Requerido">*</abbr></label>
              <input type="text" class="js-form-field" name="firstName" id="name" required>
            </div>

            <div class="field-wrapper">
              <label for="sec-name">Segundo Nombre</label>
              <input type="text" class="js-form-field" name="secondName" id="sec-name">
            </div>

            <div class="field-wrapper">
              <label for="last-name">Primer Apellido<abbr title="Requerido">*</abbr> </label>
              <input type="text" class="js-form-field" name="firstLastName" id="last-name" required>
            </div>

            <div class="field-wrapper">
              <label for="sec-last-name">Segundo Apellido </label>
              <input type="text" class="js-form-field" name="secondLastName" id="sec-last-name">
            </div>
          
            <div class="field-group">
              <div class="field-wrapper">
                <label for="bday">Fecha de Nacimiento <abbr title="Requerido">*</abbr></label>
                <input type="date" class="js-form-field" name="bday" id="bday" required>
                <small class="note is-hidden js-bday-error">La fecha de cumpleaños no debe ser mayor a hoy.</small>
              </div>

              <div class="field-wrapper">
                <label for="age">Edad </label>
                <input type="text" class="js-form-field" name="age" id="age" disabled>
              </div>
            </div>

            <div class="field-wrapper">
              <label for="gender">Género <abbr title="Requerido">*</label>
              <select name="gender" class="js-form-field" id="gender" required>
                <option value="">Seleccionar</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>

          <div class="field-wrapper">
            <label for="email">Correo Electrónico <abbr title="Requerido">*</abbr></label>
            <input type="email" class="js-form-field" name="email" id="email" required>
          </div>
          
          <div class="field-group">
            <div class="field-wrapper">
              <label for="weight">Peso(Kg) </label>
              <input type="number" class="js-form-field" value="0" name="weight" id="weight">
              <small class="note">Peso en kilogramos. Ejem: 80</small>
            </div>

            <div class="field-wrapper">
              <label for="height">Altura(cm) </label>
              <input type="number" class="js-form-field" value="0" name="height" id="height">
              <small class="note">Altura en cent&iacute;metros. Ejem: 175</small>
            </div>
          </div>
          <div class="field-wrapper">
            <label for="belt">Grado Cinta <abbr title="Requerido">*</abbr></label>
            <select name="beltGrade" class="js-form-field" id="belt" required>
              <option value="">Seleccionar</option>
              <option value="Blanco">Blanco</option>
              <option value="Amarillo">Amarillo</option>
              <option value="Verde">Verde</option>
              <option value="Azul">Azul</option>
              <option value="Rojo">Rojo</option>
              <option value="Negro">Negro</option>
            </select>
            </div>
          </fieldset>

          <fieldset class="feature-fieldset">
            <legend>Informaci&oacute;n eventos</legend>
            <div class="field-group">
              <div class="field-wrapper ">
                <label for="part-tournament">Torneos Participados </label>
                <input type="number" class="js-form-field js-tourn-input" value="0" name="tournaments" id="part-tournament">
              </div>

              <div class="field-wrapper">
                <label for="win-tournament">Torneos Ganados </label>
                <input type="number" class="js-form-field js-tourn-input" value="0" name="winTournaments" id="win-tournament" >
              </div>
            </div>

            <div class="field-wrapper">
              <label for="exhibition">Exhibiciones Participadas </label>
              <input type="number" class="short-input js-form-field js-tourn-input" value="0" name="exhibitions" id="exhibition">
            </div>
          </fieldset>
          
          <fieldset class="feature-fieldset">
            <legend>Informaci&oacute;n academia</legend>
            <div class="field-wrapper">
              <label for="academy">Academia <abbr title="Requerido">*</abbr></label>
              <select class="js-form-field" name="academy" id="academy" required>
              <option value="">Seleccionar</option>
              </select>
            </div>

            <div class="field-wrapper">
              <label for="professor">Profesor Guía <abbr title="Requerido">*</abbr></label>
              <select class="js-form-field" name="professor" id="professor" required>
              <option value="">Seleccionar</option>
              </select>
            </div>
          </fieldset>
          <button id="btn-save" value="">Guardar</button>
          <a href="registrar-alumno.php" class="button button-secondary">Registrar otro alumno</a>
          </form>
        </div>
      </div>
    </main>

    <?php
      include("templates/footer.php");
    ?>
  
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/pages/users/student/registerAlumno.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>
