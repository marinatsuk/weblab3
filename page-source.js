$(function() {
	$('#inputter').on('submit', function(event){
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: "page-source.php",
			data: $(this).serialize(),
			cache: false,
			// contentType: false,
			dataType: 'json',
			// processData: false
		})
		.done(function(data){
			alert(data.status);
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		}).
		always(function(){

		});
	});
});