var vm = new VendingMachine();

vm.setMenu({ name: 'Fanta', price: 800 }, { name: 'Water', price: 300 });
vm.setMenu({ name: 'Fanta', price: 800 });

var $menu = $('.menu');
var $currentMoney = $('.current_money');
var $money = $('.money');
var $btnMoney = $('.btn_money');
var $outputMoney = $('.output_money');
var $btnChange = $('.btn_change');
var $outputItem = $('.output_item');

$btnMoney.on('click', function() {
  var money = Number($money.val());
  console.log(money);

  vm.inputMoney(money);
  $money.val(0);
  $currentMoney.text(vm.currentMoney);
});

$menu.on('click', 'li', function(event) {
  var $selectedItem = $(event.currentTarget);
  var menu = $selectedItem.data('name');
  vm.getMenu(menu);
  $currentMoney.text(vm.currentMoney);
});

$btnChange.on('click', function() {
  $outputMoney.text(vm.getChange());
  $currentMoney.text(vm.currentMoney);
});

function init() {
  $menu.empty();
  vm.menu.forEach(function(menu) {
    var htmlTemplate = '<li data-name="' + menu.name + '">\n' +
      '      ' + menu.name + '\n' +
      '      <span>\n' +
      '          금액: ' + menu.price + '\n' +
      '        </span>\n' +
      '    </li>';
    $menu.append(htmlTemplate);
  });
}

init();
