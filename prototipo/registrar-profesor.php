<?php 
  $page_title = 'Registrar Profesor';
  $page = 'user'; 
  include("templates/header.php");
?>
  <main class="wrapper">
		<div class="main-content">
			<div class="section-intro">
				<h2>Registrar Profesor</h2>
        <p class="section-intro__leading"><strong>Recuerde:</strong> Para registrar un profesor, la academia debe existir <strong>previamente</strong> en el Sistema.</p>
			</div>

			<div class="form__wrap js-form">
			<form id="register-user">
        <legend>Campos obligatorios estan marcados con <abbr title="Requerido">*</abbr></legend>

        <fieldset class="feature-fieldset">
          <legend>Datos Generales</legend>

          <div class="field-wrapper">
            <label for="id">Numero de Identificación <abbr title="Requerido">*</abbr></label>
            <input type="text" name="id" class="js-form-field" id="id" required>
          </div>

  				<div class="field-wrapper">
  					<label for="name">Primer Nombre <abbr title="Requerido">*</abbr></label>
  					<input type="text" name="name" class="js-form-field" id="name" required>
  				</div>

  				<div class="field-wrapper">
  					<label for="secName">Segundo Nombre</label>
  					<input type="text" name="name2" id="secName" class="js-form-field">
  				</div>

          <div class="field-wrapper">
            <label for="lastName">Primer Apellido <abbr title="Requerido">*</abbr></label>
            <input type="text" name="lastname" class="js-form-field" id="lastName" required>
          </div>

          <div class="field-wrapper">
  					<label for="secLastName">Segundo Apellido </label>
  					<input type="text" name="lastname2" id="secLastName" class="js-form-field">
  				</div>

          <div class="field-group">
            <div class="field-wrapper">
              <label for="bday">Fecha de Nacimiento <abbr title="Requerido">*</abbr></label>
              <input type="date" name="bday" class="js-form-field" id="bday">
              <small class="note is-hidden js-bday-error">La fecha no debe ser mayor al dia de hoy.</small>
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
              <option value="masculino" selected>Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          <div class="field-wrapper">
            <label for="email">Correo Electrónico <abbr title="Requerido">*</abbr></label>
            <input type="email" name="email" class="js-form-field" id="email" required>
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
            <label for="academy">Academia <abbr title="Requerido">*</abbr></label>
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

				<button id="btn-save" value="">Guardar</button>
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
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
	<script src="js/helpers/messages.js"></script>
	<script src="js/helpers/validate.js"></script>
	<script src="js/pages/users/professor/registerProfe.js"></script>
  <script src="js/pages/users/professor/logicProf.js"></script>
	<script src="js/pages/main.js"></script>
</body>
</html>
