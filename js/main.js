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

    videoControls();


});