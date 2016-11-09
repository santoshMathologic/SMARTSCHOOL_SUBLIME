angular.module('smartWebApp')
    .directive('userPlan', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/userPlan/userPlan.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
              
              console.log("DASDAS");
                
            }

        };
    }]);