$("head").prepend("<title>啦啦啦</title>")
document.addEventListener('visibilitychange',function(){
    if( document.visibilityState == 'hidden' ){
        normal_title = document.title;
        document.title = '可爱的蓝精灵';
    }else{
        document.title = '美丽的蓝精灵';
        setTimeout(function(){
            document.title = normal_title;
        }, 1500)//数字越大时间越长
    }
});
