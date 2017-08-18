var orm = (function(window, undefined) {
  // Devuelve una lista con todos los eventos
  // que se encuentran en la BD, activos, inactivos, etc
  // Para listas de Administrador
  function findEvents() {
    var events = [];
    var request = $.ajax({
      url: 'services/listar_eventos.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {}      
    });

    request.done(function(data){
      events = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return events;
  }

  // Devuelve la lista de proximos eventos del alumno
  // fecha mayor a hoy
  function findNextActiveEventsUser(userId) {
    var events = [];
    var request = $.ajax({
      url: 'services/listar_proximos_eventos_por_alumno.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'userId': userId
      }      
    });

    request.done(function(data){
      events = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return events;
  }

  // Devuelve lista de eventos en los que
  // ha participado un Alumno
  function findPastEventsUser(userId) {
    var events = [];
    var request = $.ajax({
      url: 'services/listar_eventos_pasados_por_alumno.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'userId': userId
      }      
    });

    request.done(function(data){
      events = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return events;
  }

  function findPastEvents() {
    var events = [];
    var request = $.ajax({
      url: 'services/listar_eventos_pasados.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {}      
    });

    request.done(function(data){
      events = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return events;
  }

  function findNextActiveEvents() {
    var events = [];
    var request = $.ajax({
      url: 'services/listar_proximos_eventos_publicados.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {}      
    });

    request.done(function(data){
      events = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return events;
  }

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

  function findEventOrgs(peventId) {
    var catsData = [];
    var request = $.ajax({
      url: 'services/buscar_organizaciones_activas_por_evento.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'idEvento': peventId
      }
    });

    request.done(function(data){
      catsData = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    });

    return catsData;
  }

  function findEventCategories(peventId) {
    var catsData = [];
    var request = $.ajax({
      url: 'services/buscar_categorias_activas_por_evento.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'idEvento': peventId
      }      
    });

    request.done(function(data){
      catsData = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return catsData;
  }

  // Devuelve id de categorias (edad y peso)
  // y la descripcion para un alumno registrado en 
  // un evento.
  function findUserEventCategory(peventId, puserId) {
    var catsData = [];
    var request = $.ajax({
      url: 'services/buscar_desc_categorias_x_alumno_evento.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'idEvento': peventId,
        'idUser': puserId
      }      
    });

    request.done(function(data){
      catsData = data;
    });

    request.fail(function(){
      console.log('Conexion error');
    }); 

    return catsData;
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

  function findAcademyById(academyId) {
    var academySel = [];
    var request = $.ajax({
        url: 'services/buscar_academia_por_id.php',
        dataType: 'json',
        async: false,
        method: 'get',
        data: {
          'idAcademy': academyId
        }
    });

    request.done(function(data) {
      academySel = data;
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    });

    return academySel[0];
  }

  function findAcademies() {
    var academiesList = [];
    var request = $.ajax({
      url: 'services/listar_academias.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data:{}
    });

    request.done(function(datos) {
      academiesList = datos;
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    })

    return academiesList;
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

  function findActiveStudentsByAcademyName(academyName) {
    var studentsList = [];
    var request = $.ajax({
      url: 'services/listar_alumnos_activos_por_nombre_academia.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'nombre_academia': academyName
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

  function findActiveStudentsByAcademy(id) {
    var studentsList = [];
    var request = $.ajax({
      url: 'services/listar_alumnos_activos_por_academia.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'id': id
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

  // Retorna la informacion de usuarios administrativos
  // ya sea, Administrador o Asistente.
  // Recibe el ID, retona nombre, apellidos y correo electrónico
  function findAdminUserById(pId) {
    var userData = [];
    var request = $.ajax({
      url: 'services/buscar_administrador_por_id.php',
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

    return userData[0];
  }

  // Devuelve la lista de alumnos inscritos
  // en un evento
  function findStudentsByEvent(eventId) {
    var userData = [];
    var request = $.ajax({
      url: 'services/listar_alumnos_inscritos_en_evento.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data: {
        'eventId': eventId
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

    return userData[0];
  }

  function findVenueById(placeId) {
    var venueSel = [];
    var request = $.ajax({
        url: 'services/buscar_lugar_por_id.php',
        dataType: 'json',
        async: false,
        method: 'get',
        data: {
          'placeId': placeId
        }
    });

    request.done(function(data) {
      venueSel = data;
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    });

    return venueSel[0];
  }

  function findVenues() {
    var placesList = [];
    var request = $.ajax({
      url: 'services/listar_lugares.php',
      dataType: 'json',
      async: false,
      method: 'get',
      data:{}
    });

    request.done(function(data) {

      placesList = data;
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {

      console.log(errorThrown);
    })

    return placesList;
  }

  function findActiveVenues() {
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

  function findLastEvent() {
    var eventId;
    var request = $.ajax({
      url: 'services/buscar_ultimo_evento_registrado.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {}
    });

    request.done(function(data) {
      eventId = data;
    }).fail(function() {
      console.log('[findOrgs] Error de conexion');
    });

    return eventId;
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
        }
    });

    request.done(function(data) {
      assistSel = data;
    }).fail(function() {
      console.log('[findAssist] Error de conexion');
    });

    return assistSel[0];
  }

  function findEventoPorAlumno(idEvento, idUsuario) {
    var userEventData = [];
    var request  = $.ajax({
      url: 'services/buscar_evento_por_alumno.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'idEvento': idEvento,
        'idUsuario': idUsuario
      }
    });

    request.done(function(data) {
      userEventData = data;

    }).fail(function() {
      console.log('Error de conexion');
    });
   
    return userEventData;
  }

  function getAlumnByCatByEvent(pidCat, peventId) {
    var fighters = [];
    var request  = $.ajax({
      url: 'services/listar_alumnos_x_categoria_evento.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'idCat': pidCat,
        'eventId': peventId
      }
    });
    request.done(function(data) {
      fighters = data;

    }).fail(function() {
      console.log('Error de conexion');
    });
   
    return fighters;
  }

  function getAlumnByBeltByEvent(pcatId, peventId, pbelt) {
    var fighters = [];
    var request  = $.ajax({
      url: 'services/listar_alumnos_x_cinta_evento.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'cat': pcatId,
        'eventId': peventId,
        'belt': pbelt
      }
    });
    request.done(function(data) {
      fighters = data;

    }).fail(function() {
      console.log('Error de conexion');
    });
   
    return fighters;
  }

  function getCurrentScoreByAlumnByEvent(peventId, pidAlumn) {
    var score;

    var request  = $.ajax({
      url: 'services/puntaje_actual_competidor_evento.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'eventId': peventId,
        'idAlumn': pidAlumn
      }
    });

    request.done(function(data) {
      score = data;

    }).fail(function() {
      console.log('Error de conexion');
    });
   
    return score;
  }

  function getWeightCategoryByAlumByEvent(peventId,palumnId) {
    var categories = [];
    var request  = $.ajax({
      url: 'services/buscar_categoria_x_peso_x_alumno.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'eventId': peventId,
        'alumnId': palumnId
      }
    });

    request.done(function(data) {
      categories = data;

    }).fail(function() {
      console.log('Error de conexion');
    });
   
    return categories;
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

  function registerEvent(eventData){
    var request = $.ajax({
        url: 'services/registrar_evento.php',
        dataType: 'json',
        async: false,
        method: 'POST',
        data: {
          'name': eventData[0],
          'startDate': eventData[1],
          'finalDate': eventData[2],
          'idPlace': eventData[3],
          'availableTickets': eventData[4],
          'priceTickets': eventData[5],
          'eventType': eventData[6],
          'registrationPrice': eventData[7],
          'weighingDate': eventData[8],
          'categoriesSelected': JSON.stringify(eventData[9]),
          'guest': eventData[10],
          'organizationList': JSON.stringify(eventData[11]),
          'sponsorId': eventData[12],
          'productId': eventData[13],
          'sponsorshipType': eventData[14],
          'sponsorshipDesc': eventData[15],
          'sponsorValue': eventData[16],
          'isPublished': eventData[17],
          'maxRegistDate': eventData[18],
          'venueCost': eventData[19],
          'orgBenefited': eventData[20]
        }
    });

    request.done(function () {
      console.log('Datos guardados');
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    });
  }

  function registerExpense(cost, eventId) {
    var request = $.ajax({
      url: 'services/registrar_gasto_evento.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'gasto': cost,
        'eventId': eventId.ultimo_evento
      }
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

  function registrarProf(profData) {
    var request = $.ajax({
        url: 'services/registrar_profesor.php',
        dataType: 'json',
        async: false,
        method: 'POST',
        data: {
          'pPrimer_nombre': profData.name,
          'pSegundo_nombre': profData.name2,
          'pPrimer_apeliido': profData.lastname,
          'pSegundo_apellido': profData.lastname2,
          'pfecha_nacimiento': profData.bday,
          'pedad': profData.age,
          'pCorreo': profData.email,
          'pgenero': profData.genero,
          'ptelefono': profData.phone,
          'pIdentificacion': profData.id
        }
    });

    request.done(function(data) {

    }).fail(function() {
      console.log('[registrarProf] Error de conexion');
    });
  }

  function registrarProfTblProfesor(profData,pAcademyID) {
    var request = $.ajax({
        url: 'services/registrar_profesor_tbl_profesor.php',
        dataType: 'json',
        async: false,
        method: 'POST',
        data: {
          'pid_profesor': profData.id,
          'pnombre_cinturon': profData.beltGrade,
          'pid_academia': pAcademyID
        }
    });

    request.done(function(data) {

    }).fail(function() {
      console.log('[registrarProfTblProfesor] Error de conexion');
    });
  }

  function registerPlace(pPlace) {
    var request = $.ajax({
      url: 'services/registrar_lugar.php',
      type: 'post',
      dataType: 'json',
      async: false,
      data: {
        'placeName': pPlace.placeName,
        'placeTel': pPlace.placeTel,
        'placeSchedule': pPlace.placeSchedule,
        'placeCap': pPlace.placeCap,
        'placeAdress': pPlace.placeAdress,
        'placeLatitude': pPlace.placeLatitude,
        'placeLongitude': pPlace.placeLongitude
      }
    });

    request.done(function(){
      console.log('Registrado correctamente');
    })

    request.fail(function(jqXHR, textStatus, errorThrown){

      console.log(errorThrown);
    })
  }

  function registerAcademy(pAcademy) {
    var request = $.ajax({
      url: 'services/registrar_academia.php',
      type: 'post',
      dataType: 'json',
      async: false,
      data: {
        'academyName': pAcademy.academyName,
        'academyTel': pAcademy.academyTel,
        'academyEmail': pAcademy.academyEmail,
        'attendantName': pAcademy.attendantName,
        'attendantLastName': pAcademy.attendantLastName,
        'attendantSecLastName': pAcademy.attendantSecLastName,
        'academyAddress': pAcademy.academyAddress,
        'placeLatitude': pAcademy.placeLatitude,
        'placeLongitude': pAcademy.placeLongitude
      }
    });

    request.done(function() {
      console.log('Registrado correctamente');
    })

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    })
  }

  function unsubUserFromEvent(userData) {
    var request = $.ajax({
      url: 'services/desinscribir_alumno_evento.php',
      type: 'post',
      dataType: 'json',
      async: false,
      data: {
        'id_alumno': userData.id_alumno,
        'id_evento': userData.id_evento,
        'desc': userData.desc
      }
    });

    request.done(function() {
      console.log('Registrado correctamente');
    })

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    })
  }

  function updateAthleteEvent(userData) {
    var request = $.ajax({
      url: 'services/actualizar_datos_alumno_en_evento.php',
      type: 'post',
      dataType: 'json',
      async: false,
      data: {
        'id_alumno': userData.id_alumno,
        'id_categoria': userData.id_categoria,
        'id_peso': userData.id_peso,
        'id_evento': userData.id_evento,
        'id_academia': userData.id_academia,
        'estado': userData.estado
      }
    });

    request.done(function() {
      console.log('Registrado correctamente');
    })

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    })
  }

  function registerAthleteEvent(userData) {
    var request = $.ajax({
      url: 'services/registrar_alumno_en_evento.php',
      type: 'post',
      dataType: 'json',
      async: false,
      data: {
        'id_alumno': userData.id_alumno,
        'id_categoria': userData.id_categoria,
        'id_peso': userData.id_peso,
        'id_evento': userData.id_evento,
        'id_academia': userData.id_academia,
        'estado': userData.estado
      }
    });

    request.done(function() {
      console.log('Registrado correctamente');
    })

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    })
  }

  function registerFighterWeight(pfighterId,peventId,pweight,psatus) {
    var request = $.ajax({
      url: 'services/registrar_pesaje_competidor.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'eventId': peventId,
        'fighterId': pfighterId,
        'weight': pweight,
        'status' : psatus
      }
    })
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

  function updateUserPassword(userId, newPassword) {
    var request = $.ajax({
        url: 'services/actualizar_contrasena.php',
        dataType: 'json',
        async: false,
        method: 'POST',
        data: {
          'userId': userId,
          'newPassword': newPassword
        }
    });

    request.done(function(data) {

    }).fail(function() {
    });
  }

  function registerAlumnResult(peventId,palumnInfo) {
    var currentScore = getCurrentScoreByAlumnByEvent(peventId, 
      palumnInfo.id);

    if (parseInt(palumnInfo.position) === 1) {
      updateAlumWonTournaments(palumnInfo.id); 
    }

    var score = currentScore[0].puntaje;
    var newScore = (parseInt(score) + parseInt(palumnInfo.score));
    updateAlumnScore(peventId, palumnInfo.id, newScore);

    var request = $.ajax({
      url: 'services/registrar_resultado_alumno_evento.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'eventId': peventId,
        'fighterId': palumnInfo.id,
        'position': palumnInfo.position,
      }
    })
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

  function updateAcademy(academyData, academyId) {
    var request = $.ajax({
      url: 'services/actualizar_academia.php',
      dataType: 'json',
      async: false,
      method: 'POST',
      data: {
        'academyName': academyData.academyName,
        'academyTel': academyData.academyTel,
        'academyEmail': academyData.academyEmail,
        'attendantName': academyData.attendantName,
        'attendantLastName': academyData.attendantLastName,
        'attendantSecLastName': academyData.attendantSecLastName,
        'academyAddress': academyData.academyAddress,
        'placeLatitude': academyData.placeLatitude,
        'placeLongitude': academyData.placeLongitude,
        'status': academyData.status,
        'academyId': academyId
      }
    });

    request.done(function(data) {
      console.log('Academia actualizada correctamente');
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    });
  }

  function updateVenue(pDataPlace,placeId){
    var request = $.ajax({
      url: 'services/actualizar_lugar.php',
      dataType: 'json',
      async: false,
      method: 'POST',
      data: {
        'namePlace': pDataPlace.namePlace,
        'telPlace': pDataPlace.telPlace,
        'schedule': pDataPlace.schedule,
        'capPlace': pDataPlace.capPlace,
        'adressPlace': pDataPlace.adressPlace,
        'placeLatitude': pDataPlace.placeLatitude,
        'placeLongitude': pDataPlace.placeLongitude,
        'status': pDataPlace.status,
        'placeId': placeId
      }
    });

    request.done(function(data) {
      console.log('Academia actualizada correctamente');
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
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
        'idEvento': pdata.eventId,
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

  function updateAlumnScore(peventId, palumnId, pscore) {
    var request = $.ajax({
      url: 'services/actualizar_puntaje_alumno_evento.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'eventId': peventId,
        'fighterId': palumnId,
        'score' : pscore
      }
    })
  }

  function updateAlumWonTournaments(palumnId) {
    var currenAmout = getAlumnWonTournaments(palumnId);
    var newAmout = (parseInt(currenAmout[0].torneos_ganados) + 1);
    var b = newAmout;

    var request = $.ajax({
      url: 'services/actualizar_torneos_ganados_alumno.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data: {
        'fighterId': palumnId,
        'amount' : newAmout
      }
    })

  }

  function getAlumnWonTournaments(palumnId) {
    var wonTournaments;

    var request  = $.ajax({
      url: 'services/torneos_ganados_competidor.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'idAlumn': palumnId
      }
    });

    request.done(function(data) {
      wonTournaments = data;

    }).fail(function() {
      console.log('Error de conexion');
    });
   
    return wonTournaments;
  }

  function updateUserInfo(data) {
    var request  = $.ajax({
      url: 'services/actualizar_info_usuario.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'id': data.identification,
        'firstName': data.firstName,
        'secondName': data.secondName,
        'firstLastName': data.firstLastName,
        'secondLastName': data.secondLastName,
        'email': data.email
      }
    });
  }

  function updateAlumInfo(pweight,pheight,pidAlumn) {
    var request  = $.ajax({
      url: 'services/actualizar_info_alumno.php',
      dataType: 'json',
      async: false,
      method: 'Get',
      data: {
        'id': pidAlumn,
        'weight': pweight,
        'height': pheight
      }
    });
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


  function findLogguedUser() {
    var appLS = storage.get('appLS') || {};
    var logguedInUser = appLS.logguedInUser || {};

    return logguedInUser;
  }
  
  return {
    findAcademies: findAcademies,
    findAcademyById: findAcademyById,
    findAdminUserById: findAdminUserById,
    findEvents: findEvents,
    findNextActiveEvents: findNextActiveEvents,
    findNextActiveEventsUser: findNextActiveEventsUser,
    findEventbyId: findEventbyId,
    findEventOrgs: findEventOrgs,
    findEventCategories: findEventCategories,
    findEventByName: findEventByName,
    findOrgs: findOrgs,
    findOrgById: findOrgById,
    findActiveAcad: findActiveAcad,
    findActiveOrgs: findActiveOrgs,
    findVenues: findVenues,
    findVenueById: findVenueById,
    findLastEvent: findLastEvent,
    findActiveVenues: findActiveVenues,
    findSponsors: findSponsors,
    findSponsorbyId: findSponsorbyId,
    findSponsorProducts: findSponsorProducts,
    findStudents: findStudents,
    findStudentById: findStudentById,
    findStudentsByEvent: findStudentsByEvent,
    findActiveStudents: findActiveStudents,
    findActiveStudentsByAcademy: findActiveStudentsByAcademy,
    findActiveStudentsByAcademyName: findActiveStudentsByAcademyName,
    findActiveSponsors: findActiveSponsors,
    findAssistById: findAssistById,
    findProfesorById: findProfesorById,
    findEventoPorAlumno: findEventoPorAlumno,
    findLogguedUser: findLogguedUser,
    findUserEventCategory: findUserEventCategory,
    findPastEvents: findPastEvents,
    findPastEventsUser: findPastEventsUser,
    getProductBySponsor: getProductBySponsor,
    getAlumnByCatByEvent: getAlumnByCatByEvent,
    getWeightCategoryByAlumByEvent: getWeightCategoryByAlumByEvent,
    getAlumnByBeltByEvent: getAlumnByBeltByEvent,
    getCurrentScoreByAlumnByEvent: getCurrentScoreByAlumnByEvent,
    modifyTicketsAmount: modifyTicketsAmount,
    registrarOrg: registrarOrg,
    registerEvent: registerEvent,
    registerAcademy: registerAcademy,
    registrarAsist: registrarAsist,
    registrarAsistTblAsistente: registrarAsistTblAsistente,
    registerAthleteEvent: registerAthleteEvent,
    registerSponsor: registerSponsor,
    registerSponsorProducts: registerSponsorProducts,
    registerPlace: registerPlace,
    registrarProf: registrarProf,
    registrarProfTblProfesor: registrarProfTblProfesor,
    registerFighterWeight: registerFighterWeight,
    registerAlumnResult: registerAlumnResult,
    registerExpense: registerExpense,
    saveReserve: saveReserve,
    updateAcademy: updateAcademy,
    updateOrg: updateOrg,
    updateSponsorInfo: updateSponsorInfo,
    updateUserPassword: updateUserPassword,
    updateVenue: updateVenue,
    unsubUserFromEvent: unsubUserFromEvent,
    updateAlumnScore: updateAlumnScore,
    updateAlumWonTournaments: updateAlumWonTournaments,
    updateUserInfo: updateUserInfo,
    updateAlumInfo: updateAlumInfo,
    updateAthleteEvent: updateAthleteEvent,
    getAlumnWonTournaments: getAlumnWonTournaments
  };
})(window);
