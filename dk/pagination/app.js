
class Pagination{ 
  constructor(total_num,box){
    this.num = 1;
    this.total_num = total_num;
    this.box = box;
  }

  

  click_prev(where){
    if(this.num <= 1){
      this.num = 1
    }else{
      this.num--;
      where.innerHTML = this.num;
    }
  }

  click_next(where){
    if(this.num >= this.total_num){
      this.num = this.total_num;
    }else{
      this.num++;
      where.innerHTML = this.num;
    }
  }

  control_btn(btn_prev,btn_next){
    btn_prev.removeAttribute('disabled');
    btn_next.removeAttribute('disabled');
    if(this.num <= 1){
      btn_prev.setAttribute('disabled','disabled');
    }else{
      btn_prev.removeAttribute('disabled');
    }
    if(this.num >= this.total_num){
      btn_next.setAttribute('disabled','disabled');
    }else{
      btn_next.removeAttribute('disabled');
    }
  }

  change_box(){
    for(let i=0;i<(this.box).length;i++){
      this.box[i].style.display='none';
    }
    this.box[this.num-1].style.display='block';
  }
}