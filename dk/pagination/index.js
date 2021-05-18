///////////////////추가
const wrap_box = document.querySelector('.wrap_box');

const number_of_box = 10;

for(let j=1;j<number_of_box;j++){
  const box_maker = document.createElement('div');
  box_maker.classList.add('box');
  box_maker.innerHTML=j;
  wrap_box.appendChild(box_maker);
}




//실행
const btn_prev = document.querySelector(".btn_prev");
const btn_next = document.querySelector(".btn_next");
const box = document.querySelectorAll('.box');
const box_length = box.length;

const now_num = document.querySelector('.num_current');
const how_num = document.querySelector('.num_total');

const pg = new Pagination(box_length,box);


btn_next.addEventListener('click',function(){
  pg.click_next(now_num);
  pg.control_btn(btn_prev,btn_next);
  pg.change_box();
})

btn_prev.addEventListener('click',function(){
  pg.click_prev(now_num);
  pg.control_btn(btn_prev,btn_next);
  pg.change_box();
})

//초기화
function init(){//클래스에 넣자 - 렌더링함수로
  box[pg.num].style.display="block"
  now_num.innerHTML = pg.num;
  how_num.innerHTML = box_length;
};

init();




