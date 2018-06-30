$(document).ready(function () {

    new WOW().init();

// $('.parallax').parallax();
    // $('.parallax').Parlx();

    $('img[usemap]').imageMap();

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

    $('.menu-list__dropdown-link').click(function (e) {
        $('.menu-wrapper').removeClass('menu-wrapper__open');
        $('.menu__btn').removeClass('menu__btn-active');
    });

    //video controls

    function videoControls() {
        var videoWrap = $('.video'),
            video = $('video')[0],
            playButton = $('.video__controls');

        videoWrap.click(function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            playButton.fadeToggle();
        });
    }

    //location info toggle

    $('.location-map__arrow').click(function (e) {
        e.preventDefault();
        var infoWrap = $('.location-map__info'),
            arrow = $('.location-map__arrow');

        arrow.toggleClass('active');
        infoWrap.toggleClass('location-map__info-open');
    });

    //location map zooming

    $('.map-area').click(function () {
        var areaZoomed = $('.location-map__zoomed'),
            area = $('.map-area'),
            img = $('#Image-Maps-Com-image-maps');
        areaZoomed.toggleClass('location-map__zoomed-active');
    });

    $('.location-map__zoomed').click(function () {
        $(this).removeClass('location-map__zoomed-active');
    });

    // smooth scrolling
    $('.scroll__link').click(function () {

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top + '40px'
        }, 'slow');

        return false;
    });


    videoControls();


});