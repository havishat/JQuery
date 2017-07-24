
$(document).ready(function() {
        $( "img" ).click(function( event ) {
        event.preventDefault();
        $( this ).hide();
    });

    $( "button" ).click(function( event ) {
        event.preventDefault();
        $( "img" ).show();
    });

    

});
