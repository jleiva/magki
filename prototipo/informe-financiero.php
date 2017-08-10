<?php
  $page_title = 'Informe financiero';
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2 class="section-intro__leading">Estado de Resultados: <span class="js-event-name"></span></h2>
        <h3>Ingresos y gastos derivados del evento</h3>
      </div>

      <div class="actions-tabs">
          <p class="nav-tab">Listado de ingresos y gastos</p>
      </div>
    
      <table id="tblIncomeStatement">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Nombre</th>
            <th>Monto ₡</th>
            <th>Total  ₡</th>
          </tr>
        </thead>
        <tbody>     
        </tbody>
      </table>

       <!--<div class="no-data">
        <h3>No hay movimientos registrados</h3>
      </div>-->
    </div>  
  </main>
  
  <?php
    include("templates/footer.php");
  ?>
  
  <script src="js/helpers/util.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/pages/events/incomeStatement.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>