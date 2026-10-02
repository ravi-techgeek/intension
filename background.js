// Clicking the toolbar icon opens the Intention page in a new tab.
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL("intention.html") });
});
