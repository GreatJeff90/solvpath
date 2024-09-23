if(window.location.href == "https://solvepath.live/" || window.location.href == "https://solvepath.live/index.html" || window.location.href == "https://solvepath.live/index"){

    $('.navbar-nav li a').removeClass('active');
    $('#home-link').addClass('active')

}else if( window.location.href == "https://solvepath.live/about.php" || window.location.href == "https://solvepath.live/about"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#about-link').addClass('active')

}else if( window.location.href == "https://solvepath.live/services.php" || window.location.href == "https://solvepath.live/services"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#service-link').addClass('active')
}else if( window.location.href == "https://solvepath.live/contact.php" || window.location.href == "https://solvepath.live/contact"){
    
    $('.navbar-nav li a').removeClass('active');
    $('#contact-link').addClass('active')
}else{
    $('.navbar-nav li a').removeClass('active');

}