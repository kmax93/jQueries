$(function() {
	

	$('li').hover(function(){
		$(this).find('.subMenu').slideDown();
	}, function(){
		$(this).find('.subMenu').slideUp();
	});


});