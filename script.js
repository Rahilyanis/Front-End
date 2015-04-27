angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "about.html"
        }
      }
    })
    .state('tabs.addresume', {
      url: "/addresume",
      views: {
        'addresume-tab': {
          templateUrl: "addresume.html"
        }
      }
    });


  $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function ($scope) {
  console.log('HomeTabCtrl');
});
