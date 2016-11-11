/*jshint sub:true*/
' use strict';


angular.module('smartWebApp')
    .directive('train', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/trains/train.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
              
              console.log("DASDAS");
              $scope.trainLists = [];
              $scope.crewLinksListCSVRecords = [];


$scope.serverFetch = new ServerTableFetch(
        "http://localhost:4000/api/v1/trains", 
         $http,
        function(){         
          $scope.isLoading = true;
        },
        function(resultObj){      
          $scope.trainLists = resultObj;
          $scope.isLoading = false;
        }
    );


              $http.get("http://localhost:4000/api/v1/trains?perPage=10&page=1&order=trainNo").then(function(response){
              	            $scope.trainLists = response.data.results;
                            $scope.currentPage = response.data.current;
                            $scope.perPage = response.data.options.perPage;
                            $scope.totalPages = response.data.last;
                            $scope.totalRecords = response.data.count;

                            for (var i = 0; i < $scope.trainLists.length; i++) {
              $scope.crewLinksListCSVRecords.push([ "", "", "",
                  "", "", "", "", "", "", ""]);
            }

                             for(var cb = 0;cb<$scope.trainLists.length;cb++){

                  $scope.crewLinksListCSVRecords[cb]['trainNo'] = $scope.trainLists[cb]['trainNo'];
                  $scope.crewLinksListCSVRecords[cb]['trainName'] = $scope.trainLists[cb]['trainName'];
                 


                }


              });

               
                
            }

        };
    }]);