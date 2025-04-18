var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function () {
    hamburger.slideToggle(500);
});


$(window).on('resize', function () {
    if ($(window).width() < 768) {
        hamburger.removeAttr('style');
    }
});


$('.cover-slick').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: true,
    autoplayspeed: 3000,
});

let img = document.querySelector('img');
console.log(img.naturalWidth, img.naturalHeight);


$('.feature-image').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInUp');
            this.destroy();
        }
    },
    offset: '50%',
});


$('.click-open dt').on('click', function (e) {
    let $dl = $(this).closest('.click-open');
    $dl.toggleClass('open');
    $(this).next().slideToggle();
});
