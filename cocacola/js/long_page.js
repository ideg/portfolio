// JavaScript Document
var timerID;
var dtElement;
var slicePos;

$(function() {
	var topBtn = $('#page-top-button');	
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}		$('#page-top-button').css('top', getWinYOffset()+getWindowHeight()/2-100);
	});
	//スクロールしてトップ
    topBtn.click(function () {
		$($.browser.opera ? document.compatMode == 'BackCompat' ? 'body' : 'html' :'html,body')
	.animate({scrollTop:0}, 500, 'swing');
		return false;
    });
	// 目次リンククリック
	$('.table-contents-wrap a').click(function () {
		var href= $(this).attr("href");
		var position = $(href).offset().top;
	$($.browser.opera ? document.compatMode == 'BackCompat' ? 'body' : 'html' :'html,body')
		.animate({scrollLeft:0}, 500, 'swing');
			$($.browser.opera ? document.compatMode == 'BackCompat' ? 'body' : 'html' :'html,body')
		.animate({scrollTop:position-20}, 500, 'swing');
			return false;
	});
	
	// よくあるご質問　アコーディオン
	$('dd').hide();
	$('dt').css('cursor', 'pointer').toggle(
		function() {
			dtElement = this;
			slicePos = 3;
			timerID = setInterval('triangleOn()', 50);
			$('+dd', this).slideDown(500, 'swing');
		},
		function() {
			dtElement = this;
			slicePos = 0;
			timerID = setInterval('triangleOff()', 50);
			$('+dd', this).slideUp(500, 'swing');
		});		
});

//Window( Frame )の高さの取得
function getWindowHeight(){
  if(window.innerHeight) return window.innerHeight; // Mozilla, Opera, NN4
  if(document.documentElement && document.documentElement.clientHeight){ // 以下 IE
   return document.documentElement.clientHeight;
  }
  else if(document.body && document.body.clientHeight){
   return document.body.clientHeight;
  }
  return 0;
}
//Window( Frame )のスクリーン上の位置（Y座標）
function getWinYOffset(){
  if(window.scrollY) return window.scrollY; // Mozilla
  if(window.pageYOffset) return window.pageYOffset; // Opera, NN4
  if(document.documentElement && document.documentElement.scrollTop){ // 以下 IE
   return document.documentElement.scrollTop;
  }
  else if(document.body && document.body.scrollTop){
   return document.body.scrollTop;
  }
  return 0;
}

function triangleOn() {
	var defPos = $(dtElement).css('backgroundPosition');
	if (defPos) { // backgroundPositionの値が取れた場合
		$(dtElement).css('backgroundPosition', '0px '+ (slicePos * -25) +'px');
	} else {
		$(dtElement).css('backgroundPositionY', (slicePos * -25) +'px');
	}
	if (--slicePos < 0) {
		clearInterval(timerID);
	}
}
function triangleOff() {
	var defPos = $(dtElement).css('backgroundPosition');
	if (defPos) { // backgroundPositionの値が取れた場合
		$(dtElement).css('backgroundPosition', '0px ' + (slicePos * -25) +'px');
	} else {
		$(dtElement).css('backgroundPositionY', (slicePos * -25) +'px');
	}
	if (++slicePos > 3) {
		clearInterval(timerID);
	}
}