var app = angular.module('app', [
    'ngRoute',
    'ngAnimate'
  ])
  .run(function($rootScope) {
    Parse.initialize("BIl6iLEAiGIIpJ2Eiw7mFGCP0DjvKGzLuO9KgjGR", "zn8I3dbJoZUaECsgnRuZSDNjGczThfNaTDQGYjFV");
    $rootScope.sessionUser = Parse.User.current();
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html',  
      })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroController',
        resolve: {
          isAuthed: function($rootScope, $location) {
            if($rootScope.sessionUser != null)
            {
              $location.path("/agenda");
            }
          }
        }
      })
      .when('/iniciarsesion', {
        templateUrl: 'views/iniciarsesion.html',
        controller: 'InicioSesionController',
        resolve: {
          isAuthed: function($rootScope, $location) {
            if($rootScope.sessionUser != null)
            {
              $location.path("/agenda");
            }
          }
        }
      })

      .when('/agenda', {
        templateUrl: 'views/agenda.html',
        controller: 'AgendaController'

      })
      .when('/eventosdestacados', {
        templateUrl: 'views/eventosdestacados.html',

      })
      .when('/crearevento', {
        templateUrl: 'views/crearevento.html',
      })
      .when('/evento', {
        templateUrl: 'views/evento.html',
      })
      .otherwise({
        redirectTo: '/'
      })
  });