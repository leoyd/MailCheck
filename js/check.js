chrome.tabs.onUpdated.addListener(function (tabId , info) {
    if (info.status === 'complete') {
    let manager = new Manager();
    }
});
