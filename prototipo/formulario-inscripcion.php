<?
  $page_title = 'Inscribir Competidores';
  $page = 'event'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Datos para la inscripción</h2>
        <h3 class="section-intro__leading">Atleta: <span class="js-athlete-name"></span></h3>
        <h3 class="section-intro__leading">Evento: <span class="js-event-name"></span></h3> 
      </div>
      <div class="form__wrap js-form">

      <form id="inscription-form" novalidate>

      <p><strong>Recuerde:</strong>

        El competidor debe asistir al pesaje oficial en la fecha indicada; de no presentarse, o en caso de que el peso no corresponda a la categorÍa seleccionada, quedará descalificado.</p>
          <fieldset>
      
        <div class="field-wrapper">
          <label for="academy">Academia</label>
          <input type="text" class="js-form-field" id="academy" name="">
        </div>

        <div class="field-wrapper">
          <label for="teacher">Profesor Guía</label>
          <input type="text" class="js-form-field" id="teacher" name="">
        </div>

        <div class="field-wrapper">
          <label for="category">Categoría <abbr title="Requerido">*</abbr></label>
          <select class="js-form-field" id="category" required>
            <option value="">Seleccione una opción</option>
            <option value="Infantil">Infantil</option>
            <option value="Cadete">Cadete</option>
  
            <option value="Elite">Elite</option>
            <option value="Senior">Senior</option>
          </select>
        </div>



        <!--<div class="field-wrapper">
          <label for="category">Categoría <abbr title="Requerido">*</abbr></label>
          <select class="js-form-field" id="category" required>
            <option value="">Seleccione una opción</option>
            <option value="Masculino Infantil il-Yang (pluma) -51kg">Masculino Infantil il-Yang (pluma) -51kg</option>
            <option value="Masculino Infantil i-Yang (Gallo) 52 - 59kg">Masculino Infantil i-Yang (Gallo) 52 - 59kg</option>
  
            <option value="Masculino Infantil o-Yang (Supergallo) 60 - 65kg">Masculino Infantil o-Yang (Supergallo) 60 - 65kg</option>
            <option value="Masculino Infantil sam-yang (Wélter) 66 - 74kg">Masculino Infantil sam-yang (Wélter) 66 - 74kg</option>
            <option value="Masculino Infantil siu-yang (Pesado) +74kg ">Masculino Infantil siu-yang (Pesado) +74kg </option>
            <option value="Masculino Cadete il-Yang (pluma) -51kg ">Masculino Cadete il-Yang (pluma) -51kg </option>>
            <option value="Masculino Cadete i-Yang (Gallo) 52 - 59kg">Masculino Cadete i-Yang (Gallo) 52 - 59kg</option>
            <option value="Masculino Cadete o-Yang (Supergallo) 60 - 65kg">Masculino Cadete o-Yang (Supergallo) 60 - 65kg</option>
            <option value="Masculino Cadete sam-yang (Wélter) 66 - 74kg">Masculino Cadete sam-yang (Wélter) 66 - 74kg</option>
            <option value="Masculino Cadete siu-yang (Pesado) +74kg">Masculino Cadete siu-yang (Pesado) +74kg</option>>
            <option value="Masculino Elite il-Yang (pluma) -51kg">Masculino Elite il-Yang (pluma) -51kg</option>>
            <option value="Masculino Elite i-Yang (Gallo) 52 - 59kg">Masculino Elite i-Yang (Gallo) 52 - 59kg</option>
            <option value="Masculino Elite o-Yang (Supergallo) 60 - 65kg">Masculino Elite o-Yang (Supergallo) 60 - 65kg </option>
            <option value="Masculino Elite sam-yang (Wélter) 66 - 74kg ">Masculino Elite sam-yang (Wélter) 66 - 74kg</option>
            <option value="Masculino Elite siu-yang (Pesado) +74kg ">Masculino Elite siu-yang (Pesado) +74kg </option>
            <option value="Masculino Senior il-Yang (pluma) -51kg">Masculino Senior il-Yang (pluma) -51kg</option>
            <option value="Masculino Senior i-Yang (Gallo) 52 - 59kg">Masculino Senior i-Yang (Gallo) 52 - 59kg</option>
            <option value="Masculino Senior o-Yang (Supergallo) 60 - 65kg">Masculino Senior o-Yang (Supergallo) 60 - 65kg</option>
            <option value="Masculino Senior sam-yang (Wélter) 66 - 74kg">Masculino Senior sam-yang (Wélter) 66 - 74kg</option>
            <option value="Masculino Senior siu-yang (Pesado) +74kg">Masculino Senior siu-yang (Pesado) +74kg </option>
          </select>
        </div>-->

        </fieldset>
        <button id="btn-save" value="Guardar">Guardar</button>

        </fieldset>
      </form>
      </div>  
    </div>    
  </main>
 <footer class="site-footer">
    <div class="group">
      <a href="#" class="footer-tagline">Magki <span>Gestor de eventos</span></a>
      <ul class="menu nav-footer">
        <li><a href="">Ayuda</a></li>
        <li><a href="">tkdcr.org</a></li>
      </ul>
    </div>
  </footer>
  <script src="js/helpers/jquery-3.2.1.min.js"></script>
  <script src="js/helpers/util.js"></script>
  <script src="js/helpers/misc.js"></script>
  <script src="js/database/storage.js"></script>
  <script src="js/database/orm.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/modules/events.js"></script>
  <script src="js/pages/academies/businessLogicAcademy.js"></script>
  <script src="js/pages/users/student/logicAlumno.js"></script>
  <script src="js/pages/events/inscription-form.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>