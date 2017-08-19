<?php
  $page_title = 'Editar profesor';
  $page = 'user'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Editar Profesor</h2>
      </div>
      <div class="form__wrap js-form" >
        <form id="edit-proft-form" novalidate>
          <legend>Campos obligatorios estan marcados con <abbr title="Requerido">*</abbr></legend>

          <fieldset class="feature-fieldset">
            <legend>Datos Generales</legend>
          <div class="field-wrapper">
            <label for="id">Numero de Identificacion <abbr title="Requerido">* </label>
            <input type="number" name="id" class="js-form-field" id="id" required>
          </div>

          <div class="field-wrapper">
            <label for="name">Primer Nombre <abbr title="Requerido">*</label>
            <input type="text" name="name" class="js-form-field" id="name" required>
          </div>

          <div class="field-wrapper">
            <label for="secName">Segundo Nombre</label>
            <input type="text" name="name2" id="sec-name" class="js-form-field">
          </div>

          <div class="field-wrapper">
            <label for="lastName">Primer Apellido <abbr title="Requerido">* </label>
            <input type="text" name="lastname" class="js-form-field" id="last-name" required>
          </div>

          <div class="field-wrapper">
            <label for="secLastName">Segundo Apellido </label>
            <input type="text" name="lastname2" id="sec-last-name" class="js-form-field">
          </div>

          <div class="field-group">
            <div class="field-wrapper">
              <label for="bday">Fecha de Nacimiento <abbr title="Requerido">*</abbr></label>
              <input type="date" name="bday" class="js-form-field" id="bday" required>
              <small class="note is-hidden js-bday-error">La fecha no debe ser mayor al día de hoy.</small>
            </div>

            <div class="field-wrapper">
              <label for="age">Edad </label>
              <input type="text" name="age" id="age" class="js-form-field" disabled>
            </div>
          </div>

          <div class="field-wrapper">
            <label for="gender">Género</label>
            <select name="genero" class="js-form-field" id="gender">
              <option value="">Seleccionar</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          <div class="field-wrapper">
            <label for="email">Correo Electronico <abbr title="Requerido">* </label>
            <input type="text" name="email" class="js-form-field" id="email" required>
          </div>

          <div class="field-wrapper">
            <label for="phone">Numero de Teléfono </label>
            <input type="text" name="phone" class="js-form-field" id="phone">
            <small class="note">Ejemplo: 2222-2334</small>
          </div>
        </fieldset>
        
        <fieldset class="feature-fieldset">
          <legend>Informaci&oacute;n Academia</legend>

          <div class="field-wrapper">
            <label for="academy">Academia <abbr title="Requerido"> *</abbr></label>
            <select name="academy" class="js-form-field" id="academy" required>
            <option value="">Seleccionar</option>
            </select>
          </div>

          <div class="field-wrapper">
            <label for="belt">Grado Cinta </label>
            <select class="js-form-field" name="beltGrade" id="belt">
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

        <button id="btn-save" value="">Guardar</button>
      </form>

      </div>
    </div>
  </main>
  
  <?php
    include("templates/footer.php");
  ?>
  
  <script src="js/helpers/util.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/messages.js"></script>
   <script src="js/pages/academies/businessLogicAcademy.js"></script>
  <script src="js/pages/users/professor/logicProf.js"></script>
  <script src="js/pages/users/professor/editProf.js"></script>
  <script src="js/pages/main.js"></script>

</body>
</html>
