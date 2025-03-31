// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// ハンバーガーメニューボタンがクリックされたとき
$('.hamburger-button').on('click', function () {
    hamburger.slideToggle(500);
});


$(window).on('resize', function () {
    if ($(window).width() < 768) {
        hamburger.removeAttr('style'); // スライドで設定されたdisplayをリセット
    }
});











// カルーセル
$('.cover-slick').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
});


$('.js-fadein-left').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element)
                .addClass('animate__fadeInLeft');
        }
    },
    offset: '50%',
});

$('.js-fadein-right').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element)
                .addClass('animate__fadeInRight');
        }
    },
    offset: '50%',
});

$('.click-open dt').on('click', function (e) {

    $(this).toggleClass('open');
    $(this).next().slideToggle();

});
