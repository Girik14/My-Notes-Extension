// popup.js
document.addEventListener('DOMContentLoaded', function() {
  const noteContent = document.getElementById('noteContent');
  const saveButton = document.getElementById('saveNote');
  const clearButton = document.getElementById('clearNotes');

  saveButton.addEventListener('click', function() {
    const content = noteContent.value;
    chrome.runtime.sendMessage({ action: 'saveNote', note: content }, function(response) {
      alert(response.message);
    });
  });

  clearButton.addEventListener('click', function() {
    noteContent.value = '';
  });

  // Load saved note when popup is opened
  chrome.runtime.sendMessage({ action: 'getNote' }, function(response) {
    if (response.note) {
      noteContent.value = response.note;
    }
  });
});
