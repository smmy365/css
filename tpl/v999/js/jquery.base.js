﻿islogin=0;
function checkcookie(){
	if(document.cookie.indexOf('auth=')>=0){
		islogin=1;
		return true;
	}
	return false;
}
checkcookie();
$(function($){
    $.fn.changeList = function(options){	
        var defaults = {
                    tag : 'li', // tab name
                    subName : '.utilTabSub', // sub class name
                    eventType : 'click', // event type
                    num : 4,
                    showType : 'show' // show effect type
                },
                opts = $.extend({}, defaults, options),
                that = $(this),
                subUl = that.find(opts.subName),
                subItems = subUl.find('li'),
                size = subItems.length,
                liW = subItems.outerWidth(true),
                ulW = liW * size,
                page = size + 1,
                n = opts.num,
                randNum = 0,
                m = 0;

        if(size > n){
            that.find(opts.tag)[opts.eventType](function() {
                randNum = mathRand(n, size);
                subItems.hide();
                $.each(randNum, function (i, el) {
                    subItems.eq(el).fadeIn(800);
                });
            });
        }
    };
}(jQuery));
$(document).ready(function(){
			$(window).on('scroll',function(){
		var st = $(document).scrollTop();
		if( st>0 ){
			if( $('#main-container').length != 0  ){
				var w = $(window).width(),mw = $('#main-container').width();
				if( (w-mw)/2 > 70 )
					$('#index-top').css({'left':(w-mw)/2+mw+20});
				else{
					$('#index-top').css({'left':'auto'});
				}
			}
			$('#index-top').fadeIn(function(){
				$(this).removeClass('wmin');
			});
		}else{
			$('#index-top').fadeOut(function(){
				$(this).addClass('wmin');
			});
		}	
	});
	$('#index-top .top').on('click',function(){
		$('html,body').animate({'scrollTop':0},500);
	});
	$('#index-top .qrcode_box').hover(function(){
		$('#index-top .qrcode').removeClass('wmin');
	},function(){
		$('#index-top .qrcode').addClass('wmin');
	});					   
    var prevpage=$("#pre").attr("href"); 
    var nextpage=$("#next").attr("href"); 
    $("body").keydown(function(event){ 
      if(event.keyCode==37 && prevpage!=undefined) location=prevpage; 
      if(event.keyCode==39 && nextpage!=undefined) location=nextpage; 
    }); 
	$("#code").qrcode({
	render: "table", //table方式
	width: 150, //宽度
	height:150, //高度
	text: Siteurl //任意内容
    });	
	$("#ncode").qrcode({
	render: "table", //table方式
	width: 150, //宽度
	height:150, //高度
	text: Mvodurl //任意内容
    });	
	 timer2 = null;
   $(".qr-code-ico").hover(function(){
        clearTimeout(timer2);
        $(this).addClass("qr-code-ico-hover");
        $(".qr-code").show();
    },function(){
        $(this).removeClass("qr-code-ico-hover");
        timer2 = setTimeout($.proxy(function() {
            $(".qr-code").hide();
        }, this),100);
    });
	$(".qr-code").hover(function(){
		clearTimeout(timer2);
		$(this).show();
	},function(){
		$(this).hide();
	});	
	//内容页面播放列表切换
	$(".play-title ul li a").each(function(j,div){
			$(this).click(function(){
		//$("html,body").animate({scrollTop:$("#"+listid).offset().top}, 500); //我要平滑
		        if ($(this).parent().hasClass("current") ){
					return;
                }
				$(this).parent().nextAll().removeClass("current");
				$(this).parent().prevAll().removeClass("current");
				$(this).parent().addClass("current")
				$('.details-con2-body').hide().css("opacity",0);
				$('.details-con2-body:eq('+j+')').show().animate({"opacity":"1"});
	});		
	});
//内容播放页面排序
  $('.order a').click(function(){
		if($(this).hasClass('asc')){
			$(this).removeClass('asc').addClass('desc').text('降序');
		}else{
			$(this).removeClass('desc').addClass('asc').text('升序');
		}
		var a=$('.play-box:eq('+$(this).attr('data')+') .player_list');
		var b=$('.play-box:eq('+$(this).attr('data')+') .player_list a');
		a.html(b.get().reverse());
	});

$(".play-tool span.s1").click(function() {					 
		$html = $(this).html();
		try {
			if ($html == '关灯') {
				$(this).html('开灯')
			} else {
				$(this).html('关灯')
			}
		} catch (e) {}
		$(".playopen").toggle(300);
		$(".play-tool").toggleClass("son");
		$(".player-box").toggleClass("top")
	});
	$(".play-tool span.s2").click(function() {
		$html = $(this).html();
		try {
			if ($html == '关闭广告') {
				$(this).html('显示广告')
			} else {
				$(this).html('关闭广告')
			}
		} catch (e) {}
		$(".player-right").toggleClass("adon");
		$(".player_zanpian ").toggleClass("playall");
		$(".player_zanpian ").toggleClass("w900");
		$(this).toggleClass("son")
	});	
	$(".player-num .info").click(function() {	
		$html = $(this).html();
		$(".player-vinfo").toggle(300);
		$(".player-num a.info").toggleClass("on");
	});
	$(".els-ico a.s-btn").click(function() {	
		$html = $(this).html();
		$(".els-sharebox").toggle(300);
		$(".els-ico a.s-btn").toggleClass("on");
		if (window.clipboardData) {
	    $("#tips").hide();		
		}
	});
    //播放记录
	$("#nav-looked").hover(function(){		
		$(this).find(".header_looked").show(300);
	},function(){
		$(this).find(".header_looked").hide(300);
	});	
	$(".close-his").click(function(){
		$(this).parents(".header_looked").hide();
	});
	//登录
   $("#loginbarx").hover(function(){
        clearTimeout(timer2);
        $(".drop-box").show();
    },function(){
        timer2 = setTimeout($.proxy(function() {
            $(".drop-box").hide();
        }, this),100);
    });
// 下载展开收缩
		if($("#downul").length > 0)
	{
		if($("#downul")[0].scrollHeight>305)
		{
			$("#downzk").show();
			$("#downul").height(230);
			$("#downzk").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').text('展开全部');
		}else{
			$(this).removeClass('zk').addClass('ss').text('收缩部分');
		}						
				if($("#downul").height()>305)
				{
					var h = $("#downul")[0].scrollHeight;
					$("#downul").height(230);
					
				}
				else
				{
					var h = $("#downul")[0].scrollHeight;
					$("#downul").height(h);
				}
				e.preventDefault(); 
			});
		}
	}
		$("#loginbarx").hover(function(){		
		$(this).find(".drop-box").show();
	},function(){
		$(this).find(".drop-box").hide();
	});	
	$("#login2").click(function(){								
		$.colorbox({
        inline: true,
        href: "#login-dialog",
        width: '570px',
		height: '415px'

    });});	
  /**表情***/
    if ($(".emotion").length > 0) {
        $(".emotion").on('click', function(){
            var left = $(this).offset().left;
            var top = $(this).offset().top;
            var id = $(this).attr("data-id");
            $("#smileBoxOuter").css({
                "left": left,
                "top": top + 20
            }).show().attr("data-id", id)
        });
        $("#smileBoxOuter,.emotion").hover(function() {
            $("#smileBoxOuter").attr("is-hover", 1)
        },
                function() {
                    $("#smileBoxOuter").attr("is-hover", 0)
                });
        $(".emotion,#smileBoxOuter").blur(function() {
            var is_hover = $("#smileBoxOuter").attr("is-hover");
            if (is_hover != 1) {
                $("#smileBoxOuter").hide()
            }
        });
        $(".smileBox").find("a").click(function() {
            var textarea_id = $("#smileBoxOuter").attr("data-id");
            var textarea_obj = $("#reply_" + textarea_id).find("textarea");
            var textarea_val = textarea_obj.val();
            if (textarea_val == "发布评论") {
                textarea_obj.val("")
            }
            var title = "[" + $(this).attr("title") + "]";
            textarea_obj.val(textarea_obj.val() + title).focus();
            $("#smileBoxOuter").hide()
        });
        $("#smileBoxOuter").find(".smilePage").children("a").click(function() {
            $(this).addClass("current").siblings("a").removeClass("current");
            var index = $(this).index();
            $("#smileBoxOuter").find(".smileBox").eq(index).show().siblings(".smileBox").hide()
        });
        $(".comment_blockquote").hover(function() {
            $(".comment_action_sub").css({
                "visibility": "hidden"
            });
            $(this).find(".comment_action_sub").css({
                "visibility": "visible"
            })
        }, function() {
            $(".comment_action_sub").css({
                "visibility": "hidden"
            })
        })
    }		
});
// 全站通栏模块切换
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.style.display=i==cursel?"block":"none";
	}
}