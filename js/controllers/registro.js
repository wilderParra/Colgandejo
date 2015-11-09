app.controller('RegistroController', function($scope, Registro, $location) {
  $scope.user = {};


  $scope.registro = function(user) {
    console.log(user);
    Registro.registro(user)
    .then(function(usuario) {
      console.log("Éxito");
      Registro.setUser(usuario);
      
      $location.path('/agenda');
    }, function(error) {
      console.log('Fracaso')
      console.log(error.code);
      console.log(error.message);
    });
  };

});

app.controller('InicioSesionController', function($scope, Registro, $location) {
  $scope.user = {};

  $scope.login = function(user) {
    console.log(user);
    Registro.login(user)
    .then(function(usuario) {
      console.log("Éxito");
      console.log(usuario.get('userName'));

      $location.path('/agenda');
      console.log(usuario);
      Registro.setUser(usuario);
    }, function(error) {
      console.log('Fracaso')
      console.log(error.code);
      console.log(error.message);
    });
  };

  $scope.logout = function() {
    console.log("qwer");
    Registro.logout();
    $location.path('/');
  }

});