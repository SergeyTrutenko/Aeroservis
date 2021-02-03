$(document).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass('header-fixed');
        }
        else {
            $('.header').removeClass('header-fixed');
        }
    });

    $(".menu__icon").click(function () {
        $('.menu').addClass("active");
    });

    $(".close").click(function () {
        $('.menu').removeClass("active");
    });

});
