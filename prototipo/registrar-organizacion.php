<?php 
  $page_title = 'Registrar Organización';
  $page = 'org'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Registrar Organización</h2>
        <p class="section-intro__leading">C&oacute;digo (C&eacute;dula Jur&iacute;dica) de la organizaci&oacute;n es un campo obligatorio, confirme que cuenta con el dato antes de iniciar el registro.</p>
      </div>

      <div class="form__wrap js-form">
        <form id="organization-form">   
          <fieldset>
            <legend>Campos obligatorios están marcados con <abbr title="Requerido">*</abbr></legend>
            <fieldset class="feature-fieldset">
              <legend>Datos generales</legend>
              <div class="field-wrapper">
                <label for="code">C&oacute;digo (C&eacute;dula Jur&iacute;dica) <abbr title="Requerido">*</abbr></label>
                <input type="text" class="js-form-field" id="code" name="codeNumber" required>
                <small class="note">Cédula Jurídica &oacute; identificaci&oacute;n.</small>
              </div>

              <div class="field-wrapper">
                <label for="organization-name">Nombre <abbr title="Requerido">*</abbr></label>
                <input type="text" class="js-form-field" id="organization-name" name="organization" required>
              </div>

              <div class="field-wrapper">
                <label for="organization-type">Tipo Organizaci&oacute;n <abbr title="Requerido">*</abbr></label>
                <select name="organizationType" class="js-form-field" id="organizationType" required>
                  <option value="">Seleccione una opción</option>
                  <option value="Gubernamental">Gubernamental</option>
                  <option value="NoGubernamental">NoGubernamental</option>
                </select>
              </div>

              <div class="field-wrapper">
                <label for="description">Descripci&oacute;n</label>
                <textarea name="description" class="js-form-field" id="description"></textarea>
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
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/pages/organizations/registerOrganization.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>