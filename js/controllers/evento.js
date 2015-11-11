app.controller('EventoController', function($scope, Eventos, $routeParams) {
  $scope.Eventos = [];
  
  //var id = $routeParams.idEvento;
  	
  $scope.getActual = function() {
    Eventos.getActual()
      .then(function(Eventos) {
        $scope.Eventos = Eventos;
        console.log($scope.Eventos.Nombre);
      }, function(error) {
        console.log(error);
      })
  };
  $scope.getActual();
});