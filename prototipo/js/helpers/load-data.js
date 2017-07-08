var loadData = (function(window, undefined) {
  function init() {
    var appLS = storage.get('appLS') || {};
    var listaAcademiasLS = storage.get('listaAcademiasLS') || [];
    
    appLS.users = [{
      id: 503240386,
      name: 'Juan',
      lastName: 'Picado',
      email: 'admin@makgi.cr',
      password: '2105',
      role: 0
      },
      {
        id: 503240386,
        name: 'Jose',
        lastName: 'Leiva',
        email: 'leivajd@gmail.com',
        password: '2105',
        role: 0
      },
      {
        id: 103240386,
        name: 'Juan',
        lastName: 'Patas',
        email: 'patasd@gmail.com',
        password: '2106',
        role: 1
      },
      {
        id: 111710816,
        name: 'Maria',
        lastName: 'Martinez',
        email: 'maria@gmail.com',
        password: '2107',
        role: 2
      },
      {
        id: 501510557,
        name: 'Daniel',
        lastName: 'Martinez',
        email: 'dmartinez@gmail.com',
        password: '2107',
        role: 3
    }];

    listaAcademiasLS = [{
      nombreAcademia: 'Escuela De Taekwondo Bhan Seok',
      telefonoAcademia: '2227 4333',
      emailAcademia: 'bhanseok@gmail.com',
      NombreEncargado: 'Ronald',
      primerApellidoEncargado: 'Solano',
      direccionAcademia: '300 mts al sur de Autos Bohío Barrió Córdoba Zapote, San Jose',
      latitudAcademia: '',
      longitudAcademia: '',
      status: '1'
    },
    {
      nombreAcademia: 'Academia de Taekwondo Tigres Chali',
      telefonoAcademia: '7029 4850',
      emailAcademia: 'academiachali@gmail.com ',
      NombreEncargado: 'Ronald',
      primerApellidoEncargado: 'Chacon',
      direccionAcademia: 'San Francisco de Dos Ríos, San Jose',
      latitudAcademia: '',
      longitudAcademia: '',
      status: '1'
    }];
  
    storage.put('appLS', appLS);
    storage.put('listaAcademiasLS', listaAcademiasLS);
  }

  return {
    init: init
  };
})(window);