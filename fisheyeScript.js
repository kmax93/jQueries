$(function(){

	$(".icone").hover(function(){

		//ANIMAÇÃO PARA QUANDO O MOUSE ENTRAR
		$(this).find("img").css({
			"width":100,
			"height":100,
		})

		$(this).animate({
			"width":100,
			"height":100,
			"margin-top":-55
		}, 200);


	}, function(){
		//ANIMAÇÃO PARA QUANDO O MOUSE SAI
		$(this).find("img").css({
			"width":65,
			"height":65,
		})

		$(this).animate({
			"width":70,
			"height":70,
			"margin-top":0
		}, 200)
	});

});