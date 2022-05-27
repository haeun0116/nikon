$(function() {
    var wd = $(window).width();
    var ham=$('.hdrWrap header .hdrRight h4');

    ham.eq(1).click(function(){
        $('.navboxWrap').css({
            width: '100vw',
            height: '100vh',
            display: 'block'
        });
    });
    $('.navboxWrap .navBox .navTop i').click(function(){
        $('.navboxWrap').css({
            width: '0vw',
            height: '0vh',
            display: 'none'
        });
    });


    $('.toTop').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },1000);            
    });
});