(function () {
  'use strict';

  angular.module('myCalApp').run([
    '$rootScope',
    '$state',
    'LoginService',
    function ($rootScope, $state, LoginService) {
      console.log('in run');
      $rootScope.$on("$stateChangeStart",
        function (event, toState, toParams, fromState, fromParams) {
          if (toState.authenticate) {
            var isLoggedInPromise = LoginService.isLoggedIn();
            console.log('checking if logged in');
            isLoggedInPromise.then(function (status) {
              console.log(status);
              if (!status) {
                console.log('User not logged in');
                $state.go('signup');
              }
              else {
                $state.go('calendar');
              }
            });
          }
//                if (toState.authenticate && !LoginService.isLoggedIn()) {
//                    console.log('you aint signed in');
//                    $state.go("signup");
//                    event.preventDefault();
//                }
        });
    }
  ]);

}());
