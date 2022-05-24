$(function(){
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

    var ind=0;
    var loc =[];

    for(var i=0; i<p.length; i++){
        loc[i] = p.eq(i).offset().top;
    }
    tab.click(function(){
        ind=$(this).attr('data-num');
        $('html').animate({scrollTop: loc[ind]});
    });

    c1ag.css({marginLeft : '-33.33%'});
    c1btn.click(function(){
        c1ag.animate({
            marginLeft : '-66.66%'
        },500,function(){
            c1ag.find('.article:first').appendTo(c1ag);
            c1ag.css({marginLeft : '-33.33%'});
        });
    });

    c2ag.css({marginLeft : '-33.33%'});
    c2btn.click(function(){
        c2ag.animate({
            marginLeft : '0%'
        },500,function(){
            c2ag.find('.article:last').prependTo(c2ag);
            c2ag.css({marginLeft : '-33.33%'});
        });
    });

    c3ag.css({marginLeft : '-33.33%'});
    c3btn.click(function(){
        c3ag.animate({
            marginLeft : '-66.66%'
        },500,function(){
            c3ag.find('.article:first').appendTo(c3ag);
            c3ag.css({marginLeft : '-33.33%'});
        });
    });

    c4ag.css({marginLeft : '-33.33%'});
    c4btn.click(function(){
        c4ag.animate({
            marginLeft : '-66.66%'
        },500,function(){
            c4ag.find('.article:first').appendTo(c4ag);
            c4ag.css({marginLeft : '-33.33%'});
        });
    });


    c5ag.css({marginLeft : '-33.33%'});
    c5btn.click(function(){
        c5ag.animate({
            marginLeft : '0%'
        },500,function(){
            c5ag.find('.article:last').prependTo(c5ag);
            c5ag.css({marginLeft : '-33.33%'});
        });
    });
    
});