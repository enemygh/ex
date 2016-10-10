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

/*
var a = location.hostname.replace(/\.com\.cn$/,'.').split('.'),
	b = parseInt(a[a.length - 2], 36) * parseInt('enemy2', 36) + '',
	c = b.split(''),
	str = '';
	
	for(var i in c){
		var a = b.slice(i, c[i] + i) * 1;
		if(i%2){
			str += a.toString(36).toUpperCase();
		}else{
			str += a.toString(36);
		}
	}
	str = str.slice(0,14);
// */
