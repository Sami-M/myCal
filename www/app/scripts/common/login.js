(function () {
  'use strict';

  angular.module('myCalApp').factory('LoginService', [
    '$q',
    '$rootScope',
    'User',
    function ($q, $rootScope, User) {

      $scope.signUp = function signUp(username, password){
        (new User()).$getMe({username: username, password: password})
          .then(function(data) {
            console.log(data);
          })
      };

      $scope.signIn = function signIn(){

      };

      $scope.signOut = function signOut(){

      };

      $scope.me = function me(){

      };

      return {
        signUp: signUp,
        signIn: signIn,
        signOut: signOut,
        me: me
      };
    }]);
}());



//var isLoggedIn = function isLoggedIn() {
//  var deferred = $q.defer();
//  db.getSession(function (err, response) {
//    if (err) {
//      console.log(err);
//      $rootScope.loggedIn = false;
//      deferred.resolve(false);
//    } else if (!response.userCtx.name) {
//      console.log('user not logged in');
//      $rootScope.loggedIn = false;
//      deferred.resolve(false);
//    } else {
//      setLoggedIn(true);
//      $rootScope.loggedIn = true;
//      deferred.resolve(true);
//    }
//  });
//  return deferred.promise;
//};
