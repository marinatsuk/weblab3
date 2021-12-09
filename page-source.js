$(function() {
	$('#inputter').on('submit', function(event){
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: "page-source.php",
			data: $(this).serialize(),
			cache: false,
			dataType: 'json'			
		})
		.done(function(data){
			alert(data.status);

			$("#glitchText div:first").css("color", data.color);
            $("#glitchText div:first").css("font-size", +data.size);			
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		}).
		always(function(){

		});
	});
});