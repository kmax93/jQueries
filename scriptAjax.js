$(function(){

	$('#form').bind('submit', function(e){
		e.preventDefault();

		var txt = $(this).serialize();

		console.log(txt);


		//FUNÇÃO DO AJAX

		$.ajax({
			type:'POST',
			url:'ajax.php',
			data:txt,
			success:function(resultado){
				$('.div').html("Resultado: " + resultado);
				console.log(resultado);
			},
			error:function(){
				$('.div').html("viix");
			}
		});

	});

});