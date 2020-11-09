// 스크롤에 따른 요소의 넓이를 조절해보자
$(document).ready(function(){
    var document_h = $(document).height();
    var sele = $(".js-scroll");
    var sele_arr = [];
    $(document).find(sele).each(function(){
        sele_arr
    });
//3220 - 문서
//0, 2283 - 스크롤 길이

    $(document).scroll(function(){

        where_ami(".type-b");

    });
});

function where_ami(who){
    var scroll_t = $(window).scrollTop();
    var ele_h = $(who).outerHeight();
    var ele_T = $(who).offset().top;
    var area_start = ele_T;
    var area_end = ele_T + ele_h;

    if(scroll_t >= area_start && scroll_t <= area_end){
        console.log("b영역이다");
        console.log(area_start)
    }

}
