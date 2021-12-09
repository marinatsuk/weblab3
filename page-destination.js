$(function() {
    function listenerChanges() {
        console.log("!");

        $.ajax({
            type: 'POST',
            url: "page-destination.php",
            data: $(this).serialize(),
            cache: false,
            // contentType: false,
            dataType: 'json',
            // processData: false
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

        });

        window.setTimeout(function() {
            listenerChanges();
        }, 5000);
    }

    listenerChanges();
});