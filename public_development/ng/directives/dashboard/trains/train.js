/*jshint sub:true*/
' use strict';


angular.module('smartWebApp')
    .directive('train', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/trains/train.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
              
              console.log("DASDAS");
              $scope.trainsList = [];
              $scope.crewLinksListCSVRecords = [];


$scope.serverFetch = new ServerTableFetch(
        "http://localhost:4000/api/v1/trains", 
         $http,
        function(){         
          $scope.isLoading = true;
        },
        function(resultObj){      
          $scope.trainsList = resultObj.results;
          $scope.isLoading = false;
        }
    );
      }

        };
    }]);