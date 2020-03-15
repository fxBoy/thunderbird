var currentTabId;

browser.messageDisplayAction.onClicked.addListener((tab) => {
  var popupURL = browser.extension.getURL("popup.html");
  currentTabId = tab.id;
  browser.windows.create({
    url: popupURL,
    type: "detached_panel",
    height: 200,
    width: 200
  });
});

browser.runtime.onMessage.addListener(async (msg) => {
  if (msg === "getCurrentTabId") {
    return currentTabId;
  }
});
