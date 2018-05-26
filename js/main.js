$(document).ready(function () {

    new WOW().init();

    //menu dropdown items
    $('.menu-list__dropdown-toggle').click(function (e) {
        e.preventDefault();
        var $this = $(this);

        $(this).toggleClass('active');
        $this.parent('.menu-list__item').find('.menu-list__dropdown').toggleClass('menu-list__dropdown-open');
    });

    //mob menu toggle
    $('.menu__btn').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('menu__btn-active');
        $('.menu-wrapper').toggleClass('menu-wrapper__open');
        $('body').toggleClass('no-scroll');
    });

    //menu height

    // function menuHeight() {
    //     var docHeight = $(document).height(),
    //         menu = $('.menu-wrapper'),
    //         mainSectionHeight = $('#main').outerHeight(),
    //         footerHeight = $('#footer').outerHeight();
    //
    //     if ($(window).width()  > 768) {
    //         menu.css({
    //             // 'min-height': (mainSectionHeight+footerHeight) + 'px',
    //             // 'max-height': (mainSectionHeight+footerHeight) + 'px',
    //             'height': (mainSectionHeight+footerHeight) + 'px'
    //         })
    //     }
    //     // else{
    //     //     menu.css('height', '100px');
    //     // }
    // }
    // menuHeight();
    //
    // $(window).resize(function () {
    //     menuHeight();
    // })
});