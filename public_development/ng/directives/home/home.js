angular.module('smartWebApp')
    .directive('home', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/home/home.tmpl.html',
            controller: function($scope, $state, $window, $location) {
              
              
          
            }

        };
    }]);