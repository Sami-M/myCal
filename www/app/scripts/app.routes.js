(function() {
  'use strict';

  angular.module('myCalApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/home');
      // routes
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'scripts/features/home/home.html',
          controller: 'HomeCtrl',
          authenticate : false
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'scripts/features/sign-up/signup.html',
          controller: 'SignupCtrl',
          authenticate : false
        })
    }]);
}());
