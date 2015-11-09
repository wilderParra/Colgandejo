app.factory('Eventos', function($q, $rootScope) {
  var Evento = Parse.Object.extend('Eventos', {

  }, {
    getAll: function() {
      var defer = $q.defer();
      var query = new Parse.Query(this);
      query.ascending('createdAt');
      query.find({
        success : function(result) {
          defer.resolve(result);
        },
        error : function(error) {
          defer.reject(error);
        }
      });
      return defer.promise;
    },

    // Llamar 1 solo evento
    // Pasarle un id a la función
    // hacer un query en la clase "eventos" con el id
    // devolver el primer evento que encuentre (query.first())
    // entregárselo al controlador. 
    
    // Guardar 1 evento
    // Pasarle un objeto evento a la función
    // Crear el nuevo evento
    // Agregar el id del usuario al pointer del evento
    // Save el nuevo evento. 
    // Agregar el nuevo evento al arreglo de relaciones del usuario
    // Devolver el resultado al controlador. 
    
    // Borrar 1 evento
    // Pasarle el id del evento a la función (o el evento entero)
    // Eliminar el evento
    // Devolver el resultado al controlador. 
    
    // Calificar 1 evento
    // Pasarle la calificación y el id del evento (o el evento entero) a la función
    // Llamar una función de Cloud Code que calcule el promedio con la nueva calificación y lo updatee
    // devolver el resultado al controlador. 
    
    // Comentar 1 evento
    // Pasarle el Comentario a la función
    // Guardar el nuevo comentario y agregar el id del evento como pointer
    // Agregar el id del comentario guardado al arreglo de relaciones de comentarios del evento
    // devolver el resultado al controlador. 
  });

  Object.defineProperty(Evento.prototype, "Nombre", {

    get: function() {
      return this.get("Nombre");
    },
    set: function(value) {
      this.set("Nombre", value);
    }
  });

  // attributes
  // arreglo con atributos 
  // objeto.get('nombreAtributo')
  // 
  // objeto.Descripcion

  Object.defineProperty(Evento.prototype, "Descripcion", {

    get: function() {
      return this.get("Descripcion");
    },
    set: function(value) {
      this.set("Descripcion", value);
    }
  });

  Object.defineProperty(Evento.prototype, "Calificacion", {

    get: function() {
      return this.get("Calificacion");
    },
    set: function(value) {
      this.set("Calificacion", value);
    }
  });
    Object.defineProperty(Evento.prototype, "Imagen", {

    get: function() {
      return this.get("Imagen");
    },
    set: function(value) {
      this.set("Imagen", value);
    }
  });


  return Evento;
});
    
  