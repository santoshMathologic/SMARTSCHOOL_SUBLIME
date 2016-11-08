' use strict';

angular.module("smartApp",[
	'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'toaster',
    'ngCookies'
	]).config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){

 
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });
     $urlRouterProvider.otherwise('/dashboard/userPlans');
	
             console.log("in app");

	}]);

