<?php 
  $page_title = 'Registrar Asistente';
  $page = 'user'; 
  include("templates/header.php");
?>
    <main class="wrapper">
      <div class="main-content">
        <div class="section-intro">
          <h2>Registrar Asistente</h2>
        </div>
        <div class="js-form form__wrap ">
            <form id="register-user" novalidate>
              <fieldset class="fieldset">
                <legend>Campos obligatorios estan marcados con <abbr title="Requerido">*</abbr></legend>
                <fieldset class="feature-fieldset">
                  <div class="field-wrapper">
          					<label for="id">N&uacute;mero de Identificación <abbr title="Requerido">*</abbr></label>
          					<input type="number" name="id" class="js-form-field" id="id" required>
                  </div>

                  <div class="field-wrapper">
          					<label for="name">Primer Nombre <abbr title="Requerido">*</abbr></label>
          					<input type="text" name="name" class="js-form-field" id="name" required>
          				</div>

          				<div class="field-wrapper">
          					<label for="secName">Segundo Nombre</label>
          					<input type="text" name="name2" id="secName">
          				</div>

                  <div class="field-wrapper">
          					<label for="lastName">Primer Apellido <abbr title="Requerido">*</abbr> </label>
          					<input type="text" name="lastname" class="js-form-field" id="lastName" required>
          				</div>

                  <div class="field-wrapper">
          					<label for="secLastName">Segundo Apellido </label>
          					<input type="text" name="lastname2" id="secLastName">
          				</div>

                  <div class="field-wrapper">
          					<label for="email">Correo Electrónico <abbr title="Requerido">*</abbr></label>
          					<input type="email" name="email" class="js-form-field" id="email" required>
          				</div>
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
    <script src="js/database/storage.js"></script>
    <script src="js/database/orm.js"></script>
    <script src="js/helpers/messages.js"></script>
    <script src="js/helpers/validate.js"></script>
    <script src="js/helpers/misc.js"></script>
    <script src="js/pages/users/assistant/logicAsist.js"></script>
    <script src="js/pages/users/assistant/registerAsistente.js"></script>
    <script src="js/pages/main.js"></script>
  </body>
  </html>
