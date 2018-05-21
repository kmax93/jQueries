$(function(){

	var horaSelecionada;
	
	$('input').on('focus', function(){

		var posicao = $(this).offset();
		var larguraInput = $(this).width();

		$(".pegaHora").css("left", posicao.left + larguraInput + 10);
		$(".pegaHora").css("top", posicao.top);
		$(".pegaHora").show();

		horaSelecionada = $(this);
	});

	$('input').on('blur', function(){
		setTimeout(function(){
			$(".pegaHora").hide();
		}, 1000);		

	});


	$('.pegaHora button').click(function(){

		horaSelecionada.val($(this).html());

	});

});