<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Makgi - Perfil Usuario</title>
  <link rel="stylesheet" href="css/styles.css">
  <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet">
</head>
<body>
  <header class="site-header" role="">
    <div class="group">
      <h1 class="logo"><a href="perfil-admin.html">Makgi</a></h1>
      <nav class="main-nav" role="">
        <ul class="menu">
          <li class="main-nav__item"><a href="alumnos.html">Usuarios</a></li>
          <li class="main-nav__item"><a href="academias.html">Academias</a></li>
          <li class="main-nav__item"><a href="organizaciones.php">Organizaciones</a></li>
          <li class="main-nav__item"><a href="lugares.html">Lugares</a></li>
          <li class="main-nav__item"><a href="eventos.html">Eventos</a></li>
          <li class="main-nav__item main-nav__item--profile"><a href="perfil-admin.html"><span class="profile-name js-profile-name"></span></a> <a href="#" class="js-logout">Cerrar Sesi&oacute;n</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Perfil de Usuario</h2>
        <p class="section-intro__leading">Administre sus datos personales y contraseña.</p>
      </div>

      <div class="profile-wrap">
        <div class="profile-actions">
          <ul class="menu menu-actions">
            <li><a href="#" class="is-active">Perfil personal</a></li>
            <li><a href="#">Editar Perfil</a></li>
            <li><a href="#">Cambiar contraseña</a></li>
          </ul>
        </div>

        <div class="profile-info">
          <h2 class="js-profile-display-name profile-info__name"></h2>

          <h4>Accesos r&aacute;pidos</h4>
          <ul class="menu menu-quick-links">
            <li><a href="registrar-asistente.html">Registrar Asistente</a></li>
            <li><a href="registrar-profesor.html">Registrar Profesor</a></li>
            <li><a href="registrar-academia.html">Registrar Academia</a></li>
            <li><a href="registrar-evento.html">Registrar Evento</a></li>
          </ul>
          
          <div class="activity">
          <h3 class="activity__h">Actividad Reciente</h3>
          <div class="actions-tabs">
            <ul class="actions-tabs__options">
              <li class="nav-tab"><a class="nav-tab-link is-active" href="#">Eventos</a></li>
            </ul>
          </div>
          <table id="profile-events">
            <thead>
              <tr>
                <th>Nombre</th>  
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
          <div class="no-data">
            <h3>No hay actividad reciente.</h3>
          </div>
          </div>
        </div>
      </div>
      
    </div>    
  </main>
  
  <footer class="site-footer">
    <div class="group">
      <a href="#" class="footer-tagline">Makgi <span>Gestor de eventos</span></a>
      <ul class="menu nav-footer">
        <li><a href="">Ayuda</a></li>
        <li><a href="">tkdcr.org</a></li>
      </ul>
    </div>
  </footer>
  <script src="js/helpers/util.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/modules/events.js"></script>
  <script src="js/pages/events/index.js"></script>
  <script src="js/pages/profile/index.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>