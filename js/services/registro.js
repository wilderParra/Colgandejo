app.factory('Registro', function($q, $rootScope) {
  var User = {

    user: {},

    registro: function(usuario) {
      var defer = $q.defer();
      var user = new Parse.User();
      user.set("username", usuario.username);
      user.set("password", usuario.password);
      user.set("email", usuario.email);

      // other fields can be set just like with Parse.Object
      user.set("name", usuario.name);

      user.set('lastname', usuario.lastname);

      user.signUp(null, {
        success: function(result) {
          defer.resolve(result);
        },
        error: function(loggedUser, error) {
          // Show the error message somewhere and let the user try again.
          defer.reject(error);
        }
      });
      return defer.promise;
    },

    login: function(usuario) {
      var defer = $q.defer();

      Parse.User.logIn(usuario.username, usuario.password, {
        success: function(result) {
          // Do stuff after successful login.
          defer.resolve(result);

        },
        error: function(loggedUser, error) {
          // The login failed. Check error to see why.
          defer.reject(error);

        }
      });
      return defer.promise;
    },

    resetPassword: function(ususario) {
      Parse.User.requestPasswordReset(usuario.email, {
        success: function() {
        // Password reset request was sent successfully
        },
        error: function(error) {
          // Show the error message somewhere
          alert("Error: " + error.code + " " + error.message);
        }
      });
    },

    logout: function() {
      console.log("asdf");
      Parse.User.logOut();
      $rootScope.sessionUser = null;
    },

    setUser: function(user)
    {
      $rootScope.sessionUser = user;
    }

  };

  return User;
});