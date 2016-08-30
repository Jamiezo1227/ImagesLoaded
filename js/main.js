$(document).ready(function(){
	
	//禁止火狐下拖动页面内图片
	document.ondragstart=function() {return false;}
	
	//初始化变量
	var code = "";
	var require;


	// 页面图片加载完成之前显示loading
	function loadingPage() {
		var loaded = 0;
		var imgLength = $('body img').length;
		if(imgLength == 0 ) {
			showPage();
		}else {
			$('body img').imagesLoaded().progress(function(instance,image){
				loaded++;
				var loadedW = parseInt(loaded / instance.images.length *100);
				//$('.e-page-loading-pop div.speed').css({width:loadedW + '%'},20);
				$('.e-page-loading-pop span.text').text('Loading  '+ loadedW +'%')
				if (loaded == instance.images.length) {
					setTimeout(function(){showPage();},2000);
				}
			});
		}
	}

	
	
	//custome page effs
	//home to team
	function customeToTeam(){
		$('.e-custome-start').click(function(){
			$('.e-custome-home').hide(0,function(){
				$('.e-custome').show();
				});
			});
		};
	 customeToTeam();
	 
	//change the view of custome team logo
	function cusChangeView(){
		$('.e-custome-view').click(function(){
			$('.e-custome-team ul li').toggleClass('active');
			});
		};		
	cusChangeView();
	
	//展示对应球队默认图片
	$('.e-custome-team ul li').click(function(){
			$('.e-custome').hide(0,function(){
				$('.e-custome-step').show()
				})
			code = $(this).attr('data-code');
			$('.e-custome-preview img').attr('src', "images/customize/defult/"+code+".jpg");
			$('.e-custome-sizes ul li img').attr('src', "images/customize/size/"+code+".png");
			
			var tShirtImage = $('.e-custome-preview img').get()[0];
		})
		
	//点击返回选择球队	
	$('.e-custome-backtoteam').click(function(){
			$('.e-shirt-english,.e-shirt-number').attr("value","");
			$('.e-custome-step').hide(0,function(){
				$('.e-custome').show()
				})
			$('.e-custome-qr').hide(0,function(){
				$('.e-custome-preview').show()
				})
		})
	
	//点击选择不同尺寸	
	$('.e-custome-sizes ul li').click(function(){
		$('.e-custome-sizes ul li').removeClass('active');
		$(this).addClass('active');
		})
		
		
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
		
		
	// 验证表单
		function testForm() {
				var english = $('.e-shirt-english').val();
				var number = $('.e-shirt-number').val();
				var size = $('.size').find("option:selected").text();
				var re = /^[a-z,A-Z,\s]+$/;
				require= english!="" && number!="" && number>=0 && number<100 && size !="尺码" && (re.test(english)) && english.length<=10;
				if( !re.test(english) || english=="" || english.length>10) {
					$('.e-shirt-english').siblings('p').addClass('error'); 
				}
				else {
					$('.e-shirt-english').siblings('p').removeClass('error'); 
				}
				if(number=="" || number<0 || number>99) {
					$('.e-shirt-number').siblings('p').addClass('error');
				}
				else {
					$('.e-shirt-number').siblings('p').removeClass('error');
				}
		}
		
		
	// preview btn click 生成对应球衣		
		$('.e-custome-previewbtn').live('click', function(shirtName, shirtNumber) {
				$('.e-custome-qr').hide(0,function(){
					$('.e-custome-preview').show()
					})
					testForm();  // 验证表单
					if (require) {  
						$('.wram').hide();
						var tShirtImage = $('.e-custome-preview img').get()[0];
						tShirtImage.onload=hideProgress;				
						tShirtImage.onreadystatechange=hideProgress;
	
						// 当图片加载时间太久 ，pop button 出现
						setTimeout(function() {
							$('.e-close').addClass('active');
						}, 15000);	
										
						var shirtName = $('.e-shirt-english').val(), shirtNumber = $('.e-shirt-number').val(), teamCode = $("#teamCode").val();
						shirtTd = "http://images.fanatics.com/lf?set=key[name],value[" + shirtName + "]&set=key[number],value[" + shirtNumber + "]&call=url[http://dmimages.ff.p10/chains/" + code+ ".txt]&scale=size[800]&sink";
						showProgress();
						$('.e-custome-preview img').attr('src', shirtTd);
					}
			//sizeAttention();
				
				
		});

	function sizeAttention(){
		$('.e-custome-sizeattention').fadeIn(200).delay(3000).fadeOut(200);

	}
	
	$('.e-custome-confirm').click(function(){
		testForm();  // 验证表单
		if(require){
			$('.e-custome-preview').hide(0,function(){
				$('.e-custome-qr').show();
				});
			}
		})
		
		
	$('.e-storewide-jersey ul li').click(function(){
		$('.e-storewide-detail').show(0,function(){
			$('.e-storewide-jersey').hide();
			})
		})
			
	$('.e-webcam-borders span.pre').click(function(){
		var a=$(this).parent().find('ul:visible').index();
		var b=$(this).parent().find('ul').length;
		//console.log(a,b)
		if(a<=b){
			$(this).parent().find('ul').hide(0,function(){
				$(this).parent().find('ul').eq(a-2).show()
				$('.e-webcam-borders span.next').show()
				});
			}if(a==b-1){
				$('.e-webcam-borders span.pre').hide()
				}
		})
	$('.e-webcam-borders span.next').click(function(){
		var a=$(this).parent().find('ul:visible').index();
		var b=$(this).parent().find('ul').length;
		if(a<b){
			$(this).parent().find('ul').hide(0,function(){
				$(this).parent().find('ul').eq(a).show()
				$('.e-webcam-borders span.pre').show()
				}
			
			);
			}if(a==b-1){
				$('.e-webcam-borders span.next').hide()
				}
		})
	$('.e-storewide-back').click(function(){
		$('.e-storewide-jersey').show(0,function(){
			$('.e-storewide-detail').hide();
			})
		
		})
		


window.addEventListener("DOMContentLoaded", function() {
	// Grab elements, create settings, etc.
	var canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	video = document.getElementById("video");
	videoObj = {
		"video": true
	};
	errBack = function(error) {
		console.log("Video capture error: ", error.code);
	};
	// Put video listeners into place
	if (navigator.getUserMedia) { // Standard
		navigator.getUserMedia(videoObj, function(stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(videoObj, function(stream) {
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	} else if (navigator.mozGetUserMedia) { // Firefox-prefixed
		navigator.mozGetUserMedia(videoObj, function(stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}
	
	
	//set the small size canvas
	var canvasSmall = document.getElementById("canvas-small");
	contextSmall= canvasSmall.getContext("2d");



function addImage() {
	imgObj = new Image();
	imgObj.src = $('.e-webcam-borderview').attr('src');
	context.translate(1079, 0);
	context.scale(-1, 1);
	context.drawImage(imgObj, 0, 0, 740, 959);
	//darw the video screenshot on the small canvas
	contextSmall.translate(360, 0);
	contextSmall.scale(-1, 1);
	contextSmall.drawImage(imgObj, 0, 0,250,325);
}

// 触发拍照动作

$('.e-webcam-snap').click(function() {
	$(this).hide(0,function(){
		$('.e-webcam-txt').show(0)
		})
	context.clearRect(0, 0, canvas.width, canvas.height);
	var count = 5;
	$('.e-webcam-txt p span').text(count)
	var countdown = setInterval(countDown, 1000)

	function countDown() {
		$('.ui-webcam-controller ul li:last-of-type,.e-webcam-borders').addClass('mask');
		$(".e-webcam-snap").attr("disabled", true);
		count--;
		$('.e-webcam-txt p span').text(count)
		if (count == 0) {
			setTimeout(function() {
				$('.ui-webcam-controller ul li:last-of-type,.e-webcam-borders').removeClass('mask');
				$('.ui-action p span').text(0);
				$('.e-webcam-scan').show();
				clearInterval(countdown);
				context.translate(1079, 0);
				context.scale(-1, 1);
				context.drawImage(video, 0, 0, 1279, 959);
				
				contextSmall.translate(360, 0);
				contextSmall.scale(-1, 1);
				contextSmall.drawImage(video, 0, 0,420,325);
				addImage();
				$('.e-webcam-borderview,#video').hide();
				var imgSrc = document.getElementById("canvas-small").toDataURL("image/png");
				$('.e-webcam-final').attr('src', imgSrc);
				$('.e-webcam-txt').hide(0,function(){
					$('.e-webcam-txt02,.resnap').show();
					});
			}, 300);
		};
	};
});


$('.e-webcam-borders ul li img').click(function(){
	var count = 5;
	$('.e-webcam-txt p span').text(count);
	$('.e-webcam-txt02,.resnap,.e-webcam-txt').hide(0,function(){
		$('.e-webcam-snap').show();
		});
	$(".e-webcam-snap").removeAttr("disabled");
	context.drawImage(video, 0, 0, 740, 959);
	$('.e-webcam-borderview,#video').show();
	$('.e-webcam-scan').hide();
	var a=$(this).attr('src')
	$('.e-webcam-borderview').attr('src',a)
	})

$('.resnap').click(function(){
	var count = 5;
	$('.e-webcam-txt p span').text(count);
	$(this).hide(0);
	$('.e-webcam-txt02').hide(0,function(){
		//$('.e-webcam-txt').show();
		$('.e-webcam-snap').show();
		});
	$(".e-webcam-snap").removeAttr("disabled");
	context.drawImage(video, 0, 0, 740, 959);
	$('.e-webcam-borderview,#video').show();
	$('.e-webcam-scan').hide();
	})
	
	
})

	
	
}, false);