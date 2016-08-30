(function(){

    var root = this;
    alert(root);

    var hellofun = function(){
        alert(loader.name);
    };

    var loader = this.loader = {
        lazyLoadAllImages:hellofun,
        cool:true,
        name:"zhoujia"
    }

    return loader;
})();


(function(){alert(this);})();


loader.lazyLoadAllImages();



document.addEventListener("DOMContentLoaded", function(event) {         
    lazyLoadImage();
});

var images = document.getElementsByTagName('img'); // 获取页面上所有的img 元素
var imgLength = images.length; // 获取图片的张数

var imageStatus = {
    "loaded":0,
    "imgLength":imgLength
}

function lazyLoadImage(){     
    for( i = 0; i < imgLength; i++) { // 获取图片的路径，将其存入数组，并将页面上图片路径设为空
        loadImage(images[i],imageStatus);
    }
}

function updateUI(Loadedcount,total){
    var loadingSpeed = document.getElementById('loadingSpeed'); // 获取显示图片加载速度的dom标签 
    var speed = parseInt( Loadedcount / ( total - 1 ) * 100) ; 
    loadingSpeed.innerHTML = speed + "%";
    if(speed==100){
        showPage();
    }
}

function loadImage(srcImg,imageStatus){
    var loadImg = srcImg;
    var src = loadImg.getAttribute('src') ;
    srcImg.src = "";
    var img = new Image(); // 创建一个Image对象
    img.src = src;  // 定义Image对象的src , 这样做就相当于给浏览器缓存了一张图片
    srcImg.src = src ;
    /*if(img.complete){
        imageStatus.loaded = imageStatus.loaded +1;
        updateUI(imageStatus.loaded,imageStatus.imgLength);
    }else{

    }*/
        img.onload = function() {
            imageStatus.loaded = imageStatus.loaded +1;
            updateUI(imageStatus.loaded,imageStatus.imgLength);
        }
        img.onerror = function() {
            imageStatus.loaded = imageStatus.loaded +1;
            updateUI(imageStatus.loaded,imageStatus.imgLength);
        }
    return;
}   

function showPage(){
    document.getElementById('maincon').style.display="block";
    document.getElementById('loadingPage').style.display="none";
} 