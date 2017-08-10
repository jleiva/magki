<?php
  $page_title = 'Detalle evento';
  $page = 'event'; 
  include("templates/header.php");
?>
  
  <main class="wrapper">
    <div class="main-content">
      <div class="promo-box promo-box--no-hero">
        <h2 class="promo-box__title">2017 Campeonato Nacional de Taekwondo</h2>
        <div class="promo-left">
          <h4>Detalles del evento</h4>
          <p>
          <strong>Lugar:</strong> Ciudad Deportiva de Hatillo<br>
          <strong>Fecha:</strong> 30 de Junio de 2017<br>
          <br>
           <a href="reserve.html" class="button btn-small" id="btn-register">Reservar Entradas</a>
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
          <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Atletas inscritos</a></li>
          <li class="nav-tab"><a class="nav-tab-link" href="#">Resultados</a></li>
        </ul>
      </div>
      <table id="">
        <thead>
          <tr>
            <th>Nombre</th>            
            <th>Apellido</th>
            <th>Identificación</th>
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

</body>
</html>