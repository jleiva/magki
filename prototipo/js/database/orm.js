var orm = (function(window, undefined) {
  function findEventbyId(id) {
    var appLS = storage.get('appLS');
    var events = appLS.events;
    var eventData = events[id];
    
    return eventData;
  }

  function findEventByName(name) {
    var appLS = storage.get('appLS');
    var eventsLS = appLS.events || [];
    var eventExist;

    eventExist = eventsLS.find(function(event) {
      return event.eventName.toLowerCase() === name.toLowerCase();
    });

    return eventExist;
  }

  function findOrgs() {
    var appOrgListLS = storage.get('organizationsList') || [];

    return appOrgListLS;
  }

  function findVenues() {
    var appVenuesListLS = storage.get('listaRegistrosPlaceLS') || [];

    return appVenuesListLS;
  }

  function findLogguedUser() {
    var appLS = storage.get('appLS');
    var logguedInUser = appLS.logguedInUser;

    return logguedInUser;
  }

  // Populate SELECT
  // Usage: populateSelect('selectElementId', arrayItems);
  function populateSelect(target, optList, array) {
    if (!target){
      return false;
    }
    else if(array) {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item[1];
        opt.innerHTML = opt.value;
        select.appendChild(opt);
      });
    } else {
      select = document.getElementById(target);

      optList.forEach(function(item) {
        var opt = document.createElement('option');
        opt.value = item.nombreLugar;
        opt.innerHTML = opt.value;
        select.appendChild(opt);
      });
    }
  }
  
  return {
    findEventbyId: findEventbyId,
    findEventByName: findEventByName,
    findOrgs: findOrgs,
    findVenues: findVenues,
    findLogguedUser: findLogguedUser,
    populateSelect: populateSelect
  };
})(window);
