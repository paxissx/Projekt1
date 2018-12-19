$(document).ready(function(){

        $(".main li").hover(function(){
            $(".child", this).slideDown(100);
        }, function(){
            $(".child", this).stop().slideUp(100);
        });

});
