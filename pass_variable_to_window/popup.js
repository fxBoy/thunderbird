function loadMessage(tabId) {
  browser.messageDisplay.getDisplayedMessage(tabId).then(
    function(val) {
      document.getElementById('author').innerHTML = val.author;
    }
  );
};

async function asyncLoadMail() {
  console.debug('calling getCurrentTab...');
  let tabId = await browser.runtime.sendMessage("getCurrentTabId");
  loadMessage(tabId);
  console.debug('Message in tabId: '+tabId+' successfully loaded');
}

asyncLoadMail();
