chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var currentUrl = window.location.href;

      console.log('current url: ' + currentUrl);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": currentUrl});
    }
  }
);