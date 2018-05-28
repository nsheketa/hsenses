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

    $('.location-map__area').click(function () {
       var areaZoomed = $('.location-map__zoomed');
       areaZoomed.toggleClass('location-map__zoomed-active');
    });

    videoControls();


});