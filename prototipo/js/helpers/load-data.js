var loadData = (function(window, undefined) {
  function init() {
    var appLS = storage.get('appLS') || {};
    
    storage.put('appLS', appLS);
  }

  return {
    init: init
  };
})(window);