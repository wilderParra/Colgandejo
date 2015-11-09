app.controller('AgendaController', function($scope, Eventos) {
  $scope.Eventos = [];

  $scope.getAll = function() {
    Eventos.getAll()
    .then(function(Eventos) {
      $scope.Eventos = Eventos;
      console.log($scope.Eventos);
    }, function(error) {
      console.log(error);
    })
  };
  $scope.getAll();
});