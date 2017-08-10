<?php
  $page_title = 'Editar asistente';
  $page = 'user'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Editar Asistente</h2>
      </div>
      <div class="js-form form__wrap ">
          <form id="edit-assist-form" novalidate>
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
                  <input type="text" name="name2" class="js-form-field" id="secName">
                </div>

                <div class="field-wrapper">
                  <label for="lastName">Primer Apellido <abbr title="Requerido">*</abbr> </label>
                  <input type="text" name="lastname" class="js-form-field" id="lastName" required>
                </div>

                <div class="field-wrapper">
                  <label for="secLastName">Segundo Apellido </label>
                  <input type="text" name="lastname2" class="js-form-field" id="secLastName">
                </div>

                <div class="field-wrapper">
                  <label for="email">Correo Electrónico <abbr title="Requerido">*</abbr></label>
                  <input type="email" name="email" class="js-form-field" id="email" required>
                </div>

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
  
  <script src="js/helpers/util.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/pages/users/assistant/logicAsist.js"></script>
  <script src="js/pages/users/assistant/editAsist.js"></script>
  <script src="js/pages/main.js"></script>

</body>
</html>
