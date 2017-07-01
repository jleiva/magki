var storage = {
  put: function(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  },

  get: function(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  erase: function(key) {
    localStorage.removeItem(key);
  },
  
  drop: function() {
    localStorage.clear();
  }
};

module.exports = storage;
