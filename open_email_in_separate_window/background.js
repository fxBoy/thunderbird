var currentTabId;
var currentOpenedWindowId = null;

browser.messageDisplayAction.onClicked.addListener((tab) => {
  var popupURL = browser.extension.getURL("popup.html");
  currentTabId = tab.id;

    browser.windows.create({
      url: popupURL,
      type: "detached_panel",
      height: 200,
      width: 200
    }).then(
      function (window) {
        currentOpenedWindowId = window.id;
      });
  

});

browser.windows.onRemoved.addListener((windowId) => {
  if(currentOpenedWindowId !== null && windowId == currentOpenedWindowId) {
    currentOpenedWindowId = null;
  }


});

browser.runtime.onMessage.addListener(async (msg) => {
  if (msg === "getCurrentTabId") {
    return currentTabId;
  }
});
