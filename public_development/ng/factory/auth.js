var app = angular.module("smartWebApp").factory("AuthFactory",function($window){

var auth = {

   isLoggin : function(){
      console.log("inside is Loggin");
   }

            

};

 return auth;

});

app.factory("UserAuthFactory",function($state,$window, $cookies, $location, $http,AuthFactory){

       var userAuthFac = {
      loginFactory: function(username, password) {
       
      return $http.post("http://localhost:4000/login", {
        username: username,
        password: password
      });
    },
    logoutFactory: function() {
 
      
 
    }

};
   
   return userAuthFac;


});