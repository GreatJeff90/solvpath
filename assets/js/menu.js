if(window.location.href == "https://coderigi.co/" || window.location.href == "https://coderigi.co/index.php" || window.location.href == "https://coderigi.co/index"){

    $('.navbar-nav li a').removeClass('active');
    $('#home-link').addClass('active')

}else if( window.location.href == "https://coderigi.co/about.php" || window.location.href == "https://coderigi.co/about"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#about-link').addClass('active')

}else if( window.location.href == "https://coderigi.co/services.php" || window.location.href == "https://coderigi.co/services"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#service-link').addClass('active')
}else if( window.location.href == "https://coderigi.co/contact.php" || window.location.href == "https://coderigi.co/contact"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#contact-link').addClass('active')
}else{
    $('.navbar-nav li a').removeClass('active');

}