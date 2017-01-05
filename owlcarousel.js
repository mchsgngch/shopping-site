/*カルーセルの設定*/

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
            navigationText: ["戻る", "次へ"] // ナビゲーションテキストの変更

        }
    );
});
