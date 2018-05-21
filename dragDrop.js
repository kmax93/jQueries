$(function(){


	$("#objeto").on('mousedown',function(){

		$("#objeto").on('mousemove', function(event){

			var posX = event.originalEvent.pageX;
			var posY = event.originalEvent.pageY;

			var largura = $(this).width();
			var altura  = $(this).height();

			$(this).css('left', (posX - (largura/2))+'px');
			$(this).css('top', 	(posY - (altura/2))+'px');

		});

	});


	$("#objeto").on('mouseup',function(){

		$(this).unbind('mousemove');

	});



});