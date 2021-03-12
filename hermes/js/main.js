$(window).on("load resize", function () {
    var footerH = $('.footer').outerHeight();
    $('body').css('padding-bottom', footerH);

    header_fix();
});

    //스크롤시 헤더변경 - 클래스만 주면됨.
    function header_fix(){
        const head = document.getElementsByClassName('header')[0];
        window.addEventListener('scroll',function(){
            let scroll_t = window.scrollY;
            if(scroll_t > 50){
                head.classList.add('type-fixed')
            }else{
                head.classList.remove('type-fixed')
            }
        });
    }

    //리스트형 버튼에 클릭시 on 클래스 추가하기
    function btn_click(who){
        const parent = $(who).closest('li');
        parent.siblings().removeClass('on');
        $(parent).addClass('on');
    }

$(document).ready(function(){
    //섹션1에 슬라이드리스트 클릭시 슬라이드연동
    $('.slide-list__item').click(function() {
       var slideNo = ($(this).index())-1;
       if(slideNo !== -1){
           console.log(slideNo)
           $('.slider-for').slick('slickGoTo', slideNo);
       }
       btn_click($(this));
     });
     //섹션1에 슬라이드슬라이드리스트 클릭시 연동
     $(".slider-for").on('beforeChange',function(){
         let now_idx = $(".slider-for").find('.slick-current').attr('data-slick-index');
         now_idx = (parseInt(now_idx))+2;
         if(now_idx == 6){now_idx = 1}
         const btns = document.getElementsByClassName('slide-list__btn');
         btn_click(btns[now_idx])
     })

     //slide
     //섹션1 이미지슬라이드
     $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      draggable:false,
      autoplay:true,
     });
     //섹션1 텍스트슬라이드
     $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      focusOnSelect: true,
      loop: true,
      fade: true,
     });
     //섹션3 슬라이드
     $('.slider-celebrity').slick({
      slidesToShow: 3,
      arrows:false,
      dots: false,
      loop: false,
      draggable:false,
      responsive: [
          {
              breakpoint: 767,
              settings: { slidesToShow: 1, dots: true }
          }
      ]
     });
});





    $(document).ready(function(){


    });
