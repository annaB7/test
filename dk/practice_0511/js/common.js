
const tabUl = document.querySelector('.js-list-tab');

//탭클릭시 페이지 변경함수 - 즉시실행
const changeTab = (function(){
  const tabLi = tabUl.querySelectorAll('.js-li');

  // for(let i=0;i<tabLi.length;i++){
  //   tabLi[i].addEventListener('click',function(){
  //     for(let j=0;j<tabLi.length;j++){
  //       tabLi[j].classList.remove('on');
  //     }
  //     this.classList.add('on');
  //     moveScroll(this);
  //     changeMain(this);
  //   });
  // }

  tabLi.forEach((ele, idx)=>{
    ele.addEventListener('click',(event)=>{

      tabLi.forEach((liEle) => {
        liEle.classList.remove('on')
      });
      const {currentTarget} = event; // 디스랑 똑같은거다
      moveScroll(currentTarget)
      currentTarget.classList.add('on');
      changeMain(currentTarget, idx);
    })
  })


})();

//탭클릭 스크롤이동 함수
const moveScroll = function(ele){
  //풀자변수는 개별선언해주자
  const eleLeft = ele.offsetLeft,
    thisWidth = ele.offsetWidth,
    ulWidth = tabUl.offsetWidth,//유엘의 사이즈로 변경
    scLeft = eleLeft-(ulWidth/2)+(thisWidth/2);
    tabUl.scrollLeft = scLeft;
}

//탭클릭시 메인 클래스 변경
// const changeMain = function(ele){
//   const mainBody = document.querySelector('.js-main');
//   const arr_main = ['pannel_1', 'pannel_2','pannel_3','pannel_4','pannel_5','pannel_6','pannel_7','pannel_8','pannel_9'];

//   const idx = [].indexOf.call(ele.parentNode.children, ele);
//   mainBody.setAttribute('id',arr_main[idx]);
// }


//리뷰사항
const changeMain = function(ele,idx){
  const mainBody = document.querySelector('.js-main');
  // const arr_main = ['pannel_1', 'pannel_2','pannel_3','pannel_4','pannel_5','pannel_6','pannel_7','pannel_8','pannel_9'];

  // const idx = [].indexOf.call(ele.parentNode.children, ele);
  mainBody.setAttribute('id',`pannel_${idx+1}`);  
}


//토글을 하나의 함수로 합쳐보자

//메뉴관련
const navMore = document.querySelectorAll('.list_gnb>li');
//메뉴토글 - 즉시실행
const toggle_nav = (function(){
  const body = document.querySelector('.js-body');
  const navBtn = document.querySelector('.js-btn-menu');

  navBtn.addEventListener('click',function(){
    body.classList.toggle('open');
    //forEach로 바꿔보자
    for(let i=0;i<navMore.length;i++){
      navMore[i].classList.remove('on');
    }
  });
})();

//메뉴내 토글 - 즉시실행
const toggleMenu = (function(){
  //foreach로 바꿔보자
  for(let i=0;i<navMore.length;i++){
    navMore[i].addEventListener('click',function(){
      this.classList.toggle('on')
    })
  }
})();


//푸터 관련사이트 토글 - 즉시실행
const toggleRelative = (function(){
  //화살표 함수로 바꿔보자
  const relativeBtn = document.querySelector('.js-relative-btn');
  relativeBtn.addEventListener('click',function(){
    this.parentNode.classList.toggle('on');
  });
})();


