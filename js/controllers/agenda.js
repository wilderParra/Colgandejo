app.controller('AgendaController', function($scope, Eventos) {
  $scope.Eventos = [];

  $scope.getAll = function() {
    Eventos.getAll()
    .then(function(Eventos) {
      $scope.Eventos = Eventos;
    }, function(error) {
      console.log(error);
    })
  };
  $scope.getAll();

    $scope.getId = function(event) {
    $scope.evento = event.target.getAttribute('data-evento');
    sessionStorage['evento'] =  $scope.evento;
    console.log( sessionStorage['evento']);
    window.location="#/evento";
  }
  
});