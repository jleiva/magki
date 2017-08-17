<nav class="main-nav">
  <ul class="menu">
    <li class="main-nav__item">
      <a href="alumnos.php" <?php echo ($page == 'user') ? "class='is-active'" : ""; ?>>Usuarios</a>
    </li>
    <li class="main-nav__item">
      <a href="academias.php" <?php echo ($page == 'acadm') ? "class='is-active'" : ""; ?>>Academias</a>
    </li>
    <li class="main-nav__item">
      <a href="eventos.php" <?php echo ($page == 'event') ? "class='is-active'" : ""; ?>>Eventos</a>
    </li>
    <li class="main-nav__item main-nav__item--profile">
      <a href="perfil-usuario.php"><span class="profile-name js-profile-name"></span></a> <a href="#" class="js-logout">Cerrar Sesi&oacute;n</a>
    </li>
  </ul>
</nav>