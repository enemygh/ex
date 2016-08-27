"use strict";
(function() {
	function hide(a) {
		var b = a.parentNode;
		b.innerText === "" ? hide(b) : a.remove();
	}
	
	//ipc.me
	Array.from(document.getElementsByClassName("adsbygoogle")).forEach(hide);
	
	var arr = document.body.querySelectorAll("script[src], iframe[src]");
	for(let a of arr) {
		let u = a.src;
		for(let b of black) {
			if((typeof(b) === "string" && u.indexOf(b) !== -1)
			|| (typeof(b) === "object" && b.test(u))) {
				hide(a);
			}
		}
	}
})();