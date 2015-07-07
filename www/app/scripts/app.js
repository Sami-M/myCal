(function() {
  'use strict';

  angular.module('myCalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);




  //Load controller
  angular.module('myCalApp')

}());
//'use strict';
//
///**
// * @ngdoc overview
// * @name myCalApp
// * @description
// * # myCalApp
// *
// * Main module of the application.
// */
//angular
//  .module('myCalApp', [
//    'ngAnimate',
//    'ngAria',
//    'ngCookies',
//    'ngMessages',
//    'ngResource',
//    'ngRoute',
//    'ngSanitize',
//    'ngTouch',
//    'ui.router'
//  ])
//
//  .config(function($stateProvider,$urlRouterProvider, $locationProvider) {
//    $locationProvider.html5Mode(true);
//    $urlRouterProvider.otherwise("home");
//
//    $stateProvider
//      .state('home', {
//        url: '/',
//        templateUrl: 'components/home/home.html',
//        controller: 'HomeCtrl',
//        authenticate: false
//      })
//  });
//
//  //.config(function ($routeProvider) {
//  //  $routeProvider
//  //    .when('/', {
//  //      templateUrl: 'scripts/features/home/home.html',
//  //      controller: 'MainCtrl',
//  //      controllerAs: 'main'
//  //    })
//  //    .otherwise({
//  //      redirectTo: '/'
//  //    });
//  //});
