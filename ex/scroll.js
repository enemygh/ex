'use strict';
document.onkeydown = document.onkeyup = document.onkeypress = null;

var arr = document.body.querySelectorAll(":not(script)"),
	box;
for(let a of arr) {
	if(getComputedStyle(a)["overflow-y"] === "auto") {
		a.scrollTop = 1;
		if(a.scrollTop) {
			// console.log(a);
			a.onmousedown = function() {
				box = this;
			}
		}
	}
}

var x, y, sx, sy, d, m;
window.onmousedown = function() {
	if(event.which === 3) {
		x = event.clientX;
		y = event.clientY;
		if(box) {
			sx = box.scrollLeft;
			sy = box.scrollTop;
		}else {
			sx = window.scrollX;
			sy = window.scrollY;
		}
		d = true;
	}
}

window.onmousemove = function() {
	if(d) {
		if(box) {
			box.scrollLeft = sx - (event.clientX - x) * 2;
			box.scrollTop = sy - (event.clientY - y) * 3;
		}else {
			window.scroll(sx - (event.clientX - x) * 2, sy - (event.clientY - y) * 3);
		}
	}
}

window.onmouseup = function() {
	if(event.which === 3) {
		d = false;
		box = null;
		if(Math.abs(event.clientX - x) > 5 || Math.abs(event.clientY - y) > 5) {
			m = true;
			act(event.clientX, event.clientY);
		}else {
			m = false;
		}
	}
}

window.oncontextmenu = () => m ? false : true;

function act(cx, cy) {
	var dx = Math.abs(cx - x),
		dy = Math.abs(cy - y);
	switch(true) {
		case y < 30 && dy / dx > 3:
			window.scroll(0, 0);
			break;
		case x > window.innerWidth - 30 && dx / dy > 3:
			alert("nextpage.js");
			break;
		case x < 30 && dx / dy > 3:
			chrome.extension.sendRequest(0); // close
			break;
		case dx > 60 && dx / dy > 3:
			chrome.extension.sendRequest(x > cx ? 1 : 2); // 2left | 2right
			break;
	}
}