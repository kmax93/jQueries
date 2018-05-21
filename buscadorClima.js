$(function() {
	

	$("#pesquisar").on('click', function(){

		var cidade = $("#cidade").val();
		var dataAtual = new Date();

		var apiClima = 'https://query.yahooapis.com/v1/public/yql?format=json&rnd=' + dataAtual.getFullYear() + dataAtual.getMonth() + dataAtual.getDay() + dataAtual.getHours() + '&diagnostics=true&callback=?&q=';
		apiClima += 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+ cidade +'")and u="c"';

		$.ajax({
			url:encodeURI(apiClima),
			dataType: 'json',
			type:'GET',
			beforeSend:function(){
				$("#resultado").html("Carregando...");
			},
			success:function(data){

				if(data != null && data.query != null && data.query.results != null && data.query.results.channel.description != 'Yahoo! Weather Error'){

					var temperatura = data.query.results.channel.item.condition.temp;

					$("#resultado").html(temperatura+'º C');

				}

			},
			error:function(){
				alert("Erro");
			}
		});

	});



});