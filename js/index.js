    $(function(){
        $(".title h1").on("click",function(){
        	$(".title").addClass("start");
        })

		//qq空间的图片效果
		$(".products li").on("click",function(e){
            e.preventDefault();
            $('.cart').addClass('show');
            /*this的指向是上面的li，find方法是寻找子元素 获取元素的地址*/
            var src=$(this).find('img').attr('src')

            $('.cart img').attr('src',src);

            $('.cart').attr('index',$(this).index());
		    $(".btnLeft").css({opacity:1});
            $(".btnRight").css({opacity:1});
		})

		$('.cart .close').on('click',function(e){
			e.stopPropagation();//阻止冒泡
			$('.cart').removeClass('show');
			$(".btnLeft").css({opacity:0});
            $(".btnRight").css({opacity:0});
		})

		var imgs=$(".products img");//取出图片的集合
		$('.cart').on('mousedown',function(e){
			e.preventDefault();
		})
        

        $('.btnLeft').on('click',function(e){      //往下切换图片
        	// alert(1)
			/*把当前图片的地址记录到index里面*/
			var index=parseInt($(".cart").attr('index'));
			if(e.clientX>$(".cart").outerWidth(true)/2){
				index+=1;
			}else{
				index-=1;
			}
			if(index===imgs.length){
				$('.messageBox1').addClass('xiaoShi');
				setTimeout(function(){
					$('.messageBox1').removeClass('xiaoShi');
				},2000)
				return;
			}

			if(index===-1){
				$('.messageBox2').addClass("xiaoShi");
				setTimeout(function(){
					$('.messageBox2').removeClass("xiaoShi");
				},2000)
				return;
			}

            var src=imgs.eq(index).attr('src');
            $('.cart').attr('index',index);
			$('.cart img').attr('src',src);
		})

		$('.btnRight').on('click',function(e){      //往下切换图片
        	// alert(1)
			/*把当前图片的地址记录到index里面*/
			var index=parseInt($(".cart").attr('index'));
			if(e.clientX>$(".cart").outerWidth(true)/2){
				index+=1;
			}else{
				index-=1;
			}
			if(index===imgs.length){
				$('.messageBox1').addClass('xiaoShi');
				setTimeout(function(){
					$('.messageBox1').removeClass('xiaoShi');
				},2000)
				return;
			}

			if(index===-1){
				$('.messageBox2').addClass("xiaoShi");
				setTimeout(function(){
					$('.messageBox2').removeClass("xiaoShi");
				},2000)
				return;
			}

            var src=imgs.eq(index).attr('src');
            $('.cart').attr('index',index);
			$('.cart img').attr('src',src);
		})
        
        //多批图片更换*/  
        var next=[
	        {img:"./img/1.JPG",link:"http:baidu.com"},
	        {img:"./img/2.JPG",link:"http:baidu.com"},
	        {img:'./img/3.JPG',link:"http:baidu.com"},
	        {img:'./img/4.JPG',link:"http:baidu.com"},
	        {img:'./img/5.JPG',link:"http:baidu.com"},
	        {img:'./img/6.JPG',link:"http:baidu.com"},
	        {img:'./img/7.JPG',link:"http:baidu.com"},
	        {img:'./img/8.JPG',link:"http:baidu.com"},

	        {img:'./img/9.jpg',link:"http:baidu.com"},
	        {img:'./img/10.jpg',link:"http:baidu.com"},
	        {img:'./img/11.jpg',link:"http:baidu.com"},
	        {img:'./img/12.jpg',link:"http:baidu.com"},
	        {img:'./img/13.jpg',link:"http:baidu.com"},
	        {img:'./img/14.jpg',link:"http:baidu.com"},
	        {img:'./img/15.jpg',link:"http:baidu.com"},
	        {img:'./img/16.jpg',link:"http:baidu.com"},

	        {img:'./img/25.jpg',link:"http:baidu.com"},
	        {img:'./img/26.jpg',link:"http:baidu.com"},
	        {img:'./img/27.jpg',link:"http:baidu.com"},
	        {img:'./img/28.jpg',link:"http:baidu.com"},
	        {img:'./img/29.jpg',link:"http:baidu.com"},
	        {img:'./img/30.jpg',link:"http:baidu.com"},
	        {img:'./img/31.jpg',link:"http:baidu.com"},
	        {img:'./img/32.jpg',link:"http:baidu.com"}
	    ]
	    $('.products .button').on('click',function(){
	    	//图片的更换获取和设置
	    	$('.products img').attr('src',function(i){
	    		return next[i].img;
	    	});
	    	//图片的连接的获取和设置
	    	$('.products a').attr('href',function(i){
	    		return next[i].link;
	    	})
	    })
	})