$(document).ready(function () {
    $('#contactFormTwo').submit(function(e){
        e.preventDefault();
        var userName = $('#contact-name').val(), userEmail = $('#contact-email').val(), userPhone = $('#contact-phone').val(), userSubject = $('#contact-subject').val(), userMessage = $('#contact-message').val();

        if(userName ==""){
            $('#report').text('Enter a valid name')
        }else if(userName ==" "){
            $('#report').text('Enter a valid name')
        }else if(userEmail == ""){
            $('#report').text('Enter a valid email address')

        }else if(userEmail == " "){
            $('#report').text('Enter a valid email address')

        }else if(userPhone == " "){
            $('#report').text('Enter a valid phone number')

        }else if(userPhone == ""){
            $('#report').text('Enter a valid name')

        }else if(userSubject == ""){
            $('#report').text('Enter a a message subject')

        }else if(userEmail == " "){
            $('#report').text('Enter a message')

        }else if(userMessage.length < 4){
            $('#report').text('Enter a valid message')

        }else{
            $.ajax({
                type: "post",
                url: "includes/contact_us",
                data: {
                    userName: userName,
                    userEmail: userEmail,
                    userPhone: userPhone,
                    userSubject: userSubject,
                    userMessage: userMessage
                },
                // dataType: "dataType",
                success: function (response) {
                    console.log(response)
                    // if(response == 1){
                        $('#report').removeClass('text-danger');
                        $('#report').removeClass('text-success');
                        $('#contactFormTwo').html(`<p class="text-success">Received, we will get back to you as fast as possible. Regards`);
                    // }else{
                    //     $('#report').text('Network error, please try again later!')
                        
                    // }
                }
            });
        }
    })
    
    
    $('#contactForm').submit(function(e){
        e.preventDefault();
        var userName = $('#contact-name-menu').val(), userEmail = $('#contact-email-menu').val(), userPhone = $('#contact-phone-menu').val(), userSubject = $('#contact-subject-menu').val(), userMessage = $('#contact-message-menu').val();

        if(userName ==""){
            $('#report').text('Enter a valid name')
        }else if(userName ==" "){
            $('#report').text('Enter a valid name')
        }else if(userEmail == ""){
            $('#report').text('Enter a valid email address')

        }else if(userEmail == " "){
            $('#report').text('Enter a valid email address')

        }else if(userPhone == " "){
            $('#report').text('Enter a valid phone number')

        }else if(userPhone == ""){
            $('#report').text('Enter a valid name')

        }else if(userSubject == ""){
            $('#report').text('Enter a a message subject')

        }else if(userEmail == " "){
            $('#report').text('Enter a message')

        }else if(userMessage.length < 4){
            $('#report').text('Enter a valid message')

        }else{
            $.ajax({
                type: "post",
                url: "includes/contact_us",
                data: {
                    userName: userName,
                    userEmail: userEmail,
                    userPhone: userPhone,
                    userSubject: userSubject,
                    userMessage: userMessage
                },
                // dataType: "dataType",
                success: function (response) {
                    console.log(response)
                    // if(response == 1){
                        $('#report').removeClass('text-danger');
                        $('#report').removeClass('text-success');
                        $('#contactForm').html(`<p class="text-success">Received, we will get back to you as fast as possible. Regards`);
                    // }else{
                    //     $('#report').text('Network error, please try again later!')
                        
                    // }
                }
            });
        }
    })
    
    
});