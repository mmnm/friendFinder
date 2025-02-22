angular.module('app', [
  'app.facebook',
  'app.home',
  'app.map',
  'app.maker',
  'app.streetview',
  'app.services',
  'ui.router',
  'ngMap'
])

.config( function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('/', {
      redirectTo: '/home'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    .state('facebook', {
      url: '/facebook',
      templateUrl: 'app/facebook/facebook.html',
      controller: 'FacebookController'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController'
    })
    .state('manageRoom', {
      url: '/manageRoom',
      templateUrl: 'app/manageRoom/manageRoom.html',
      controller: 'ManageRoomController'
    })
    .state('streetView', {
      url: '/streetView',
      templateUrl: 'app/streetView/streetView.html',
      controller: 'StreetViewController'
    })
    .state('logout', {
      url: '/logout',
      redirectTo: '/home'
    });
  
});
