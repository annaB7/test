//이제 여러개일때 순서대로 카운트 되게 해보자
var order;
$(document).ready(function(){
    // for(i=0;i<$("div").length;i++){
    //     var ele;
    //     switch (i){
    //         case 0 :
    //             ele = "result0";
    //             console.log("0");
    //             // setTimeout(start_count,1000 * i,ele);
    //             setTimeout(() => start_count(ele,order),1000 * i);
    //             break;
    //         case 1 :
    //             ele = "result1";
    //             console.log("1");
    //             // setTimeout(start_count,1000 * i,ele);
    //             setTimeout(() => start_count(ele,order),1000 * i);
    //             break;
    //         case 2 :
    //             ele = "result2";
    //             console.log("2");
    //             // setTimeout(start_count,1000 * i,ele);
    //             setTimeout(() => start_count(ele,order),1000 * i);
    //             break;
    //         case 3 :
    //             ele = "result3";
    //             console.log("3");
    //             // setTimeout(start_count,1000 * i,ele);
    //             setTimeout(() => start_count(ele,order),1000 * i);
    //             break;
    //         default :
    //             console.log("오류");
    //     }
    // }
    var how = $(".result").length;
    var ele = "result0";
    setTimeout(() => start_count(ele),1000);
    console.log(how);
});

var timerId = null;

// 카운트 시작
function start_count(ele) {
    // var ele = "result";
    console.log(ele);
    var num_g = 0;
    var result_ori = document.getElementById(ele);
    var num_ori = Number(result_ori.innerText);
    result_ori.innerText = num_ori + 100;
    function Print_num() {//숫자찍기
      var result = document.getElementById(ele);
      var num = Number(result.innerText);
       num--;
       num_g = num;
       result.innerHTML = num;
      if(num_g <= num_ori){
            result.innerHTML = num_ori;
            Stop_count();
        }
    }
    timerId = setInterval(Print_num, 10);
}
// 시계 중지
function Stop_count() {
    if(timerId != null) {clearInterval(timerId);}
    order++;
}


function act(){
    console.log("sdlkfj");
}
