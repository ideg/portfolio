var popupStatus = 0;
var listNum = 0;
var currentContent;
var buttonsId = [
"#agreement-button"
];
var buttonsList = [];
var contentsList = [
"#agreement-content"
]

function loadPopup() {
	if (popupStatus == 0) {
		$("#popup-background").css({
			"opacity": "0.5"
		});
		$("#popup-background").css('height', $('body').css('height'));
		$("#popup-background").fadeIn("slow");
		$(currentContent).fadeIn("slow");
		popupStatus = 1;

	}
}

function disablePopup() {
	if (popupStatus == 1) {
		$("#popup-background").fadeOut("slow");
		$(currentContent).fadeOut("slow");
		popupStatus = 0;
	}
}

function centerPopup() {
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupWidth = $(currentContent).innerWidth();
	var popupHeight = $(currentContent).innerHeight();
	
	$(currentContent).css({
		"position": "absoute",
		"top": windowHeight/2 - popupHeight/2,
		"left":windowWidth/2 - popupWidth/2
	});
}

$(document).ready(function(){
	
	/* ページの高さにコンテンツを合わせる */
	$('.contents-wrap').css('height', document.documentElement.clientHeight > 600 ? document.documentElement.clientHeight : 600 );
	$(window).resize(function(){
	$('.contents-wrap').css('height', document.documentElement.clientHeight > 600 ? document.documentElement.clientHeight : 600 );
	});
	
	/* validation Engine */
	jQuery("#entry-email").validationEngine();
	
	/* コンテンツ内容を読み込む */
　$('.popup-contents').load('agreement.html #quote');
	/* ポップアップコンテンツスクロール */
//	$('.popup-contents').jScrollPane();

	/* ポップアップ処理 */
	for (var i = 0; i < buttonsId.length; i++) {
		
		buttonsList[i] = $(buttonsId[i]).get(0);
		$(contentsList[i]).css("display", "none");
		
		$(buttonsId[i]).click(function() {
			for (var i = 0; i < buttonsList.length; i++) {
				if (buttonsList[i] == this) {
					currentContent = contentsList[i];
					break;
				}
			}
			centerPopup();
			loadPopup();
			$('.popup-contents').jScrollPane();
			return false;
		});
	}
	$(".popup-close").click(function() {
		disablePopup();
	});
	
	$("#popup-background").click(function() {
		disablePopup();
	});


});