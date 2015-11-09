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
    }
  });

  Object.defineProperty(Evento.prototype, "Nombre", {

    get: function() {
      return this.get("Nombre");
    },
    set: function(value) {
      this.set("Nombre", value);
    }
  });

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
    
  