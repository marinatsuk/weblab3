$("#inputter").submit(function(e){
	alert("!");
	e.preventDefault();

	$.post("page-source.php", $(this).serialize(), function(result) {
		alert(result);
	})
	.done(function() {
		alert( "second success" );
	})
	.fail(function() {
		alert("error");
	});
});