var orm = (function(window, undefined) {
   function findEventbyId(peventId) {
    var eventInfo = [];

    var request = $.ajax({
      url: 'services/buscar_evento_por_id.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'idEvento': peventId
      }      
    });

    request.done(function(data){
      eventInfo = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return eventInfo;
  }

  function findOrgs() {
    var appOrgListLS = [];
    var request = $.ajax({
        url: 'services/listar_organizaciones.php',
        dataType: 'json',
        async: false,
        method: 'GET',
        data: {}
    });

    request.done(function(data) {
      appOrgListLS = data;
    }).fail(function() {
      console.log('[findOrgs] Error de conexion');
    });

    return appOrgListLS;
  }

  function findActiveOrgs() {
    var appOrgListLS = findOrgs();
    var orgSel = appOrgListLS.filter(function(org) {
      return org.estado == true;
    });
    
    return orgSel;
  }

  function findOrgById(orgId) {
    var orgSel = [];
    var request = $.ajax({
        url: 'services/buscar_organizacion_por_id.php',
        dataType: 'json',
        async: false,
        method: 'get',
        data: {
          'idOrg': orgId
        }
    });

    request.done(function(data) {
      orgSel = data;
    }).fail(function() {
      console.log('[findOrgs] Error de conexion');
    });

    return orgSel[0];
  }

  function findSponsors() {
    var sponsorList = [];

    var request = $.ajax({
      url: 'services/listar_patrocinadores.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {

      }
    })

    request.done(function(data){
      sponsorList = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    });

    return sponsorList;
  }

  function findSponsorbyId(idSponsor) {
    var sponsorInfo = [];

     var request = $.ajax({
      url: 'services/buscar_patrocinador_por_id.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'idSponsor': idSponsor
      }
    })

    request.done(function(data){
      sponsorInfo = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    });

    return sponsorInfo;
  }

  function findActiveAcad() {
    var academyList = [];

    var request = $.ajax({
      url: 'services/listar_academias_activas.php',
      dataType: 'json',
      async: false,
      method: 'GET',
      data: {}
    })

    request.done(function(data){
      academyList = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    });

    return academyList;
  }

  function findStudents() {
    var studentsList = [];
    var request = $.ajax({
      url: 'services/listar_alumnos.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {

      }
    })

    request.done(function(data){
      studentsList = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    });

    return studentsList;
  }

  function findActiveStudents() {
    var studentsList = [];
    var request = $.ajax({
      url: 'services/listar_alumnos_activos.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {

      }
    })

    request.done(function(data){
      studentsList = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    });

    return studentsList;
  }

  function findActiveStudentsByAcademy(pacademyName) {
    var studentsList = [];
    var request = $.ajax({
      url: 'services/listar_alumnos_activos_por_academia.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'nombre_academia': pacademyName
      }
    })

    request.done(function(data){
      studentsList = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    });

    return studentsList;
  }

  function findStudentById(pId) {
    var userData = [];
    var request = $.ajax({
      url: 'services/buscar_alumno_por_id.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'id_alumno': pId
      }
    })

    request.done(function(data){
      userData = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    });

    return userData;
  }

  function findProfesorById(pId) {
    var userData = [];
    var request = $.ajax({
      url: 'services/buscar_profesor_por_id.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'id_profesor': pId
      }
    })

    request.done(function(data){
      userData = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    });

    return userData;
  }

  function findVenue(peventId) {
    var venueInfo = [];

    var request = $.ajax({
      url: 'services/buscar_lugar.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'idEvento': peventId
      }      
    });

    request.done(function(data){
      venueInfo = data;
    })

    request.fail(function(){
      console.log('Conexion error');
    }) 

    return venueInfo;
  }

  function findVenues() {
    var appPlacesListLS = [];
    var request = $.ajax({
        url: 'services/listar_lugares_habilitados.php',
        dataType: 'json',
        async: false,
        method: 'GET',
        data: {}
    });

    request.done(function(data) {
      appPlacesListLS = data;
    }).fail(function() {
      console.log('[findOrgs] Error de conexion');
    });

    return appPlacesListLS;
  }

  function findAssistById(assistId) {
    var assistSel = [];
    var request = $.ajax({
        url: 'services/buscar_asistente_por_id.php',
        dataType: 'json',
        async: false,
        method: 'get',
        data: {
          'idAssist': assistId
          //se paso al PA php de buscar_asistente
        }
    });

    request.done(function(data) {
      assistSel = data;
    }).fail(function() {
      console.log('[findAssist] Error de conexion');
    });

    return assistSel[0];
  }

  function registrarOrg(orgData) {
    var request = $.ajax({
        url: 'services/registrar_organizacion.php',
        dataType: 'json',
        async: false,
        method: 'POST',
        data: {
          'pId': orgData.codeNumber,
          'pNombre': orgData.organization,
          'pTipo': orgData.organizationType,
          'pDesc': orgData.description
        }
    });

    request.done(function(data) {

    }).fail(function() {
      console.log('[registrarOrg] Error de conexion');
    });
  }

  function registerSponsor(pInfoSponsor) {
    var request = $.ajax({
      url: 'services/registrar_patrocinador.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'id': pInfoSponsor.id,
        'name': pInfoSponsor.name,
        'legalName': pInfoSponsor.businessName,
        'imgName': pInfoSponsor.logoSrc
      }
    })
  }

  function registerSponsorProducts(pproductsInfo) {
    var request = $.ajax({
      url: 'services/registrar_productos_patrocinador.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'productName': pproductsInfo.prodName,
        'imgName': pproductsInfo.imgUrl,
        'idOwner': pproductsInfo.idOwner
      }
    })
  }

  function registrarAsist(assitData) {
    var request = $.ajax({
        url: 'services/registrar_asistente.php',
        dataType: 'json',
        async: false,
        method: 'POST',
        data: {
          'pPrimer_nombre': assitData.name,
          'pSegundo_nombre': assitData.name2,
          'pPrimer_apeliido': assitData.lastname,
          'pSegundo_apellido': assitData.lastname2,
          'pCorreo': assitData.email,
          'pIdentificacion': assitData.id
        }
    });

    request.done(function(data) {

    }).fail(function() {
      console.log('[registrarAsist] Error de conexion');
    });
  }

  function registrarAsistTblAsistente(assitData) {
    var request = $.ajax({
        url: 'services/registrar_asistente_tbl_asistente.php',
        dataType: 'json',
        async: false,
        method: 'POST',
        data: {
          'pIdentificacion': assitData.id
        }
    });

    request.done(function(data) {

    }).fail(function() {
      console.log('[registrarAsistTblAsistente] Error de conexion');
    });
  }

  function updateSponsorInfo(pSponsorInfo) {
    var request = $.ajax({
      url: 'services/actualizar_patrocinador.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'id': pSponsorInfo.id,
        'name': pSponsorInfo.name,
        'legalName': pSponsorInfo.businessName,
        'imgName': pSponsorInfo.logoSrc,
        'status' : pSponsorInfo.status
      }
    });

    request.done(function(data) {

    }).fail(function() {
      console.log('Conexion error');
    });
  }

  function updateOrg(orgData) {
    var request = $.ajax({
        url: 'services/actualizar_organizacion.php',
        dataType: 'json',
        async: false,
        method: 'POST',
        data: {
          'pId': orgData.codeNumber,
          'pNombre': orgData.organization,
          'pTipo': orgData.organizationType,
          'pDesc': orgData.description,
          'pEstado': orgData.status
        }
    });

    request.done(function(data) {

    }).fail(function() {
      console.log('[registrarOrg] Error de conexion');
    });
  }

  function saveReserve(pdata) {
    var request = $.ajax({
      url: 'services/registrar_reserva_entradas.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'idClient': pdata.id,
        'name': pdata.name,
        'firstLastName': pdata.lastName,
        'secondLastName': pdata.secLastName,
        'email': pdata.email,
        'ticketsAmount': pdata.amountTickets
      }
    })
  }

  function modifyTicketsAmount(peventId, psoldTickets) {
    var request = $.ajax({
      url: 'services/modificar_entradas_vendidas_evento.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'eventId': peventId,
        'soldTickets': psoldTickets
      }
    })
  }

  function getProductBySponsor(pIdPatrocinador) {
    var products = [];
    var request  = $.ajax({
      url: 'services/listar_producto_por_patrocinador.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'pIdPatrocinador': pIdPatrocinador
      }
    });
    request.done(function(data) {
      products=data;

    }).fail(function() {
      console.log('Error de conexion');
    });
   
    return products;
  }

  // =========  Linea 25 para abajo no usar mas =============
  // ToDo: borrar las funciones cuando las consultas a BD se vayan completando.
  function findEventByName(name) {  
    var appLS = storage.get('appLS');
    var eventsLS = appLS.events || [];
    var eventExist;

    eventExist = eventsLS.find(function(event) {
      return event.eventName.toLowerCase() === name.toLowerCase();
    });

    return eventExist;
  }

  function findActiveVenues() {
    var venuesListLS = findVenues();

    var venuesList = venuesListLS.filter(function(venue) {
      return venue.status === true;
    });

    return venuesList;
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
    findOrgById: findOrgById,
    findActiveAcad: findActiveAcad,
    findActiveOrgs: findActiveOrgs,
    findVenues: findVenues,
    findVenue: findVenue,
    findActiveVenues: findActiveVenues,
    findSponsors: findSponsors,
    findSponsorbyId: findSponsorbyId,
    findSponsorProducts: findSponsorProducts,
    findStudents: findStudents,
    findStudentById: findStudentById,
    findActiveStudents: findActiveStudents,
    findActiveStudentsByAcademy: findActiveStudentsByAcademy,
    findActiveSponsors: findActiveSponsors,
    findActiveProfesor: findActiveProfesor,
    findAssistById: findAssistById,
    findProfesorById: findProfesorById,
    findLogguedUser: findLogguedUser,
    getProductBySponsor: getProductBySponsor,
    modifyTicketsAmount: modifyTicketsAmount,
    registrarOrg: registrarOrg,
    registrarAsist: registrarAsist,
    registrarAsistTblAsistente: registrarAsistTblAsistente,
    registerSponsor: registerSponsor,
    registerSponsorProducts: registerSponsorProducts,
    saveReserve: saveReserve,
    updateOrg: updateOrg,
    updateSponsorInfo: updateSponsorInfo
  };
})(window);
