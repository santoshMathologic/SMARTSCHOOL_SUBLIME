	' use strict';
	(function(){
	
	var bodyEL = $('body'),
	navToggleBtn = bodyEL.find('.nav-toggle-btn');
	
	navToggleBtn.on('click',function(e){
	
	bodyEL.toggleClass('active-nav');
	e.preventDefault();
	
	});
	
	
	})();