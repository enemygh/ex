function pw(key) {
	var l = location.hostname.replace(/.*?\.(.*)$/, "$1"),
		b = parseInt(l, 36) * parseInt(key, 36) + "",
		arr = b.split(""),
		str = "";
		
	for(let i in arr) {
		let a = +b.substr(i);
		str += i%2 ? a.toString(36).toUpperCase() : a.toString(36);
	}
	return str.slice(0,14);
}

document.addEventListener("dblclick", function() {
	var a = document.activeElement;
	if(a.tagName === "INPUT") {
		if(a.type === "password") {
			a.value = pw(a.value);
		}else {
			a.value = "your@mail.com";
		}
	}
});
