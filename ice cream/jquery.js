$(document).ready(function() {
    //  counter query  

    $('.counter').counterUp({
        DelayNode: 30,
        TimeRanges: 1200
    });

    // slideTogle query

    $('#prog1').click(function() {
        $('#pro1').slideToggle('slow');

    });
    $('#prog2').click(function() {
        $('#pro2').slideToggle('slow');

    });
    $('#prog3').click(function() {
        $('#pro3').slideToggle('slow');

    });


    // navbar signin page
    $('.signin').click(function() {
        $('#signin').slideDown();

    });
    $('.close').click(function() {
        $('#signin').slideUp(500);

    });




});