'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(false);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    template: require('../views/home.html')
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;