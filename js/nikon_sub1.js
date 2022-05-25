$(function(){
    var wd = $(window).width();
    var c1btn =$('.cntWrap .content.cnt01 section .btn');
    var c1ag =$('.cntWrap .content.cnt01 section .artView .artGroup');
    var c2btn =$('.cntWrap .content.cnt02 section .btn');
    var c2ag =$('.cntWrap .content.cnt02 section .artView .artGroup');
    var c3btn =$('.cntWrap .content.cnt03 section .btn');
    var c3ag =$('.cntWrap .content.cnt03 section .artView .artGroup');
    var c4btn =$('.cntWrap .content.cnt04 section .btn');
    var c4ag =$('.cntWrap .content.cnt04 section .artView .artGroup');
    var c5btn =$('.cntWrap .content.cnt05 section .btn');
    var c5ag =$('.cntWrap .content.cnt05 section .artView .artGroup');
    var tab =$('.mainWrap .main .tab h4');
    var p=$('body>div');
    var ham=$('.hdrWrap header .hdrRight h4');


    var mv =0;
    var omv =0;
    var s=0;
    var sl=0;


    if(wd > 1024){
        // pc버전
        mv =-33.33;
        omv =-66.66;
        s=0;
        sl=-33.33;
        
    }else if(wd >= 420 && wd <= 1024 ){
      // tab버전
      mv =-33.33;
      omv =-66.66;
      s=0;
      sl=-33.33;
        
    }else{
      // 모바일버전
        mv =-100;
        omv =-200;
        s=10;
        sl=-90;
        
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



    var ind=0;
    var loc =[];

    for(var i=0; i<p.length; i++){
        loc[i] = p.eq(i).offset().top;
    }
    tab.click(function(){
        ind=$(this).attr('data-num');
        $('html').animate({scrollTop: loc[ind]});
    });

    c1ag.css({marginLeft : mv+'%'});
    c1btn.click(function(){
        c1ag.animate({
            marginLeft : omv+'%'
        },500,function(){
            c1ag.find('.article:first').appendTo(c1ag);
            c1ag.css({marginLeft : mv+'%'});
        });
    });

    c2ag.css({marginLeft : sl+'%'});
    c2btn.click(function(){
        c2ag.animate({
            marginLeft : s+'%'
        },500,function(){
            c2ag.find('.article:last').prependTo(c2ag);
            c2ag.css({marginLeft : sl+'%'});
        });
    });

    c3ag.css({marginLeft : mv+'%'});
    c3btn.click(function(){
        c3ag.animate({
            marginLeft : omv+'%'
        },500,function(){
            c3ag.find('.article:first').appendTo(c3ag);
            c3ag.css({marginLeft : mv+'%'});
        });
    });

    c4ag.css({marginLeft : mv+'%'});
    c4btn.click(function(){
        c4ag.animate({
            marginLeft : omv+'%'
        },500,function(){
            c4ag.find('.article:first').appendTo(c4ag);
            c4ag.css({marginLeft : mv+'%'});
        });
    });


    c5ag.css({marginLeft : sl+'%'});
    c5btn.click(function(){
        c5ag.animate({
            marginLeft : s+'%'
        },500,function(){
            c5ag.find('.article:last').prependTo(c5ag);
            c5ag.css({marginLeft : sl+'%'});
        });
    });
    
});