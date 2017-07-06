var loadData = (function(window, undefined) {
  function init() {
    var appLS = storage.get('appLS') || {};
    
    appLS.users = [{
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

    appLS.venue = [{
      name: 'Sabana',
      capacity: 200
    },{
      name: 'Gimnasio',
      capacity: 5000
    }];
  
    storage.put('appLS', appLS);
  }

  return {
    init: init
  };
})(window);