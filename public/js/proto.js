
        /*全屏操作的方法和属性:
        *1.requestFullScreen():开启全屏显示
        *   不同浏览器需要添加不同的前缀
        *   chrome:webkit firefox:moz ie:ms opera:o
        *2.cancelFullScreen():退出全屏显示:也添加前缀,在不同的浏览器下,退出全屏
        只能使用document来实现,是整个文档退出全屏,而不是元素退出全屏
        *3.fullScreenElement:是否是全屏状态 , 也只能使用document进行判断*/
        /**/
        // div = document.querySelector('div');
    
    window.onload=function(){
        var div = document.querySelector('div');
        /*添加三个按钮的点击事件*/
        /*全屏操作*/
        // function is(){
        //     if(/webkit/i){
        //         return div.webkitRequestFullScreen;
        //     }else if(/moz/i){
        //         return div.mozRequestFullScreen;
        //     }else if(/ms/i){
        //         return div.msRequestFullScreen;
        //     }else if(/o/i){
        //         return div.oRequestFullScreen;
        //     }
        // }

        document.querySelector('#full').onclick=function(){
            /*div.requestFullscreen();*/ 
            /*使用能力测试添加不同浏览器下的前缀*/ 
            // div.mozRequestFullScreen();
            if(div.requestFullScreen){
                div.requestFullScreen();
            }else if(div.webkitRequestFullScreen){
                div.webkitRequestFullScreen();
            }else if(div.msRequestFullScreen){
                div.msRequestFullScreen();
            }else if(div.oRequestFullScreen){
                div.oRequestFullScreen();
            }else if(div.mozRequestFullScreen){
                div.mozRequestFullScreen();
            }
        
            // if(is()){
            //     div.webkitRequestFullScreen();
            // }else if(is()){
            //     div.mozRequestFullScreen();
            // }else if(is()){
            //     div.oRequestFullScreen();
            // }else if(is()){
            //     div.msRequestFullScreen();
            // }
        } 
        /*退出全屏显示*/ 
        document.querySelector('#cancelFull').onclick=function(){
            /**/ 
            if(document.cancelFullScreen){
                document.cancelFullScreen();
            }else if(document.webkitCancelFullScreen){
                document.webkitCancelFullScreen();
            }else if(document.msCancelFullScreen){
                document.msCancelFullScreen();
            }else if(document.oCancelFullScreen){
                document.oCancelFullScreen();
            }else if(document.mozCancelFullScreen){
                document.mozCancelFullScreen();
            }
        }
        /*判断是否是全屏状态*/ 
        document.querySelector('#isFull').onclick=function(){
            /*两个细节： 使用document判断 能力测试*/ 
            if(document.fullscreenElement || document.webkitFullscreenElement
             || document.mozFullScreenElement || document.msFullscreenElement 
             || document.oFullscreenElement){
                alert(true);
            }else{
                alert(false);
            }
        }
    }
