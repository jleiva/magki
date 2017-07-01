var db = require('../database/storage');

var loadData = {
  init: function() {
    var appLS = db.get() || {};

    appLS.users = [{
      id: 503240386,
      name: 'Jose',
      lastName: 'Leiva',
      email: 'leivajd@gmail.com',
      password: '2105'
    },
    {
      id: 103240386,
      name: 'Juan',
      lastName: 'Patas',
      email: 'patasd@gmail.com',
      password: '2106'
    },
    {
      id: 111710816,
      name: 'Maria',
      lastName: 'Martinez',
      email: 'maria@gmail.com',
      password: '2107'
    }];

    db.put('appUsersLs', appLS);
  }
};

module.exports = loadData;