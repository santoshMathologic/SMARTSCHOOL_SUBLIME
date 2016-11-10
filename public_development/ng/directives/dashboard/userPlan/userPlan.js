angular.module('smartWebApp')
    .directive('userPlan', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/userPlan/userPlan.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            $scope.string = $state.current.name;
            $scope.string = $scope.string.replaceParentHeader('.', ' > ');
            $scope.title = $scope.string;
            //var res = $scope.string.match(/>/g);
            //$scope.string =  $scope.string.split(">");
            //var strfull = [];

             //for(var i = 0;i<$scope.string.length;i++){
               //         strfull.push($scope.string[i].concat(res[0]));
             //}
           //$scope.$parent.title  = strfull;
              
                 //$scope.$parent.title = $scope.string[0].concat(res[0])+$scope.string[$scope.string.length-1];
                            console.log("DASDAS");
                
            }

        };
    }]);