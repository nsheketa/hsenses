$(document).ready(function () {

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
    })
});