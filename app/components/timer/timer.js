$(document).ready(function () {

    $(window).on("scroll", function () {
       
        if (($(window).scrollTop() > $('.sign-info').offset().top) && ($(window).scrollTop() < $('.order').offset().top)) {
            $(".timer").fadeIn();
            
        } else {
            $(".timer").fadeOut();
            
        }

    });
   
})



