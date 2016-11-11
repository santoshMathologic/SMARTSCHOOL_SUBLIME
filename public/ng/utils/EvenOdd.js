                    
/*jshint sub:true*/
' use strict';

                    var sumEven  = function(n){
                    for(var i     = 0;i<20;i++){
                    if(i%2        ===0){
                    log(i+ " even ====");
                    }else{
                    log(i+ " odd");
                    }
                    }
                    }; 

var log =function (message){
  console.log(message);
  var s = "fffff";
};
sumEven(20);
  String.prototype.Capitalize = function(){
  return this.charAt(0).toUpperCase() + this.substring(1,this.length-1) + this.charAt(this.length-1).toUpperCase();
  };
  String.prototype.FirstCapitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
  };

var findDuplicate = function(array){


};




log("laxman".Capitalize());
log("laxman".FirstCapitalize());