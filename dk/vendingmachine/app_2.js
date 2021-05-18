class VendingMachine{
  constructor(){
    this.menu = [
      {
        name: 'Coke',
        price: 1000
      },
      {
        name: 'Sprite',
        price: 900
      }
    ];
  
    this.currentMoney = 0;
  }
  getMenu(select){
    var result = this.menu.filter(function(menuitem) {
      return menuitem.name === select;
    })[0];

    if (this.isValid(result)) {
      console.log(result.name + '이 나왔습니다.');
      this.currentMoney -= result.price;
      console.log('잔액: ' + this.currentMoney);
    } else {
      console.log('구매하기에 돈이 모자랍니다.');
    }
  }
  inputMoney(money){
    this.currentMoney += money;
    console.log(money + '원 입금되어 ' + this.currentMoney + '원이 되었습니다.');
  }
  isValid(item){
    return this.currentMoney >= item.price;
  }
  getChange(){
    var result = this.currentMoney;
    this.currentMoney = 0;
    return result;
  }
  setMenu(){
    for (var index in arguments) {
      if (arguments.hasOwnProperty(index)) {
        this.menu.push(arguments[index]);
      }
    }
  }
}