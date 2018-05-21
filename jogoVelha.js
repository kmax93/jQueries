var vezDe = 'x';

function atualizarVez(){
	if(vezDe == 'x'){
		$('.placar img').attr('src', 'imagens/x.png');
	}
	
	else{
		$('.placar img').attr('src', 'imagens/o.png');
	}

}

function verificarVencedor(){
	var a1 = $('.a1').attr('data-marcado');
	var a2 = $('.a2').attr('data-marcado');
	var a3 = $('.a3').attr('data-marcado');

	var b1 = $('.b1').attr('data-marcado');
	var b2 = $('.b2').attr('data-marcado');
	var b3 = $('.b3').attr('data-marcado');
	
	var c1 = $('.c1').attr('data-marcado');
	var c2 = $('.c2').attr('data-marcado');
	var c3 = $('.c3').attr('data-marcado');

	var venceu = '';

	for (var i = 0; i <= 1; i++) {

		if(i == 0){
			var op = 'o';
		}else{
			var op = 'x';
		}

		if(a1 == op && b1 == op && c1 == op){
			venceu = op;
		}else if(a2 == op && b2 == op && c2 == op){
			venceu = op;
		}else if(a3 == op && b3 == op && c3 == op){
			venceu = op;
		}else if(a1 == op && a2 == op && a3 == op){
			venceu = op;
		}else if(b1 == op && b2 == op && b3 == op){
			venceu = op;
		}else if(c1 == op && c2 == op && c3 == op){
			venceu = op;
		}else if(a1 == op && b2 == op && c3 == op){
			venceu = op;
		}else if(c1 == op && b2 == op && a3 == op){
			venceu = op;
		}
	}
		if(venceu != ''){
			alert("JOGADOR " + venceu + " VENCEU");

			$('.area').html('');
			$('.area').attr('data-marcado', '');
		}else{
			if(a1 != '' && a2 != '' &&  a3 != '' &&  b1 != '' &&  b2 != '' &&  b3 != '' 
											&&  c1 != '' &&  c2 != '' &&  c3 != ''){
				alert("EMPATOU");
				$('.area').html('');
				$('.area').attr('data-marcado', '');
			}
		}

}

$(function(){

	atualizarVez();

	$(".area").bind('click', function(){

		if($(this).find('img').length == 0){

			if (vezDe == 'o') {
				$(this).html('<img src="imagens/o.png" border="0" height="50"/>');
				$(this).attr('data-marcado' , 'o');
				vezDe = 'x';
			} 	else{
					$(this).html('<img src="imagens/x.png" border="0" height="50"/>');
					$(this).attr('data-marcado' , 'x');
					vezDe = 'o';
				}

			atualizarVez();
		}

		verificarVencedor();
			

	});

});