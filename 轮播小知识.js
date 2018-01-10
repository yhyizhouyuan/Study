//轮播图
//初始定义
var adNode = $("#ad_imgs li"),
    pagesNode = $("#pages li");

adNode.eq(0).show().siblings().hide();
pagesNode.eq(0).addClass("selected");

//手动焦点
    pagesNode.each(function(index){
    	var liNode = $(this); 
    	liNode.mouseover(function(){
    		liNode.addClass("selected").siblings().removeClass("selected");
    		var index = liNode.index();
    		// alert(index);
    		adNode.eq(index).fadeIn(300).siblings().fadeOut(30);
    	})

    });
 
 //点击左右按钮播放
       $("#ad_loop_btn .prev").click(function(){
            	i--;
                if(i == -1){
                	i = 4;
                }
            	adNode.eq(i).fadeIn(300).siblings().fadeOut(300);
            	pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");     
       });
       $("#ad_loop_btn .next").click(function(){
            autoplay();
       });

//自动轮播
    var i = 0;
    var timer = setInterval(autoplay,3000);
    //核心向右运动函数
    function autoplay(){
    	i++;
        if(i == 5){
        	i = 0
        }
    	adNode.eq(i).fadeIn(300).siblings().fadeOut(300);
    	pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");
    }

    $("#ad_loop,#ad_loop_btn").hover(function(){
    	clearInterval(timer);
    },function(){
    	// alert("111");
    	timer = setInterval(autoplay,3000);
    });






//小米明星单品

   $("#star_next,#star_prev").click(function(){
   	 auto();
   });


//自动轮播
   var timer2 = setInterval(auto,4000),
       a = 0;
    
   function auto(){
   	  $("#star_right .selected").removeClass("selected").siblings().addClass("selected");
    if(a == 0){
   	  $("#star_content").animate({"left":"-1225px"},1000);
   	  a = 1;
   	}else{
      $("#star_content").animate({"left":"0px"},1000);
      a = 0;
   	}
   }

  //鼠标经过，停止自动轮播
  
   $("#star").hover(function(){
   	   clearInterval(timer2);
   },function(){
       timer2 = setInterval(auto,4000);
   });