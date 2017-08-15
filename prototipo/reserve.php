  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Makgi - Reservar entradas</title>
    <link rel="shortcut icon" href="img/kar.png" />
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet">
  </head>
  <body>
    <header class="site-header" role="">
      <div class="group">
        <h1 class="logo"><a href="index.html">Makgi</a></h1>
        <nav class="main-nav" role="">
          <nav class="main-nav" role="">
          <ul class="menu">
            <li class="main-nav__item"><a href="">Acerca de</a></li>
            <li class="main-nav__item"><a href="">Aprenda Taekwondo</a></li>
            <li class="main-nav__item"><a href="" class="is-active">Eventos</a></li>
            <li class="main-nav__item"><a href="">Contacto</a></li>
            <li class="main-nav__item main-nav__item--profile js-guess-visitor"><a href="iniciar-sesion.php">Iniciar Sesi&oacute;n</a></li>
          <li class="main-nav__item main-nav__item--profile is-hidden js-logguedIn-visitor"><a href="perfil-admin.html"><span class="profile-name js-profile-name"></span></a> <a href="#" class="js-logout">Cerrar Sesi&oacute;n</a></li>
          </ul>
        </nav>
        </nav>
      </div>
    </header>
    <main class="wrapper">
      <div class="slider"><img src="img/hero.jpg" alt=""/></div>
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
          <h4>Mostrar mapa del lugar y ubicacion</h4>
        </div>
      </div>

      <div class="js-reserve-tickets-disable promo-box is-hidden">
        <h3>Se han agotado las entradas para este evento.</h3>
      </div>
        
      <div class="js-reserve-tickets-enable">
        <h2>Haga su reserva</h2>
        <div class="form__wrap">
          <div class="js-form">
            <form id="reserve" novalidate>
            <legend>Campos obligatorios están marcados con <abbr title="Requerido">*</abbr></legend>

              <div class="field-wrapper">
                <label for="txtID">Nombre <abbr title="Requerido">*</abbr></label>
                <input type="text" id="name" name="name" class="js-form-field" required>
              </div>

              <div class="field-wrapper">
                <label for="txtName">Primer apellido <abbr title="Requerido">*</abbr></label>
                <input type="text" id="lastName" name="lastName" class="js-form-field" required>
              </div>

              <div class="field-wrapper">
                <label for="txtBusinessName">Segundo apellido</label>
                <input type="text" id="secLastName" name="secLastName" class="js-form-field">
              </div>

              <div class="field-wrapper">
                <label for="txtBusinessName">Identificación <abbr title="Requerido">*</abbr></label>
                <input type="text" id="id" name="id" class="js-form-field" required>
              </div>

              <div class="field-wrapper">
                <label for="email">Correo Electronico <abbr title="Requerido">*</abbr></label>
                <input type="email" id="email" name="email" class="js-form-field" required>
              </div>

              <div class="field-wrapper">
                  <label for="amountTickets">Cantidad de entradas <abbr title="Requerido">*</abbr></label>
                  <input type="number" id="amountTickets" name="amountTickets" class="short-input js-form-field" placeholder="0" min="0" class="js-form-field" required>
              </div>

              <button id="btn-save">Reservar</button>
            </form>
          </div>
        </div>
        </div>
      </div>
      <div class="voices">

      </div>
    </main>
  <footer class="site-footer">
    <div class="group">
      <a href="#" class="footer-tagline">Makgi <span>Gestor de eventos</span></a>
      <ul class="menu nav-footer">
        <li><a href="">Eventos</a></li>
        <li><a href="">Ayuda</a></li>
        <li><a href="">tkdcr.org</a></li>
      </ul>
    </div>
  </footer>
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
	<script src="js/helpers/messages.js"></script>
	<script src="js/helpers/validate.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/pages/reservations/reserve.js"></script>
  <!--<script src="js/pages/home/index.js"></script>-->
  <script src="js/pages/main.js"></script>
</body>
</html>
