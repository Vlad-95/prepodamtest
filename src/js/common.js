$(document).ready(function () {
    $('.offers__slider').slick({
        slidesToShow: 1,
        mobileFirst: true,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '100px'
                }
            },
            {
                breakpoint: 767,
                settings: "unslick"
            }
        ]
    });


    // открытие меню
    $('.header__burger').click(function() {
        $(this).toggleClass('active');
        $('.hidden-menu').fadeToggle();
    });

    $(window).resize(function() {
        // скрытие меню при изменении окна
        if (window.innerWidth >= 1300) {
            $('.header__burger').removeClass('active');
            $('.hidden-menu').fadeOut();
        } 

        else if (window.innerWidth <= 767) {
            $('.offers__slider').slick();
        }
    })

});
