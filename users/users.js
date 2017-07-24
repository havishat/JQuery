         //$(document).ready(function(){
         //   alert('hello!');
           // $('#submit').click(function(){
             //   var value = $('#form1').val();
             //   $('input').text(value); 
                //$(this).serialize()
            //    return false
          //  });

        

        $(document).ready(function(){
             $('#submit').click(function(e){
                 e.preventDefault();
                 $('#form1').trigger('reset');
        $('.first-name').append('<tr><th>'+$("#first").val()+'</th></tr>');
         $('.last-name').append('<tr><th>'+$("#last").val()+'</th></tr>');
          $('.Email').append('<tr><th>'+$("#email").val()+'</th></tr>');
           $('.contact').append('<tr><th>'+$("#phone").val()+'</th></tr>');
        
        
    });
});
