$(function(){
    var wd = $(window).width();
    var ham=$('.hdrWrap header .hdrRight h4');
    var c1ag =$('.cntWrap .content.cnt01 section .artview .artGroup');
    var c1Btn =$('.cntWrap .content.cnt01 section .artview .btns');
    var li =$('.cntWrap .content.cnt03 section ul.arco li');
    var im =$('.bnrWrap .banner .image');
    var bnr =$('.bnrWrap');

    var mv =0;
    var bi =0;


    if(wd > 1024){
        // pc버전
      mv=-75;
      bi='min(41rem,1640px)';
        
    }else if(wd >= 420 && wd <= 1024 ){
      // tab버전
      mv=-75;
      bi='min(41rem,1640px)';
        
    }else{
      // 모바일버전
        mv=-100;
        bi='min(20rem,800px)';
        
    }


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

    c1ag.css({marginLeft : mv+'%'});
    c1Btn.click(function(){
        c1ag.animate({
            marginLeft : 0+'%'
        },500,function(){
            c1ag.find('article:last').prependTo(c1ag);
            c1ag.css({marginLeft : mv+'%'});
        });
    });

    bnr.mouseenter(function(){
        im.css({height : bi});
    });

    li.click(function(){
        li.removeClass('on');
        $(this).addClass('on');
        
    });

    $('.toTop').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },1000);            
    });

});