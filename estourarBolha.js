$(function() {

	var quantidadeBola = 0;
	var placar = 0;

	function adicionaBola() {
		var x = Math.floor(Math.random()*800);
		var y = Math.floor(Math.random()*500);
		var bola = $('<div class="bola"></div>');

		bola.css('left', x +'px');
		bola.css('top', y +'px');

		bola.on('click', function(){
			$(this).fadeOut('fast');
			placar++;
			$("#numPlacar").html(placar);

			if(placar == 10){
				clearInterval(adicionaBola);
				setInterval(adicionaBola, 900);
			}

			if(placar == 20){
				clearInterval(adicionaBola);	
				setInterval(adicionaBola, 200);
			}

			if(placar == 30){
				clearInterval(adicionaBola);
				setInterval(adicionaBola, 700);	
			}

			if(placar == 40){
				clearInterval(adicionaBola);
				setInterval(adicionaBola, 500);	
			}
		
		quantidadeBola--;
				
		});

		quantidadeBola++;

		if(quantidadeBola > 10){
			clearInterval(adicionaBola);
			alert('FIM DE JOGO');
			return;
		}

		
		$(document.body).append(bola);
	}


	$("#comecarJogo").on('click', function(){

			setInterval(adicionaBola, 1000);

	});


});