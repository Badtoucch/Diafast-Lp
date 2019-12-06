$(document).ready(function () {
    $(".timer").fadeOut();
    
    $(window).on("scroll", function () {
       
        if (($(window).scrollTop() > 800) && ($(window).scrollTop() < 10500)) {
            $(".timer").fadeIn();
        } else {
            $(".timer").fadeOut();
        }

    });
   
})



