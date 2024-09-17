if(window.location.href == "https://SolvPath.co/" || window.location.href == "https://SolvPath.co/index.php" || window.location.href == "https://SolvPath.co/index"){

    $('.navbar-nav li a').removeClass('active');
    $('#home-link').addClass('active')

}else if( window.location.href == "https://SolvPath.co/about.php" || window.location.href == "https://SolvPath.co/about"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#about-link').addClass('active')

}else if( window.location.href == "https://SolvPath.co/services.php" || window.location.href == "https://SolvPath.co/services"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#service-link').addClass('active')
}else if( window.location.href == "https://SolvPath.co/contact.php" || window.location.href == "https://SolvPath.co/contact"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#contact-link').addClass('active')
}else{
    $('.navbar-nav li a').removeClass('active');

}