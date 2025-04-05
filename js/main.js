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
    adaptiveHeight: false,
});

let img = document.querySelector('img');
console.log(img.naturalWidth, img.naturalHeight);





$('.feature-image').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            // フェードインアップというクラスを付与してます
            $(this.element).addClass('animate__fadeInUp');

            // アニメーションが１回しか呼ばれないようにするためにdestroyしてます
            this.destroy();
        }
    },

    // 画面中央に来たらhandlerを実行する設定です
    offset: '50%',
});

$('.click-open dt').on('click', function (e) {

    $(this).toggleClass('open');
    $(this).next().slideToggle();

});
