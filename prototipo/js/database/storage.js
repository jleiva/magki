var storage = (function(window, undefined) {
  function put(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  function get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function erase(key) {
    localStorage.removeItem(key);
  }

  function drop() {
    localStorage.clear();
  }
  
  return {
    put: put,
    get: get,
    erase: erase,
    drop: drop
  };
})(window);
