$(function(){
    var mt =$('.mainWrap .main .tab h4');
    var mtb =$('.mainWrap .main .tab h4');
    var mg =$('.mainWrap .main .mainGroup');
    var c1i =$('.cntWrap .content.cnt01 section .artView .artGroup');
    var c1bg =$('.cntWrap .content.cnt01 section .bgView .bgGroup');
    var c1btn =$('.cntWrap .content.cnt01 section .btns .btn');
    var c3g=$('.cntWrap .content.cnt03 section .thumb .thumbGroup');
    var c3btn=$('.cntWrap .content.cnt03 section .btns .btn');
    var c3i=$('.cntWrap .content.cnt03 section .thumnail .image');
    var c3t=$('.cntWrap .content.cnt03 section .thumnail .text');
    var c3ai=$('.cntWrap .content.cnt03 section .thumb .thumbGroup article');
    var c4mG=$('.cntWrap .content.cnt04 section .artView .artGroup .microGroup');
    var c4vG=$('.cntWrap .content.cnt04 section .artView .artGroup .videoGroup');
    var c4tb=$('.cntWrap .content.cnt04 header .tab .tabBtn');
    var c4Btn=$('.cntWrap .content.cnt04 section .btn');


    var ind=0;
    var h4 = 0;
    var h3 = 0;
    var h5 = 0;
    var p =0;
    var thumb =0;
    

    mt.click(function(){
        ind = $(this).index();
        mg.css({marginLeft : ind*-100+'%'});
        mt.css({color: '#fff'});
        mtb.removeClass('on');
        $(this).addClass('on');
    });


    c1i.css({marginLeft : -20+'%'});

    c1bg.css({marginLeft : -100+'%'});

    c1btn.eq(0).click(function(){
        c1i.animate({
            marginLeft : -40+'%'
        },500,function(){
            c1i.find('article:first').appendTo(c1i);
            c1i.css({marginLeft : -20+'%'});
        });

        c1bg.animate({
            marginLeft : -200+'%'
        },500,function(){
            c1bg.find('article:first').appendTo(c1bg);
            c1bg.css({marginLeft : -100+'%'});
        });
    });

    c1btn.eq(1).click(function(){
        c1i.animate({
            marginLeft : 0+'%'
        },500,function(){
            c1i.find('article:last').prependTo(c1i);
            c1i.css({marginLeft : -20+'%'});
        });

        c1bg.animate({
            marginLeft : 0+'%'
        },500,function(){
            c1bg.find('article:last').prependTo(c1bg);
            c1bg.css({marginLeft : -100+'%'});
        });
    });



    c3g.css({marginLeft : -32+'%'});

    c3btn.first().click(function(){
        c3g.animate({
            marginLeft : -64+'%'
        },500,function(){
            c3g.find('article:first').appendTo(c3g);
            c3g.css({marginLeft : -32+'%'});
        });
    });

    c3btn.last().click(function(){
        c3g.animate({
            marginLeft : 0+'%'
        },500,function(){
            c3g.find('article:last').prependTo(c3g);
            c3g.css({marginLeft : -32+'%'});
        });
    });

    
    
    c3ai.click(function(){
        thumb=$(this).find('.image').css('backgroundImage');
        c3i.css({backgroundImage: thumb});
        h4 = $(this).find('.text h4').text();
        h3 = $(this).find('.text h3').text();
        h5 = $(this).find('.text h5').text();
        p = $(this).find('.text p').text();
        c3t.find('h4').text(h4);
        c3t.find('h5').text(h5);
        c3t.find('h3').text(h3);
        c3t.find('p').text(p);
    });

    c4tb.first().css({color:'#fe0'});
    c4mG.addClass('turn');
    c4tb.first().click(function(){
        c4vG.removeClass('show');
        c4mG.addClass('turn');
        
        $(this).css({color:'#fe0'});
        c4tb.last().css({color:'#fff'});
    });
    
    c4tb.last().click(function(){
        c4mG.removeClass('turn');
        c4vG.addClass('show');
        
        $(this).css({color:'#fe0'});
        c4tb.first().css({color:'#fff'});
    });


    c4mG.css({marginLeft: -36+'%'});
    c4vG.css({marginLeft: -36+'%'});

    c4Btn.click(function(){
        c4mG.animate({
            marginLeft : -72+'%'
        },500,function(){
            c4mG.find('article:first').appendTo(c4mG);
            c4mG.css({marginLeft : -36+'%'});
        });

        c4vG.animate({
            marginLeft : -72+'%'
        },500,function(){
            c4vG.find('article:first').appendTo(c4vG);
            c4vG.css({marginLeft : -36+'%'});
        });
    });

});