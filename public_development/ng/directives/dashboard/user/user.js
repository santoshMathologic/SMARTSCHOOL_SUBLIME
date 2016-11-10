angular.module('smartWebApp')
    .directive('user', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/user/user.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
              
              console.log("DASDAS");
                
            }

        };
    }]);