$(document).ready(function () {
    $('#newsletter-form').submit(function(e){
        e.preventDefault();
        if($('#newsletter-address').val() == ""){
            $('#validator-newsletter').addClass('text-danger')
            $('#validator-newsletter').html("Please enter your email address.")
        }else{
            $.ajax({
                type: "post",
                url: "includes/add_newsletter.php",
                data: {
                    emailsAddress: $('#newsletter-address').val()
                },
                // dataType: "dataType",
                success: function (response) {
                    if(response ==1 ){
                        $('#validator-newsletter').removeClass('text-danger')
                        $('#validator-newsletter').addClass('text-white')
                        $('#validator-newsletter').html("Thank you for subscribing.")

                    }else if(response == 12){
                        $('#validator-newsletter').removeClass('text-white')
                        $('#validator-newsletter').addClass('text-danger')
                        $('#validator-newsletter').html("Email address already exists. Please try another one.")
    
                        
                         
                    }else{
                        console.log(response)
                        $('#validator-newsletter').addClass('text-danger');
                        $('#validator-newsletter').html("<b>Network error! </b> - Please try again later.")

                    }
                }
            });
        }
    })
});