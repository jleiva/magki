<?php
  $page_title = 'Editar organización';
  $page = 'org'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <nav class="nav-breadcrumbs" role="navigation">
        <ul>
            <li><a href="organizaciones.php">Listado organizaciones</a></li>
        </ul>
      </nav>
      <div class="section-intro">
        <h2>Editar organización</h2>
      </div>
      <div class="form__wrap js-form">
 
        <form id="edit-organization-form" novalidate>
        <fieldset>
          <legend>Campos obligatorios estan marcados con <abbr title="Requerido">*</abbr></legend>
          <fieldset class="feature-fieldset">
            <legend>Datos generales</legend>
            <div class="field-wrapper">
             <label for="code">C&oacute;digo (C&eacute;dula Jur&iacute;dica) <abbr title="Requerido">*</abbr></label>
              <input type="text" class="js-form-field" id="code" name="codeNumber" required>
              <small class="note">Cédula Jurídica &oacute; identificaci&oacute;n.</small>
            </div>

             <div class="field-wrapper">
              <label for="organizationName">Nombre <abbr title="Requerido">*</abbr>
              <input type="text" class="js-form-field" id="organizationName" name="organization" required>
            </div>

            <div class="field-wrapper">
              <label for="organizationType">Tipo Organizaci&oacute;n <abbr title="Requerido">*</abbr></label>
              <select class="js-form-field" id="organizationType" name="organizationType" required>
                <option value="">Seleccione una opción</option>
                <option value="Gubernamental">Gubernamental</option>
                <option value="NoGubernamental">NoGubernamental</option>
              </select>
            </div>

            <div class="field-wrapper">
              <label for="description">Descripci&oacute;n</label>
              <textarea name="description"  class="js-form-field" id="description"></textarea>
            </div>
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
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/pages/organizations/editOrganization.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>