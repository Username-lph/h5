$(function(){
    /*兼容性解决方案*/ 

    //进入全屏
    function requestFullScreen() {
        var de = document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
    }
    //退出全屏
    function exitFullscreen() {
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }

    document.body.addEventListener('click',function(){
        requestFullScreen();
        //5秒钟自动退出全屏
        setTimeout(function(){
            exitFullscreen();
        },5000);
    },false);

    /*判断是否是全屏状态*/ 
    // function isFullScreen(){
    //     var de = decument;
    //     if(de.fullscreenElement){
    //         de.fullscreenElement;
    //     } else if (de.webkitFullscreenElement){
    //         de.webkitFullscreenElement;
    //     } else if(de.msFullscreenElement){
    //         de.msFullscreenElement;
    //     } else if(de.oFullscreenElement){
    //         de.oFullscreenElement;
    //     } else if(de.mozFullScreenElement){
    //         de.mozFullScreenElement;
    //     }
    // }
    // $('#isFull').click(function(){
    //     if(isFullScreen()){
    //         alert(true);
    //     } else {
    //         alert(false);
    //     }
    // })
        // document.querySelector('#isFull').onclick=function(){
        //     /*两个细节： 使用document判断 能力测试*/ 
        //     if(document.fullscreenElement || document.webkitFullscreenElement
        //      || document.mozFullScreenElement || document.msFullscreenElement 
        //      || document.oFullscreenElement){
        //         alert(true);
        //     }else{
        //         alert(false);
        //     }
        // }
})