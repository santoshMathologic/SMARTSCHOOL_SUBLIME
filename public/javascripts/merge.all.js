	' use strict';
	(function(){
	
	        
	   console.log("at custom.js");
	})();

	(function(){
	
	var bodyEL = $('body'),
	
	navToggleBtn = bodyEL.find('.nav-toggle-btn');
	console.log(bodyEL);
	navToggleBtn.on('click',function(e){
	
	bodyEL.toggleClass('active-nav');
	e.preventDefault();
	
	});
	
	
	})();