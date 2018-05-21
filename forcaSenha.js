$(function(){

		function statusSenha(forcaSenha){

			if(forcaSenha == 0){
				return " ";
			}

			if(forcaSenha <= 25){
				return "Senha inválida";
			}

			if(forcaSenha > 25 && forcaSenha <= 50){
				return "Senha fraca";
			}

			if(forcaSenha > 50 && forcaSenha <= 75){
				return "Senha aceitável";
			}

			if(forcaSenha > 75 && forcaSenha <= 100){
				return "Senha forte";
			}

		}
		
		$('#senha').on('keyup', function(){

			var senha = $(this).val();
			var forcaSenha = 0;
			var charEsp = new RegExp(/[^a-z0-9]/i);
			var letras = new RegExp(/[a-z]/i);
			var numeros = new RegExp(/[0-9]/i);


			if(senha.length > 8){
				forcaSenha += 25;
			}


			if(letras.test(senha)){
				forcaSenha += 25;
			}

			if(numeros.test(senha)){
				forcaSenha += 25;
			}


			if(charEsp.test(senha)){
				forcaSenha += 25;
			}


			var statSenha = statusSenha(forcaSenha);

			if(forcaSenha == 0){
				$('#forcaSenha').html("  ");
				$('#digitado').html("");
			}else{
				$('#forcaSenha').html("Força: " + forcaSenha + " ----- " + statSenha);
				$('#digitado').html(senha);
			}


		});

});