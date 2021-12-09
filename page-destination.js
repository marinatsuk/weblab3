$(function() {
	function listenerChanges() {
		$.ajax({
			url: "page-destination.php"
		})
		.done(function(data){
			$("#glitchText div:first").css("color", data.color);
			$("#glitchText div:first").css("font-size", +data.size);

			console.log(data.color);
			console.log(data.size);
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		}).
		always(function(){
			window.setTimeout(function() {
				listenerChanges();
			}, 5000);
		});		
	}

	listenerChanges();
});