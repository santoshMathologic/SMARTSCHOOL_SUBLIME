/*jshint sub:true*/
' use strict';

var app = (function(){

var foo = '12345';
var message = function(){
	var newMessage = "username" + foo;
	return newMessage;
};
   return {
   	message : message
   };

}());


console.log(""+app.message());