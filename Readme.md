### 一款简单的图片加载插件

#### 调用方法 

	<script type="text/javascript">
	    document.addEventListener("DOMContentLoaded", function(event) {         
	        imgLoader.loadAllImages({
	            loadingSpeedUi : document.getElementById('loadingSpeed'), // 显示图片加载速度的UI
	            loadedCallBack : function(){ // 所有图片加载完成后需要做的事
	                document.getElementById('maincon').style.display="block"; 
	                document.getElementById('loadingPage').style.display="none";
	            }
	        });
	    });
	</script>

#### 特别说明

> 1. 这是一款功能还未完善的插件
> 2. 目前对于图片加载失败没有做任何操作
> 3. 是针对当前页面所有的图片进行的操作