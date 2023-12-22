// JavaScript Document
var popupStatus = 0;
var listNum = 0;
var currentContent;
var replaceContent;
var buttonsId = [
"#prize1",
"#prize2",
"#prize3",
"#product",
"#inquiry"
];
var buttonsList = [];
var contentsList = [
"#popup-prize1",
"#popup-prize2",
"#popup-prize3",
"#popup-product",
"#popup-inquiry"
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

function replacePopup() {
	if (popupStatus == 1) {
		$(currentContent).fadeOut("slow");
		currentContent = replaceContent;
		centerPopup();
		$(currentContent).fadeIn("slow");
		popupStatus = 1;
	} else {
		popupStatus = 0;
	}

}

$(document).ready(function(){

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
			return false;
		});
	}
	$(".popup-close").click(function() {
		disablePopup();
	});
	
	$("#popup-background").click(function() {
		disablePopup();
	});
	
	$(document).keypress(function(e) {
		if (e.keyCode == 27 && popupStatus == 1) {
			disablePopup();
		};
	});
	
	$(".replace-button").click(function() {
		var replaceId = this.getAttribute("replace");
		replaceContent = $(replaceId).get(0);
		replacePopup();
	});

});
