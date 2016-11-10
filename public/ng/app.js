' use strict';

angular.module("smartWebApp",[
	'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'toaster',
    'ngCookies'
	]).factory('TokenInterceptor', function($q, $window,$location) {
    return {
        request: function(config) {
          config.headers = config.headers || {};
          if ($window.sessionStorage.token) {
            config.headers['X-Access-Token'] = $window.sessionStorage.token;
            config.headers['X-Key'] = $window.sessionStorage.user;
            config.headers['Content-Type'] = config.headers['Content-Type'] || "application/json";
          }
          return config || $q.when(config);
        },
     
        response: function(response) {
          if(response.status === 401 || response.status === 403) {
                  $location.path('/login');
              }
          return response || $q.when(response);
        }
      };
    })
.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){

 
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });
     $urlRouterProvider.otherwise('/home/dashboard');
     $stateProvider
     .state('home',{
        url:'/home',
        templateUrl:'ng/directives/home/home.directive.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'smartWebApp',
              files:[
                    'ng/directives/home/home.js',
                   
              ]
            });
          }
        }
      })
      .state('home.dashboard',{
        url:'/dashboard',
        templateUrl:'ng/directives/dashboard/dashboard.directive.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'smartWebApp',
              files:[
              'ng/directives/dashboard/dashboard.js',
              'ng/directives/dashboard/sidebar/sidebar.js',
              'ng/directives/dashboard/header/header.js'
              ]
            });
          }
        }
      })
      .state('home.dashboard.userPlan',{
        url:'/plan',
        templateUrl:'ng/directives/dashboard/userPlan/userPlan.directive.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'smartWebApp',
              files:[
              'ng/directives/dashboard/userPlan/userPlan.js'
              ]
            });
          }
        }
      }).state('home.dashboard.user',{
        url:'/user',
        templateUrl:'ng/directives/dashboard/user/user.directive.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'smartWebApp',
              files:[
              'ng/directives/dashboard/user/user.js'
              ]
            });
          }
        }
      })
      .state('login',{
        url:'/login',
        templateUrl:'ng/directives/login/login.directive.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'smartWebApp',
              files:[
              'ng/directives/login/login.js',
              ]
            });
          }
        }
      });
	
             console.log("in app");

	}]);

