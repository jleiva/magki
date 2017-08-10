<?php
  $page_title = 'Registrar Patrocinador';
  $page = 'org'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Registrar Patrocinador</h2>
      </div>
      <div class="js-form form__wrap ">
          <form id="form-sponsor">
            <fieldset class="fieldset">
              <legend>Campos obligatorios están marcados con <abbr title="Requerido">*</abbr></legend>
              <fieldset class="feature-fieldset">
                <legend>Patrocinador</legend>
                <div class="field-wrapper">
                  <label for="sponsorLogo">Logo</label>
                  <div id="imgSponsor"></div>
                  <input id="sponsorLogo" class="input-file" type="file">
                </div>

                <div class="field-wrapper">
                  <label for="txtID">Cédula jurídica <abbr title="Requerido">*</abbr></label>
                  <input type="text" id="txtID" required class="js-form-field">
                </div>

                <div class="field-wrapper">
                   <label for="txtName">Nombre comercial del patrocinador <abbr title="Requerido">*</abbr></label>
                   <input type="text" id="txtName" required class="js-form-field">
                </div>

                <div class="field-wrapper">
                  <label for="txtBusinessName">Razón social <abbr title="Requerido">*</abbr></label>
                  <input type="text" id="txtBusinessName" required class="js-form-field">
                </div>
              </fieldset>

              <fieldset class="feature-fieldset">
                <legend>Producto</legend>

                <div class="add-product">
                  <div class="product-field" id="divProduct1">
                    <label for="txtProductName1">Nombre del producto</label>
                    <input type="text" class="prod-Name" id="txtProductName1"/>
                    <div class="imgProdLogo" id="imgProducto1"></div>
                    <input type="file"  id="productLogo1" class="input-file"/>
                  </div>
                </div>
                <div class="divAddBttn">
                  <img src="img/add.png" class="moveAddBttn"/>
                </div>
              </fieldset>

              <button id="saveBttn">Guardar</button>
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
	<script src="js/helpers/messages.js"></script>
	<script src="js/helpers/validate.js"></script>
  <script src="js/pages/sponsors/businessLogicSponsors.js"></script>
  <script src="js/pages/sponsors/registerSponsors.js"></script>
  
</body>
</html>
