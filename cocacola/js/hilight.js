// JavaScript Document
var keep_html = '';
var timerID;
var timer_on = 0;
var opa;
var obj = null;
var appVersion = window.navigator.appVersion.toLowerCase();
	
$(document).ready(function() {
	if (appVersion.indexOf("msie 6.") != -1) {
    return;
	}
	document.getElementById('entry-button1').onmouseover = mouse_over;
	document.getElementById('login-button-wrap').onmouseover = mouse_over;
	document.getElementById('prize1').onmouseover = mouse_over;
	document.getElementById('prize2').onmouseover = mouse_over;
	document.getElementById('prize3').onmouseover = mouse_over;
	document.getElementById('how-to-apply').onmouseover = mouse_over;
	document.getElementById('product').onmouseover = mouse_over;
	document.getElementById('inquiry').onmouseover = mouse_over;
	document.getElementById('entry_button2').onmouseover = mouse_over;
	document.getElementById('olympic-cheering-park').onmouseover = mouse_over;
	document.getElementById('youtube-coca-cola-channel').onmouseover = mouse_over;
	document.getElementById('coca-cola-co-ltd').onmouseover = mouse_over;
	document.getElementById('coca-cola-brand-site').onmouseover = mouse_over;
	document.getElementById('coca-cola-zero').onmouseover = mouse_over;

	document.getElementById('login-button').onclick = click_submit;
});

function mouse_over() {
	if (obj == this) { return; }
	if (timer_on == 1) {
		stop_effect();
	}
	if (timer_on == 0) {
		keep_html = this.innerHTML;
		timer_on = 1;
		obj = this;
		opa = 60;
		timerID = setInterval('hilight()', 30);
	}
}

function hilight() {
	obj.innerHTML = '<img src="images/white.gif" width="100%" height="100%" alt="" style="filter:alpha(opacity=' + opa + ');-moz-opacity:' + opa*0.01 + ';opacity:' + opa*0.01 + ';" />';
	obj.style.textIndent = '0';
	opa -= 20;
	if (opa < 0) {
		stop_effect();
	}
}

function stop_effect() {
		timer_on = 0;
		if (obj != null) {
			obj.innerHTML = keep_html;
			obj.style.textIndent = '-9999px';
		}
		clearInterval(timerID);
}

function click_submit() {
	form.submit();
}
