// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'saveNote') {
    chrome.storage.sync.set({ 'note': request.note }, function() {
      sendResponse({ message: 'Note saved successfully!' });
    });
  } else if (request.action === 'getNote') {
    chrome.storage.sync.get('note', function(data) {
      sendResponse({ note: data.note });
    });
  }
  return true; // Indicates that the response will be sent asynchronously
});
