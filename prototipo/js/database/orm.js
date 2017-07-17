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

  function findActiveOrgs() {
    var orgListLS = findOrgs();

    var orgList = orgListLS.filter(function(org) {
      return org.status === true;
    })

    return orgList;
  }

  function findVenues() {
    var appVenuesListLS = storage.get('listaLugaresLS') || [];

    return appVenuesListLS;
  }

  function findActiveVenues() {
    var venuesListLS = findVenues();

    var venuesList = venuesListLS.filter(function(venue) {
      return venue.status === true;
    })

    return venuesList;
  }

  function findSponsors() {
    var appSponsorsListLS = storage.get('sponsorListLS') || [];

    return appSponsorsListLS;
  }

  function findLogguedUser() {
    var appLS = storage.get('appLS') || {};
    var logguedInUser = appLS.logguedInUser || {};

    return logguedInUser;
  }
  
  return {
    findEventbyId: findEventbyId,
    findEventByName: findEventByName,
    findOrgs: findOrgs,
    findActiveOrgs: findActiveOrgs,
    findVenues: findVenues,
    findActiveVenues: findActiveVenues,
    findSponsors: findSponsors,
    findLogguedUser: findLogguedUser
  };
})(window);
