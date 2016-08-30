(function(){

	/*this.imgLoader = {};

	imgLoader.options= {
		loadingElement:document.getElementById('loadingSpeed');
	};*/

	var imagesLoaded = function(options){
		/*if(null!=options){
			var loadingIcon = options.loadingIcon || imgLoader.options.loadingIcon;
		}else{
			var loadingIcon =  imgLoader.options.loadingIcon;
		}
		*/


		var images = document.getElementsByTagName('img'); // 获取页面上所有的img 元素
		var imgLength = images.length; // 获取图片的张数
		var imageStatus = {
		    "loaded":0,
		    "imgLength":imgLength
		}

		loadAllImg();

		
		function loadAllImg(){     
		    for( i = 0; i < imgLength; i++) { // 获取图片的路径，将其存入数组，并将页面上图片路径设为空
		        loadEveryImg(images[i],imageStatus); // 依次加载每张图片
		    }
		};

		function loadEveryImg(srcImg,imageStatus){
			var loadimg = srcImg;
			var src = loadimg.getAttribute('src'); // 获取当前图片的路径
			srcImg.src = ""; // 将页面上图片路径设为空
			var img = new Image(); // 创建一个Image对象
		    img.src = src;  // 定义Image对象的src , 这样做就相当于给浏览器缓存了一张图片
		    srcImg.src = src ; // 重新将路径设置到当前图片 
		    img.onload = function(){ // 图片加载成功
		    	imgLoadedSuccess(); // Todo
		    }
		    img.onerror = function(){ // 图片加载失败
		    	imgLoadedError(); // Todo
		    }
			var imgLoadedSuccess ;
			var imgLoadedError ;
			imgLoadedSuccess = imgLoadedError = function(){
				imageStatus.loaded = imageStatus.loaded +1;
		        updateUI(document.getElementById('loadingSpeed'),imageStatus.loaded,imageStatus.imgLength);
			}    
		};



		function updateUI(loadingIconElement,Loadedcount,total){
		    var loadingSpeed = loadingIconElement; // 获取显示图片加载速度的dom标签 
		    var speed = parseInt( Loadedcount / ( total - 1 ) * 100) ; 
		    loadingSpeed.innerHTML = speed + "%";
		    if(speed == 100){
		        showPage();
		    }
		}

		function showPage(){
			document.getElementById('maincon').style.display="block";
    		document.getElementById('loadingPage').style.display="none";
		}
	};

	var imgLoader = this.imgLoader = {
		loadAllImages : imagesLoaded
	}


	return this.imgLoader;
	
})();

