
var par = parent.document;

var showPopup = function(selector){
	$(selector).show().prepend('<div class="dimmed"></div>').find('.box__popup-content').attr('tabindex','0').focus().on('blur', function(){ $(this).removeAttr('tabindex') });
	$('.dimmed').on('click', function(){
		$('.button__close').trigger('click');
	})
}

function scrollContent(tabSelector, contentSelector) {
	var $tabs = $(tabSelector),
		$contents = $(contentSelector);

	// 탭을 클릭했을 때
	$tabs.on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr("href"),
		posY = $(id).offset().top - $('.box__event-navigation-container').height() - 100;

		console.log($('.box__event-navigation-container').height())

		// 객체의 top 값만큼 화면을 이동시키는 모션 적용하기
		$("html, body",par).stop().animate({"scrollTop": posY}, 0);
	});

	// window가 스크롤 될 때
	$(par).on("scroll", function () {
		changeActiveTab();
	});

	// 브라우저가 리사이즈될 때
	$(par).on("resize", function () {
		changeActiveTab();
	});

	// 탭 활성화
	function changeActiveTab() {
		var windowTop = $(par).scrollTop(), targetIndex;
		$contents.each(function (index) {
			var $this = $(this);
			if (windowTop + $('.box__event-navigation-container').height() + 101 < $this.offset().top - $('.box__event-navigation-container').height()-2 + $this.height()) {
				targetIndex = index;
				return false;
			}
		});

		// 탭 활성화 시키기
		if (windowTop + $('.box__event-navigation-container').height() + 101 > $('.box__section-scroll').eq(0).offset().top- $('.box__header').outerHeight()) {
			$tabs.eq(targetIndex).addClass("active").siblings().removeClass("active");
		} else {
			$('.box__event-navigation-container a').removeClass("active");
		}
	}
}

$(document).ready(function(){

	var welNavigation = $('.box__event-navigation');
	var welContainer = welNavigation.find('.box__event-navigation-container');
	$(par).scroll(function(){
        var par_top = $(this).scrollTop();

		var welContainerOffset = welNavigation.offset();
		if($(this).scrollTop() >= welContainerOffset.top-$('.box__header').outerHeight()){
			welContainer.addClass('js-fixed');
            $(".js-fixed").css("top",par_top + "px");
		}else{
			welContainer.removeClass('js-fixed');
            $(".js-fixed").css("top",0 + "px");
		}
	});

	scrollContent(".box__event-navigation-container .link__event-navigation", ".box__section-scroll");

	$('.button__close').on('click', function(){
		$(this).closest('.box__popup').hide().find('.dimmed').remove();
	});

	$('.box__section2 .button__copy').on('click', function(){
		var welTarget = $(this).siblings('input');
		welTarget.select();
		document.execCommand('copy');
		alert('해시태그가 복사되었습니다.');
	});

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop:true
	});

});
