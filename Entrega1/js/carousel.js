$(document).ready(function(){
    var currentPosition = 0;
    var totalSlides = $('.carousel img').length;

    $('.next').click(function() {
        var slideWidth = $('.carousel img').width();
        currentPosition = (currentPosition + 1) % totalSlides;
        $('.carousel-inner').css('transform', 'translateX(' + (-currentPosition * slideWidth) + 'px)');
    });

    $('.prev').click(function() {
        var slideWidth = $('.carousel img').width();
        currentPosition = (currentPosition - 1 + totalSlides) % totalSlides;
        $('.carousel-inner').css('transform', 'translateX(' + (-currentPosition * slideWidth) + 'px)');
    });
});
