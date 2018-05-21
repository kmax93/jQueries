$(function(){


	function categoriaIMC(imc){

		if(imc < 18.5){
			return "magreza, voce deveria ganhar peso";
		}

		if (imc > 18.5 && imc < 24.9 ){
			return "parabens, voce está no peso certo";
		}

		if(imc > 24.9 && imc < 30){
			return "sobrepeso, voce está além do seu peso saudável";
		}

		if(imc > 30){
			return "Obesidade, cuidado peso muito acima do normal";
		}

	}


	$('#calcular').on('click',function(){

		var altura = $("#altura").val();
		var peso = $("#peso").val();

		altura = altura.replace(',' , '.');
		peso = peso.replace(',' , '.');

		//IMC = PESO / ALTURA²

		var imc = peso / (altura * altura);

		var categoria = categoriaIMC(imc);

		var resultado = $("#resultado");
		resultado.html("<p> Seu imc é : " + imc);
		resultado.append("<br/><br/><br/>" + categoria);

	});

});