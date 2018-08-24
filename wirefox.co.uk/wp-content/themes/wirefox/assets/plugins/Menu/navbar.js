jQuery(window).load(function () {
    
});

$(function () {
    $('.navbar-toggle').click(function () {
        $('.SmallListAnime').addClass('animated fadeInDown');
        $('.OtherAnime').addClass('animated fadeInDown');
        $('.navbar-toggle').toggleClass('navbar-on');
        $('nav').fadeToggle(500, function () {
            $('.SmallListAnime').addClass('animated fadeInDown');
            $('.OtherAnime').addClass('animated fadeInDown');
        });
        $('nav').removeClass('nav-hide');
    });
});
