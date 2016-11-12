/*jshint sub:true*/
' use strict';
angular.module("smartWebApp").controller("loginCtrl",function($scope,$http, $base64,$window,AuthFactory,UserAuthFactory){


					$scope.searchItems = {
								  "CrewLink" : "Crew Link",
								  "SmartWebSchool" : "Smart Web School",
								  "TradeMarketLive" : "Trade Market Live",
								  "ShopforYou" : "Shop for You",
								  "BharatamChitFund" : "Bharatam Chit Fund",			  
								};

       
       $scope.dologin = function(username, password,searchModel){
           
           if(searchModel.item==="CrewLink"){
           	console.log("DSADSA");
           }

		UserAuthFactory.loginFactory(username,password).success(function(response){
	        console.log(""+response);

 

			});
	};



});