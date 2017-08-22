<?php
  $page_title = 'Detalle evento';
  $page = 'event'; 
  include("templates/header.php");
?>
  
  <main class="wrapper" id="detail-page">
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

          <div class="is-hidden js-org-event-box">
            <h4>A beneficio de:</h4>
            <p id="js-org-event"></p>
          </div>

        </div>
        <div class="promo-right">
          <h4>Inscripción de atletas:</h4>
          <strong>Fecha límite de inscripción:</strong> <span id="limitDate"></span><br>
          <strong>Fecha de pesaje:</strong> <span id="weightDate"></span><br>
          <strong>Costo de Inscripción:</strong> <span id="regPrice"></span><br>
          
          <p class="note help-txt"><strong>Recuerde:</strong> para poder inscribir a sus atletas en un torneo, su Academia debe de estar registrada en Makgi previamente.</p>
        </div>
      </div>

      <div class="sponsors-section js-sponsors-section is-hidden">
        <h3>Patrocinadores</h3>

        <ul class="js-event-sponsor-list">
          
        </ul>
      </div>

      <div class="actions-tabs">
        <ul class="actions-tabs__options">
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Atletas inscritos</a></li>
          <li class="nav-tab"><a class="nav-tab-link non-active" href="resultados-evento.php">Ganadores por categor&iacute;a</a></li>
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
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <div class="no-data">
        <h3>No hay atletas inscritos.</h3>
      </div>
    </div>    
  </main>
  
  <?php
    include("templates/footer.php");
  ?>
  
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/pages/events/event-detail.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABbEjzd6Y4yV8EE6j0_-MvyT1rZR-tiv0&libraries=places&callback=initMap" async defer></script>
  <script src="js/pages/main.js"></script>

</body>
</html>