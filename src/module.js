(function(){
  'use strict';
angular.module('myApp',['ui.router'])
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'templates/home.html'
    })
    .state('regular',{
      url:'/regular',
      templateUrl:'templates/regular.html',
      controller:'regularController'
    })
    .state('allInvoices',{
      url:'/allInvoices',
      templateUrl:'templates/allInvoices.html',
      controller:'allInvoicesController'
    })
    .state('view',{
      url:'/view',
      templateUrl:'templates/view.html',
      controller:'viewController'
    })
    .state('premium',{
      url:'/premium',
      templateUrl:'templates/premium.html',
      controller:'premiumController'
    })
    .state('info',{
      url:'/info',
      templateUrl:'templates/info.html'
    })
}


})();
