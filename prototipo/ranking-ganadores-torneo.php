<?php
  $page_title = 'Detalle evento';
  $page = 'event'; 
  include("templates/header.php");
?>
  
  <main class="wrapper" id="ranking-page">
    <div class="slider">
      <input id="input-map" class="controls" type="text" placeholder="Escriba el lugar">
      <div id="map"></div>
    </div>
    <div class="main-content">
      <div class="promo-box">
        <h2 class="promo-box__title"></h2>
        <div class="promo-left">
          <h4>Detalles del evento</h4>
          <p>
          <strong>Lugar:</strong> <span id="place"></span><br/>
          <strong>Fecha:</strong> <span id="date"></span><br/>
          <strong>Tipo de evento:</strong> <span id="typeEvent"></span><br/>
          <strong>Costo entrada:</strong> <span id="price"></span><br/>
          <strong>Entradas disponibles:</strong> <span id="availableTickets"></span><br/>

          </p>
        </div>
        <div class="promo-right">
          <h4>Inscripción de Atletas:</h4>
          <strong>Fecha límite de inscripción:</strong> 20 de Julio de 2017<br>
          <strong>Fecha de pesaje:</strong> 28 de Julio de 2017<br>
          <strong>Costo de Inscripción:</strong> ¢15.000<br>
          
          <p class="note help-txt"><strong>Recuerde:</strong> para poder inscribir a sus atletas en un torneo, su Academia debe de estar registrada en Makgi previamente.</p>
        </div>
      </div>

      <div class="actions-tabs">
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link non-active" href="detalle-evento.php">Atletas inscritos</a></li>
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Ganadores por categor&iacute;a</a></li>
        </ul>
      </div>
      <table id="event-detail-users">
        <thead>
          <tr>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Grado</th>
            <th>Academia</th>
            <th>Posici&oacute;n</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <div class="no-data">
        <h3>No hay resultados.</h3>
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
  <script src="js/pages/events/event-detail.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABbEjzd6Y4yV8EE6j0_-MvyT1rZR-tiv0&libraries=places&callback=initMap" async defer></script>
  <script src="js/pages/main.js"></script>

</body>
</html>