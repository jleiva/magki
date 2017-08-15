<form id="edit-student-form" novalidate>
  <legend>Campos obligatorios estan marcados con <abbr title="Requerido">*</abbr></legend>
  <fieldset class="feature-fieldset">
    <legend>Datos Generales</legend>
    
    <div class="field-wrapper">
      <label for="id">Numero de Identificación <abbr title="Requerido">*</abbr> </label>
      <input type="text" class="js-form-field" name="identification" id="id" value="111720815" required pattern="[0-9]" disabled>
    </div>

    <div class="field-wrapper">
      <label for="name">Primer Nombre <abbr title="Requerido">*</abbr></label>
      <input type="text" class="js-form-field" name="firstName" id="name" value="Maria" required>
    </div>

    <div class="field-wrapper">
      <label for="sec-name">Segundo Nombre</label>
      <input type="text" class="js-form-field" name="secondName" id="sec-name">
    </div>

    <div class="field-wrapper">
      <label for="last-name">Primer Apellido<abbr title="Requerido">*</abbr> </label>
      <input type="text" class="js-form-field" name="firstLastName" id="last-name" value="Martinez" required>
    </div>

    <div class="field-wrapper">
      <label for="sec-last-name">Segundo Apellido </label>
      <input type="text" class="js-form-field" name="secondLastName" id="sec-last-name">
    </div>

    <div class="field-wrapper">
      <label for="email">Correo Electrónico <abbr title="Requerido">*</abbr></label>
      <input type="email" class="js-form-field" name="email" id="email" value="mmartinez@mailme.com" required>
    </div>

    <div class="field-group">
      <div class="field-wrapper">
        <label for="weight">Peso(Kg) </label>
        <input type="number" class="js-form-field" name="weight" id="weight" value="55">
        <small class="note">Peso en kilogramos. Ejem: 80</small>
      </div>

      <div class="field-wrapper">
        <label for="height">Altura(cm) </label>
        <input type="number" class="js-form-field" name="height" id="height" value="168">
        <small class="note">Altura en cent&iacute;metros. Ejem: 175</small>
      </div>
    </div>
  </fieldset>
  <button id="btn-save" value="">Guardar</button>
</form>