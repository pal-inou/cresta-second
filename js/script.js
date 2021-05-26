//ハンバーガーメニュー
$('.burger-btn').on('click',function(){
    $('.nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});