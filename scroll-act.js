chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	switch(request) {
		case 0: // close
			chrome.tabs.remove(sender.tab.id);
			break;
		case 1: // 2left
			chrome.tabs.query({"currentWindow": true}, function(Tab) {
				var arr = Array.from(Tab, x => x.id),
					i = arr.indexOf(sender.tab.id) || arr.length;
				chrome.tabs.update(arr[--i], {"active": true});
			});
			break;
		case 2: // 2right
			chrome.tabs.query({"currentWindow": true}, function(Tab) {
				var arr = Array.from(Tab, x => x.id),
					i = arr.indexOf(sender.tab.id);
					i = ++i === arr.length ? 0 : i
				chrome.tabs.update(arr[i], {"active": true});
			});
			break;
	}
	// sendResponse("OK");
});