$(document).ready(function(){
	
	//初始化变量
	var code = "";
	var require;
		
	$('.e-next').click(function(){
			if($(this).hasClass('team02')){
				$('.e-team-group div').eq(1).fadeOut(300,function(){
					$('.e-team-group div').eq(2).fadeIn(300)
					$('.e-next').removeClass('team02').addClass('team03')
				})
			}else if($('.e-next').hasClass('team03')){
				$('.e-team-group div').eq(2).fadeOut(300,function(){
					$('.e-team-group div').eq(0).fadeIn(300)
					$('.e-next').removeClass('team03')
				})
			}else{
				$('.e-team-group div').eq(0).fadeOut(300,function(){
					$('.e-team-group div').eq(1).fadeIn(300)
					$('.e-next').addClass('team02')
					})
			}
		})
		
	$('.e-team-group ul li').click(function(){
			$('.e-team-group ul li').find('span.team-active').hide();
			$(this).find('span.team-active').show();
			code = $(this).attr('data-code');
			$('.e-shirt').attr('src', "../../images/o2o/slider/defult/"+code+".jpg");
			
			var tShirtImage = $('.e-shirt').get()[0];
			tShirtImage.onload=hideProgress;				
			tShirtImage.onreadystatechange=hideProgress;
			showProgress();
		})
		
		
	//点击马上购买按钮进行页面转换
	$('.e-buynow').click(function(){
		$('.e-page01').hide(0,function(){
			$('.e-page02').fadeIn(200)
			})
		})
		
	//点击关闭按钮返回第一页
	//$('.e-page02-close').click(function(){
//		$('.e-page02').fadeOut(500)
//		})
		
		
	// 验证表单
		function testForm() {
				var english = $('.e-shirt-english').val();
				var number = $('.e-shirt-number').val();
				var size = $('.size').find("option:selected").text();
				var re = new RegExp("^[a-z,A-Z]+$");
				require= english!="" && number!="" && number>0 && number<100 && size !="尺码" && (re.test(english)) && english.length<=10;
				if( !re.test(english) || english=="" || english.length>10) {
					$('.e-shirt-english').siblings('span').addClass('error'); 
				}
				else {
					$('.e-shirt-english').siblings('span').removeClass('error'); 
				}
				if(number=="" || number<0 || number>99) {
					$('.e-shirt-number').siblings('span').addClass('error');
				}
				else {
					$('.e-shirt-number').siblings('span').removeClass('error');
				}
		}
		
	 // preview btn click 生成对应球衣		
		$('.e-preview').live('click', function(shirtName, shirtNumber) {
			
			if($('.e-team-group ul li span').is(':visible')){
					
					//判别是否有选中球队
					$('.e-close').removeClass('active');  //弹层关闭按钮刚开始隐藏
					testForm();  // 验证表单
					if (require) {  
						$('.wram').hide();
						var tShirtImage = $('.e-shirt').get()[0];
						tShirtImage.onload=hideProgress;				
						tShirtImage.onreadystatechange=hideProgress;
	
						// 当图片加载时间太久 ，pop button 出现
						setTimeout(function() {
							$('.e-close').addClass('active');
						}, 15000);	
										
						var shirtName = $('.e-shirt-english').val(), shirtNumber = $('.e-shirt-number').val(), teamCode = $("#teamCode").val();
						shirtTd = "http://images.fanatics.com/lf?set=key[name],value[" + shirtName + "]&set=key[number],value[" + shirtNumber + "]&call=url[http://dmimages.ff.p10/chains/" + code
								+ ".txt]&scale=size[400]&sink";
						showProgress();
						$('.e-shirt').attr('src', shirtTd);	
					}
				}else{
					$('.e-pop-msg').fadeIn(300).delay(1500).fadeOut(300);
					}
				
		});
		
		// 当图片加载未完成时
		function showProgress(){
			$('.e-pop-con').show();
		};
		// 当图片加载完成时
		function hideProgress(){			
			$('.e-pop-con').hide();
		};
		
		// 弹出层关闭按钮
		$('.e-pop-close').click(function(event) {
			$('.e-pop-con').fadeOut(400);
		});
		
		// 确定定制按钮点击生成二维码
		$('.e-sure-made').click(function(event) {
			if($('.e-team-group ul li span').is(':visible')){
					testForm();  // 验证表单
					if (require) {
						$('.e-panel-id').fadeOut(0);
						$('.e-panel-qr').fadeIn(0);
						}
				}else{
					$('.e-pop-msg').fadeIn(300).delay(1500).fadeOut(300);}
		});
		
		//重新定制
		$('.e-rebook').click(function(){
				$('.e-panel-qr').fadeOut(0);
				$('.e-panel-id').fadeIn(0);
			})
});
       
	
    


	 
