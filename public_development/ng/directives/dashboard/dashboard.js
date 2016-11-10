angular.module('smartWebApp')
    .directive('dashboard', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
              
                
            }

        };
    }]);