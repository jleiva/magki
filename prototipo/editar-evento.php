<?php
  $page_title = 'Editar evento';
  $page = 'event'; 
  include("templates/header.php");
?>
  <main class="wrapper">
    <div class="main-content">
      <div class="section-intro">
        <h2>Editar Evento</h2>
        <p class="section-intro__leading"><strong>Recuerde:</strong> Puede <em>Guardar</em> un evento sin completar los campos requeridos, pero no Publicarlo.</p>
      </div>
      
      <div class="js-form form__wrap">
        <form id="event-form" novalidate>
          <fieldset>
            <legend>Campos obligatorios est&aacute;n marcados con <abbr title="Requerido">*</abbr></legend>
            
            <fieldset class="feature-fieldset">
              <legend>Datos Generales</legend>
              
              <div class="field-wrapper">
                <label for="eventName">Nombre del Evento <abbr title="Requerido">*</abbr></label>
                <input class="js-event-field js-event-rs" type="text" id="eventName" name="eventName" required>
                <small class="note alert is-hidden js-event-name-warning">Ya existe un evento con este mismo nombre, verifique que no lo esta duplicando.</small>
              </div>

              <div class="field-group">
                <div class="field-wrapper">
                  <label for="dateStart">Fecha inicio <abbr title="Requerido">*</abbr></label>
                  <input class="js-event-field" id="dateStart" class="input" type="date" name="dateStart" required>
                  <small class="note is-hidden js-start-date-error">Fecha inicio debe ser mayor &oacute; igual a hoy.</small>
                </div>
                <div class="field-wrapper">
                  <label for="dateEnd">Fecha final <abbr title="Requerido">*</abbr></label>
                  <input class="js-event-field" id="dateEnd" class="input" type="date" name="dateEnd" required>
                  <small class="note is-hidden js-end-date-error">Fecha final debe ser mayor &oacute; igual a Fecha inicio.</small>
                </div>
              </div>

              <div class="field-wrapper">
                <label for="venue">Lugar del evento <abbr title="Requerido">*</abbr></label>
                <select class="js-event-field" name="venue" id="venue" required>
                  <option value="">Seleccione un Lugar...</option>
                </select>
              </div>
              
              <div class="field-group">
                <div class="field-wrapper">
                  <label for="venueCap">Espacio disponible</label>
                  <input class="js-event-field" type="number" id="venueCap" name="venueCap" disabled>
                  <small class="note">Dado por el Lugar seleccionado.</small>
                </div>
                <div class="field-wrapper">
                  <label for="venueCost">Valor Alquiler Lugar</label>
                  <input class="js-event-field" type="number" id="venueCost" name="venueCost">
                  <small class="note">Si no hay costo, deje el campo vac&iacute;o &oacute; ingrese cero (0).</small>
                </div>
              </div>

              <div class="field-group">
                <div class="field-wrapper">
                  <label for="ticketQ">Entradas disponibles <abbr title="Requerido">*</abbr></label>
                  <input class="js-event-field" type="number" min="0" id="ticketQ" name="ticketQ" required>
                  <small class="note js-ticket-quantity">Debe ser <strong>menor &oacute; igual</strong> al espacio disponible.</small>
                </div>
                <div class="field-wrapper">
                  <label for="priceTicket">Costo entrada</label>
                  <input class="js-event-field" type="number" min="0" id="priceTicket" name="priceTicket">
                  <small class="note">El valor es en colones costarricenses.</small>
                </div>
              </div>
            </fieldset>

            <fieldset class="feature-fieldset">
              <legend>Tipo de Evento</legend>
              <div class="field-wrapper">
                <label for="tipoEvento">Tipo <abbr title="Requerido">*</abbr></label>
                <select class="js-event-field" name="tipoEvento" id="tipoEvento" required>
                  <option value="">Seleccione el Tipo de Evento...</option>
                  <option value="torneo">Torneo</option>
                  <option value="exibicion">Exhibici&oacute;n</option>
                  <option value="fogueo">Fogueo</option>
                </select>
              </div>
              
              <div class="is-hidden js-competition-info">
                <div class="field-group">
                  <div class="field-wrapper">
                    <label for="entryFee">Costo inscripci&oacute;n por atleta <abbr class="is-competition" title="Requerido">*</abbr></label>
                    <input class="js-event-field" type="number" id="entryFee" name="entryFee">
                    <small class="note">El valor en colones costarricenses.</small>
                  </div>

                  <div class="field-wrapper">
                    <label for="weightDate">Fecha pesaje <abbr class="is-competition" title="Requerido">*</abbr></label>
                    <input class="js-event-field" type="date" id="weightDate" name="weightDate">
                  </div>
                </div>
                <div class="field-wrapper">
                <fieldset class="select field">
                  <legend>Habilitar Categor&iacute;as</legend>
                    <fieldset class="select field">
                      <legend>Masculino</legend>
                      <ul class="list-form">
                        <li>
                          <label for="masc1">
                          <input class="js-event-field" id="masc1" name="masc1" type="checkbox"/> Infantil/Junior (4 años a 11)</label>
                        </li>
                        <li>
                          <label for="masc2">
                          <input class="js-event-field" id="masc2" name="masc2" type="checkbox"/> Cadete (12 años a 16 años)</label>
                        </li>
                        <li>
                          <label for="masc3">
                          <input class="js-event-field" id="masc3" name="masc3" type="checkbox"/> Elite (17 años a 23 años)</label>
                        </li>
                        <li>
                          <label for="masc4">
                          <input class="js-event-field" id="masc4" name="masc4" type="checkbox"/> Senior mayores de 23 años</label>
                        </li>
                      </ul>
                    </fieldset>
                    <fieldset class="select field">
                      <legend>Femenino</legend>
                      <ul class="list-form">
                        <li>
                          <label for="fem1">
                          <input class="js-event-field" id="fem1" name="fem1" type="checkbox"/> Infantil/Junior (4 años a 11)</label>
                        </li>
                        <li>
                          <label for="fem2">
                          <input class="js-event-field" id="fem2" name="fem2" type="checkbox"/> Cadete (12 años a 16 años)</label>
                        </li>
                        <li>
                          <label for="fem3">
                          <input class="js-event-field" id="fem3" name="fem3" type="checkbox"/> Elite (17 años a 23 años)</label>
                        </li>
                        <li>
                          <label for="fem4">
                          <input class="js-event-field" id="fem4" name="fem4" type="checkbox"/> Senior mayores de 23 años</label>
                        </li>
                      </ul>
                    </fieldset>
                  </fieldset>
                  </div>
                </div>

              <div class="is-hidden js-guess">
                <div class="field-wrapper">
                  <label for="guess">Invitado Especial (opcional)</label>
                  <input class="js-event-field" type="text" id="guess" name="guess">
                </div>

                <div class="field-wrapper">
                  <label for="guessOrg">Organizaci&oacute;n (opcional)</label>
                  <input class="js-event-field" type="text" id="guessOrg" name="guessOrg">
                </div>
              </div>

            </fieldset>
            
          </fieldset>

          <fieldset class="feature-fieldset">
            <legend>Organizaci&oacute;n beneficiada</legend>
            <div class="field-wrapper">
              <label for="orgName">Seleccionar Organizaci&oacute;n (opcional)</label>
              <select class="js-event-field" name="orgName" id="orgName">
                <option value="">Seleccione una Organizaci&oacute;n...</option>
              </select>

              <ul class="item-list js-org-list">
                
              </ul>
            </div>
          </fieldset>

          <fieldset class="feature-fieldset">
            <legend>Patrocinadores</legend>
            <div class="field-wrapper">
              <label for="sponsor">Seleccionador Patrocinador (opcional)</label>
              <select class="js-event-field" name="sponsor" id="sponsor">
                <option value="">Seleccione un Patrocinador...</option>
              </select>
            </div>

            <div class="is-hidden js-sponsors-info">
              <div class="field-wrapper">
                <label for="sponsorBrand">Producto patrocinador</label>
                <select class="js-event-field" name="sponsorBrand" id="sponsorBrand">
                  <option value="">Seleccione un producto...</option>
                </select>
              </div>

              <div class="field-wrapper">
                <label for="sponsorType">Tipo de patrocinio</label>
                <select class="js-event-field" name="sponsorType" id="sponsorType">
                  <option value="">Seleccione un patrocinio...</option>
                  <option value="money">Dinero</option>
                  <option value="equitment">Equipo</option>
                  <option value="food">Alimentaci&oacute;n</option>
                </select>
              </div>

              <div class="field-wrapper">
                <label for="sponsorDesc">Descripci&oacute;n</label>
                <textarea class="js-event-field" rows="5" cols="20" name="sponsorDesc" id="sponsorDesc"></textarea>
              </div>

              <div class="field-wrapper">
                <label for="sponsorValue">Valor del patrocinio (en colones)</label>
                <input class="js-event-field" type="number" id="sponsorValue" name="sponsorValue">
              </div>
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

          <div class="field-wrapper">
            <button class="button-secondary" id="btn-save-edit" value="Guardar">Guardar</button> 
            <button id="btn-publish-edit" value="Publicar">Publicar</button>
          </div>
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
  <script src="js/helpers/load-data.js"></script>
  <script src="js/helpers/messages.js"></script>
  <script src="js/helpers/validate.js"></script>
  <script src="js/modules/events.js"></script>
  <script src="js/pages/events/edit.js"></script>
  <script src="js/pages/main.js"></script>
</body>
</html>