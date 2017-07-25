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
    });

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
    });

    return venuesList;
  }

  function findSponsors() {
    var appSponsorsListLS = storage.get('sponsorListLS') || [];

    return appSponsorsListLS;
  }

  function findSponsorbyId(id) {
    var sponsors = findSponsors();
    
    var sponsorSel = sponsors.filter(function(sponsor) {
      return sponsor.id === id;
    });
    
    return sponsorSel;
  }

  function findActiveSponsors() {
    var sponsorsListLS = findSponsors();

    var sponsorsList = sponsorsListLS.filter(function(sponsor) {
      return sponsor.status === true;
    });

    return sponsorsList;
  }

  function findSponsorProducts(sponsorId) {
    var sponsor = findSponsorbyId(sponsorId);
    var prods = [];

    sponsor[0].sponsorProds.forEach(function(prod, index) {
      prods.push(prod[index][0]);
    });
    
    return prods;
  }

  function findProfesor() {
    var appProfesirListLS = storage.get('profListLS') || [];

    return appProfesirListLS;
  }

  function findActiveProfesor() {
    var profesorListLS = findProfesor();

    var profesorList = profesorListLS.filter(function(user) {
      return user.status === true;
    });

    return profesorList;
  }

  function findProfesorById(id) {
    var profesores = findProfesor();
    
    var profSel = profesores.filter(function(user) {
      return user.id === id;
    });
    
    return profSel[0];
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
    findSponsorbyId: findSponsorbyId,
    findSponsorProducts: findSponsorProducts,
    findActiveSponsors: findActiveSponsors,
    findActiveProfesor: findActiveProfesor,
    findProfesorById: findProfesorById,
    findLogguedUser: findLogguedUser
  };
})(window);
