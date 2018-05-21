$(function(){
	

	$("a.galeria").on('click',function(){

		var imagem = $(this).find('img').attr('src');

		$(".divFoto img").attr('src', imagem);


		$(".escuro, .divFoto").fadeIn('fast');

	});


	$(".escuro, .divFoto button").on('click', function(){

		$(".escuro, .divFoto").fadeOut('fast');

	});


});