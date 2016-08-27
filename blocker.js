var callback = function(details) {
	var u = details.url,
		ffind = a => u.indexOf(a) !== -1; // arrow function
	if(
		details.type !== "main_frame"
		&& !white.find(ffind)
		&& (
			/\/{2}.+\/ads?\W/.test(u)
			|| /\/.\.gif\?/.test(u)
			|| black.find(ffind)
			)
	) {
		// console.log(u);
		return {cancel: true};
	}
};

var filter = {
	urls: ['<all_urls>']
};

chrome.webRequest.onBeforeRequest.addListener(
	callback, filter, ['blocking']);